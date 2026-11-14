"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV } from "@/content/site";
import LogoMark from "./LogoMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="QYRODEV home">
          <LogoMark size={28} priority />
          <span className="font-mono text-sm font-bold tracking-[0.18em]">QYRODEV</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive(item.href) ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
            Start a project
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-border bg-background lg:hidden">
        <ul className="container-x flex flex-col py-2">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block border-b border-border/60 py-3 text-base ${
                  isActive(item.href) ? "text-foreground" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="py-3">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
