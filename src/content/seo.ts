import type { Metadata } from "next";
import { SITE } from "./site";

const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "QYRODEV: Built with intelligence. Engineered for impact.",
};

type Props = {
  /** Page title without the site suffix. */
  title: string;
  description: string;
  /** Root-relative path, e.g. "/services/ai-engineering". */
  path: string;
  noindex?: boolean;
};

/**
 * Per-page metadata. Open Graph and Twitter blocks replace the layout defaults
 * when a page defines them, so they are repeated here with the page's own copy.
 */
export function pageMetadata({ title, description, path, noindex = false }: Props): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      url: `${SITE.url}${path}`,
      siteName: SITE.name,
      locale: "en",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      site: "@qyrodev",
      creator: "@qyrodev",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
