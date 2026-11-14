#!/usr/bin/env python3
"""Build the web-ready brand assets in public/ from the source drops in the repo root.

Sources
-------
logov2.jpeg        static brand lockup (mark + wordmark + tagline) on a dark canvas
qyrodev-logo.gif   the same lockup, animated (150 frames, ~10 s, 15 fps)

Outputs (all written to public/)
--------------------------------
logo-mark.png            transparent square mark (nav, footer, icons)
icon-192.png             PWA icon (logo-mark.png serves 512)
icon-maskable-512.png    maskable PWA icon (padded, opaque page background)
apple-touch-icon.png     iOS home-screen icon (opaque page background)
favicon.ico              16/32/48 px classic favicon
og-image.jpg             1200x630 social card (Open Graph / Twitter)
logo-animation.webm      animated lockup, VP9 (small)
logo-animation.mp4       animated lockup, H.264 (Safari fallback)
logo-poster.webp         still frame used as poster + reduced-motion fallback

Both the stills and the animation get their background normalised to the site
background (#08090c) so the lockup sits on the page without a visible box.

Requirements: Python 3 with Pillow + numpy, and ffmpeg on PATH.

Usage: python3 scripts/build-brand-assets.py
"""

from __future__ import annotations

import shutil
import subprocess
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
SITE_BG = (8, 9, 12)  # --background in src/app/globals.css (#08090c)

LOCKUP_JPEG = ROOT / "logov2.jpeg"
LOCKUP_GIF = ROOT / "qyrodev-logo.gif"

# Crops (in source pixels) around the mark and around the full lockup, found by
# measuring where the artwork sits on the dark canvas.
MARK_CROP = (340, 380, 1030, 1160)  # x0, y0, x1, y1
LOCKUP_PAD = 18  # px of breathing room around the animated lockup


def _border_median(rgb: np.ndarray) -> np.ndarray:
    border = np.concatenate([rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]])
    return np.median(border, axis=0).round().astype(np.int16)


def normalize_bg(img: Image.Image) -> Image.Image:
    """Shift the canvas so its background is exactly SITE_BG (keeps gradients)."""
    rgb = np.asarray(img.convert("RGB")).astype(np.int16)
    shift = np.array(SITE_BG, dtype=np.int16) - _border_median(rgb)
    out = np.clip(rgb + shift, 0, 255).astype(np.uint8)
    return Image.fromarray(out)


def content_box(img: Image.Image, threshold: int = 60) -> tuple[int, int, int, int]:
    """Bounding box of pixels that differ clearly from the canvas background."""
    rgb = np.asarray(img.convert("RGB")).astype(np.int16)
    diff = np.abs(rgb - _border_median(rgb)).sum(axis=2)
    ys, xs = np.where(diff > threshold)
    return int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())


def key_out_dark(img: Image.Image, lo: float = 26.0, hi: float = 48.0) -> Image.Image:
    """Turn the near-black canvas into transparency, keeping the glow softly feathered."""
    rgb = np.asarray(img.convert("RGB")).astype(np.float32)
    alpha = np.clip((rgb.mean(axis=2) - lo) / (hi - lo), 0.0, 1.0)
    alpha[alpha < 0.07] = 0.0
    alpha = np.asarray(Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2)))
    alpha = alpha.astype(np.float32) / 255.0
    alpha[alpha < 0.08] = 0.0
    return Image.fromarray(np.dstack([rgb, alpha * 255]).astype(np.uint8), "RGBA")


