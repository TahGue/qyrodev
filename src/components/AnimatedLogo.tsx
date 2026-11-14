"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeMotion(onChange: () => void) {
  const mql = window.matchMedia(MOTION_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}
const isReducedMotion = () => window.matchMedia(MOTION_QUERY).matches;
const isReducedMotionOnServer = () => false;

// Intrinsic size of public/logo-animation.{webm,mp4} and public/logo-poster.webp.
const WIDTH = 720;
const HEIGHT = 292;

type Props = {
  className?: string;
};

/**
 * The animated QYRODEV lockup. The canvas background of the source art was normalised to
 * --background, so it sits on the page as if it were drawn there.
 *
 * The animation plays once when it scrolls into view and then rests on its final frame,
 * which matches the poster, so nothing keeps moving on the page. Visitors who ask for
 * reduced motion (or who don't run JavaScript) simply get the still frame.
 */
export default function AnimatedLogo({ className = "" }: Props) {
  const reduced = useSyncExternalStore(subscribeMotion, isReducedMotion, isReducedMotionOnServer);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = video.current;
    if (reduced || !el) return;

    // Rest on the loop seam once the clip has played through.
    const onEnded = () => {
      el.currentTime = 0;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => {
            /* Autoplay refused: the poster stays visible. */
          });
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    el.addEventListener("ended", onEnded);
    observer.observe(el);
    return () => {
      el.removeEventListener("ended", onEnded);
      observer.disconnect();
    };
  }, [reduced]);

  if (reduced) {
    return (
      <Image src="/logo-poster.webp" alt="" width={WIDTH} height={HEIGHT} className={`h-auto w-full ${className}`} />
    );
  }

  return (
    <video
      ref={video}
      className={`h-auto w-full ${className}`}
      width={WIDTH}
      height={HEIGHT}
      muted
      playsInline
      preload="metadata"
      poster="/logo-poster.webp"
      aria-hidden
    >
      <source src="/logo-animation.webm" type="video/webm" />
      <source src="/logo-animation.mp4" type="video/mp4" />
    </video>
  );
}
