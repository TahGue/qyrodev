"use client";

import type React from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function Footer() {
  const { ref, visible } = useReveal(0.05);
  const links = [
    { label: "Experiments", href: "#projects" },
    { label: "Solutions", href: "#services" },
    { label: "Legacy", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer ref={ref as React.RefObject<HTMLElement>} className={`bg-[#0F1117] border-t border-white/5 relative w-full reveal-fade ${visible ? "is-visible" : ""}`}>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 py-10 sm:py-12 gap-6 max-w-[1280px] mx-auto">
        {/* Logo + copyright */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#cabeff]"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            >
              terminal
            </span>
            <Image
              src="/logoq.png"
              alt="QYRODEV Logo"
              width={24}
              height={24}
              className="h-6 w-auto object-contain"
            />
          </div>
          <p
            className="text-[#c9c4d8] text-[10px] sm:text-xs font-bold tracking-widest uppercase opacity-80 text-center md:text-left"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            © {new Date().getFullYear()} QYRODEV. BORN IN THE NORTH, CRAFTED IN THE CLOUD.
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold text-[#c9c4d8] hover:text-white transition-colors duration-200 tracking-widest uppercase opacity-70 hover:opacity-100"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/qyrodev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-[#c9c4d8] hover:text-white hover:border-white/30 transition-all duration-200 opacity-70 hover:opacity-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/qyrodev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-[#c9c4d8] hover:text-white hover:border-white/30 transition-all duration-200 opacity-70 hover:opacity-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
