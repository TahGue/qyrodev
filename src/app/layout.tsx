import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://qyrodev.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "QYRODEV | Born in the North, Crafted in the Cloud",
    template: "%s | QYRODEV",
  },
  description:
    "QYRODEV builds AI-powered digital experiences at the intersection of technical precision and creative ambition. Web, mobile, AI, and game development — crafted in the cloud.",
  keywords: [
    "AI development",
    "web development",
    "mobile apps",
    "game development",
    "Nordic tech",
    "QYRODEV",
    "cloud software",
    "LLM integration",
  ],
  authors: [{ name: "QYRODEV", url: BASE_URL }],
  creator: "QYRODEV",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "QYRODEV",
    title: "QYRODEV | Born in the North, Crafted in the Cloud",
    description:
      "AI-powered digital experiences built with Nordic precision. Web, mobile, AI and game development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QYRODEV — Born in the North, Crafted in the Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@qyrodev",
    creator: "@qyrodev",
    title: "QYRODEV | Born in the North, Crafted in the Cloud",
    description:
      "AI-powered digital experiences built with Nordic precision.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { rel: "icon", url: "/logoq.png", type: "image/png" },
    ],
    shortcut: "/logoq.png",
    apple: "/logoq.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#0F1117",
    "color-scheme": "dark",
    "msapplication-TileColor": "#0F1117",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0F1117] text-[#e2e2eb] scanlines">{children}</body>
    </html>
  );
}
