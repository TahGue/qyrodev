This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Brand assets

The logo lives in `public/` and is generated from the design source drops:

| Source (repo root, git-ignored) | Output |
| --- | --- |
| `logov2.jpeg` – static lockup | `logo-mark.png` (nav, footer, icons), `favicon.ico`, `icon-192.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, `og-image.jpg` (social card) |
| `qyrodev-logo.gif` – animated lockup | `logo-animation.webm` / `.mp4` + `logo-poster.webp` |

Both sources sit on their own dark canvas, so the build script normalises that canvas to the
site background (`#0a0b10`) and keys it out for the transparent mark. Re-run after replacing a
source file:

```bash
python3 scripts/build-brand-assets.py   # needs Pillow, numpy and ffmpeg
```

The animation is rendered by `src/components/AnimatedLogo.tsx` (inside the brand band after the
hero). It plays once when it scrolls into view and then rests on the poster frame; visitors who
prefer reduced motion get the still image.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
