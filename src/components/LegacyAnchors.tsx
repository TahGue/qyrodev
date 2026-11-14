"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// The previous site used these fragments; keep old deep links working.
const LEGACY_HASHES: Record<string, string> = {
  who: "/services",
  faq: "/contact",
  contact: "/contact",
  results: "#work",
  process: "#process",
  services: "#services",
};

/** Maps fragments from the previous single-page site onto their new homes. */
export default function LegacyAnchors() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    const target = LEGACY_HASHES[hash];
    if (!target) return;

    if (target.startsWith("/")) {
      router.replace(target);
      return;
    }

    document.getElementById(target.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [router]);

  return null;
}
