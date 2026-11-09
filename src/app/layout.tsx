import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const BASE_URL = "https://qyrodev.com";
const TITLE = "QYRODEV | Grounded AI & business software, built in Sweden";
const DESCRIPTION =
  "QYRODEV is the independent studio of Tahar Guemir. Grounded AI assistants that never guess, private on-prem AI, and full-stack business platforms for Nordic companies.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: TITLE, template: "%s | QYRODEV" },
  description: DESCRIPTION,
  keywords: [
    "grounded AI",
    "RAG",
    "local LLM",
    "on-prem AI",
    "AI consultant Sweden",
    "Next.js developer",
    "SaaS development",
    "Swedish accounting software",
    "QYRODEV",
  ],
  authors: [{ name: "Tahar Guemir", url: BASE_URL }],
  creator: "QYRODEV",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "QYRODEV",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QYRODEV: AI you can trust" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@qyrodev",
    creator: "@qyrodev",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ rel: "icon", url: "/logoq.png", type: "image/png" }],
    shortcut: "/logoq.png",
    apple: "/logoq.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0b10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}