def fit_on_square(img: Image.Image, size: int, fill: tuple[int, int, int, int] | None = None) -> Image.Image:
    """Center `img` on a square canvas, scaled so it spans 92% of the shorter side."""
    scale = size * 0.92 / max(img.size)
    scaled = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), fill if fill else (0, 0, 0, 0))
    canvas.alpha_composite(scaled, ((size - scaled.width) // 2, (size - scaled.height) // 2))
    return canvas


def build_mark() -> Image.Image:
    source = Image.open(LOCKUP_JPEG).convert("RGB").crop(MARK_CROP)
    source = source.resize((512, round(source.height * 512 / source.width)), Image.LANCZOS)
    return key_out_dark(source)


def build_og_image() -> None:
    img = Image.open(LOCKUP_JPEG).convert("RGB")
    img = normalize_bg(img)
    # Keep the full lockup composition, trim to the 1.91:1 social ratio.
    target_h = round(img.width / (1200 / 630))
    top = (img.height - target_h) // 2
    img = img.crop((0, top, img.width, top + target_h)).resize((1200, 630), Image.LANCZOS)
    img.save(PUBLIC / "og-image.jpg", quality=88, optimize=True, progressive=True)


def build_animation(workdir: Path) -> None:
    gif = Image.open(LOCKUP_GIF)
    frames = []
    for i in range(gif.n_frames):
        gif.seek(i)
        frames.append(normalize_bg(gif.convert("RGB").copy()))

    left, top, right, bottom = content_box(frames[0], threshold=90)
    crop = (
        max(0, left - LOCKUP_PAD),
        max(0, top - LOCKUP_PAD),
        min(frames[0].width, right + LOCKUP_PAD),
        min(frames[0].height, bottom + LOCKUP_PAD),
    )
    width = 720
    height = round((crop[3] - crop[1]) * width / (crop[2] - crop[0]) / 2) * 2  # even for H.264

    frame_dir = workdir / "frames"
    frame_dir.mkdir()
    for i, frame in enumerate(frames):
        frame.crop(crop).resize((width, height), Image.LANCZOS).save(frame_dir / f"f{i:03d}.png")

    # Poster: the calm first frame of the loop seam.
    frames[0].crop(crop).resize((width, height), Image.LANCZOS).save(PUBLIC / "logo-poster.webp", quality=90)

    fps = 15
    scale = f"scale={width}:{height}:flags=lanczos"

    def ffmpeg(*args: str) -> None:
        subprocess.run(
            ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-framerate", str(fps),
             "-i", str(frame_dir / "f%03d.png"), *args],
            check=True,
        )

    ffmpeg("-vf", scale, "-c:v", "libvpx-vp9", "-crf", "33", "-b:v", "0", "-row-mt", "1",
           "-pix_fmt", "yuv420p", "-an", str(PUBLIC / "logo-animation.webm"))
    ffmpeg("-vf", f"{scale},format=yuv420p", "-c:v", "libx264", "-crf", "23", "-preset", "slow",
           "-profile:v", "high", "-movflags", "+faststart", "-an", str(PUBLIC / "logo-animation.mp4"))
    print(f"animation: {width}x{height} (keep in sync with WIDTH/HEIGHT in src/components/AnimatedLogo.tsx)")


def build_icons(mark: Image.Image) -> None:
    # Navbar / footer mark: transparent, tightly fitted. Also serves as the 512 icon.
    fit_on_square(mark, 512).save(PUBLIC / "logo-mark.png", optimize=True)
    fit_on_square(mark, 192).save(PUBLIC / "icon-192.png", optimize=True)

    # Opaque icons: home screens put them on their own background.
    opaque = SITE_BG + (255,)
    fit_on_square(mark, 180, opaque).save(PUBLIC / "apple-touch-icon.png", optimize=True)
    small = Image.new("RGBA", (512, 512), opaque)
    scaled = mark.resize((round(mark.width * 512 * 0.7 / max(mark.size)), round(mark.height * 512 * 0.7 / max(mark.size))), Image.LANCZOS)
    small.alpha_composite(scaled, ((512 - scaled.width) // 2, (512 - scaled.height) // 2))
    small.save(PUBLIC / "icon-maskable-512.png", optimize=True)

    ico = fit_on_square(mark, 48)
    ico.save(PUBLIC / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])


def main() -> None:
    for source in (LOCKUP_JPEG, LOCKUP_GIF):
        if not source.exists():
            raise SystemExit(f"missing source asset: {source}")
    if shutil.which("ffmpeg") is None:
        raise SystemExit("ffmpeg is required to build the animation")

    mark = build_mark()
    build_icons(mark)
    build_og_image()
    with tempfile.TemporaryDirectory() as tmp:
        build_animation(Path(tmp))

    for name in ("logo-mark.png", "og-image.jpg", "logo-animation.webm", "logo-animation.mp4", "logo-poster.webp"):
        print(f"{name:24s} {(PUBLIC / name).stat().st_size / 1024:8.1f} KiB")


if __name__ == "__main__":
    main()
