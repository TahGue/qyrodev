# QYRODEV

Website for QYRODEV, an independent software engineering studio in Sweden. Next.js App Router,
TypeScript, Tailwind CSS v4, statically rendered and deployed on Vercel from `main`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
npx tsc --noEmit # type check
```

## Site structure

| Route | Source |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` (four services from `src/content/services.ts`) |
| `/work` | `src/app/work/page.tsx` |
| `/work/[slug]` | `src/app/work/[slug]/page.tsx` (four case studies from `src/content/work.ts`) |
| `/about` | `src/app/about/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/privacy` | `src/app/privacy/page.tsx` |
| `/sitemap.xml`, `/robots.txt` | `src/app/sitemap.ts`, `src/app/robots.ts` |

All copy lives in `src/content/` (`site.ts`, `services.ts`, `work.ts`, `tech.ts`, `audiences.ts`,
`seo.ts`). Components are in `src/components/` and share the design tokens in
`src/app/globals.css`.

Pages are static: `generateStaticParams` pre-renders every service and case study, and the only
client-side JavaScript is the navigation, scroll reveals, the animated brand lockup and the
contact form.

### Contact form

The form validates on the client and composes a `mailto:` message, so there is no backend, no
database and no secret to manage. Submissions arrive in the normal inbox for `hello@qyrodev.com`.
If a form backend is added later, replace `buildMailto` in `src/components/ContactForm.tsx` with
a `fetch` to an API route.

### Booking links

Set `NEXT_PUBLIC_BOOKING_URL` (Cal.com, Calendly, Cal.eu, …) in the hosting environment to point
every "book a call" call to action at a scheduler. Left unset, those CTAs fall back to the
contact form, so no page ever links to a booking page that does not exist.

### Claims and evidence rules

- Case studies never include mock-ups presented as client software. Add real screenshots to
  `media` in `src/content/work.ts` only after the client has cleared them; the page renders
  them automatically, and links to the architecture diagram until then.
- The AI accuracy figure lives in `src/content/site.ts` (`proofMetrics`, `aiEvaluation`) and the
  methodology section on `/about#ai-evaluation`. Keep the wording scoped to the evaluated test
  set and set `links.aiEvaluation` on the case study that quotes it.
- Regulatory wording (BAS, SIE 4, Peppol, K2) is scoped with `scopeNote` on the finance case
  study and must match what the delivery actually implements.

### Metadata and SEO

Each page uses `pageMetadata()` from `src/content/seo.ts` for title, description, canonical URL
and Open Graph/Twitter data. `src/app/sitemap.ts` lists every public route, `robots.txt` allows
crawling, and JSON-LD (Organization, WebSite, Service, FAQPage, AboutPage, CreativeWork) is
rendered per page. `/privacy` is `noindex` and excluded from the sitemap.

Fragments from the old single-page site are remapped by `src/components/LegacyAnchors.tsx`
(`#who` → `/services`, `#faq`/`#contact` → `/contact`, `#results` → the work section). The old
`/logoq.png` asset permanently redirects to the new mark in `next.config.ts`.

## Brand assets

The logo lives in `public/` and is generated from the design source drops:

| Source (repo root, git-ignored) | Output |
| --- | --- |
| `logov2.jpeg` – static lockup | `logo-mark.png` (nav, footer, icons), `favicon.ico`, `icon-192.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, `og-image.jpg` (social card) |
| `qyrodev-logo.gif` – animated lockup | `logo-animation.webm` / `.mp4` + `logo-poster.webp` |

Both sources sit on their own dark canvas, so the build script normalises that canvas to the
site background (`#08090c`) and keys it out for the transparent mark. Re-run after replacing a
source file (and after changing `--background`):

```bash
python3 scripts/build-brand-assets.py   # needs Pillow, numpy and ffmpeg
```

The animation is rendered by `src/components/AnimatedLogo.tsx` in the closing call to action,
directly on the page background so no card edge shows. It plays once when it scrolls into view
and then rests on the poster frame; visitors who prefer reduced motion get the still image.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
