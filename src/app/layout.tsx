import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, SITE } from "@/content/site";
import { services } from "@/content/services";
import { techGroups } from "@/content/tech";

const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], display: "swap" });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Engineering the software. Intelligence behind the business.`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "custom software development",
    "AI development services",
    "private AI implementation",
    "AI automation",
    "business process automation",
    "SaaS development",
    "digital product engineering",
    "software engineering Sweden",
    "QYRODEV",
  ],
  authors: [{ name: "Tahar Guemir", url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en",
    title: `${SITE.name} — Engineering the software. Intelligence behind the business.`,
    description: SITE.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "QYRODEV: Built with intelligence. Engineered for impact." }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@qyrodev",
    creator: "@qyrodev",
    title: `${SITE.name} — Engineering the software. Intelligence behind the business.`,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo-mark.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo-mark.png`,
  image: `${SITE.url}/og-image.jpg`,
  description: SITE.description,
  slogan: SITE.tagline,
  email: CONTACT_EMAIL,
  address: { "@type": "PostalAddress", addressCountry: "SE" },
  areaServed: [
    { "@type": "Country", name: "Sweden" },
    { "@type": "AdministrativeArea", name: "European Union" },
  ],
  sameAs: [LINKEDIN_URL, GITHUB_URL],
  knowsAbout: [
    ...services.map((s) => s.title),
    ...techGroups.flatMap((g) => g.items),
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: "en",
  publisher: { "@id": `${SITE.url}/#organization` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${jetbrains.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={organization} />
        <JsonLd data={website} />
      </body>
    </html>
  );
}
