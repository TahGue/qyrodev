"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { CONTACT_EMAIL } from "@/content/site";

const links = [
  { label: "Products", href: "#products" },
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-lg" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="QYRODEV home">
          <Image src="/logoq.png" alt="" width={28} height={28} className="h-7 w-7 object-contain" priority />
          <span className="font-mono text-sm font-bold tracking-[0.2em]">QYRODEV</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Discovery%20call`}
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Book a call
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-border md:hidden">
        <ul className="flex flex-col px-4 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-muted hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Discovery%20call`}
              className="flex justify-center rounded-full bg-foreground px-4 py-3 text-sm font-semibold text-background"
            >
              Book a call
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
