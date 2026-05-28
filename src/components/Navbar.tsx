"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero", section: "hero" },
  { label: "Experiments", href: "#projects", section: "projects" },
  { label: "Solutions", href: "#services", section: "services" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.section);
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F1117]/90 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-[1280px] mx-auto">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="flex items-center gap-2 group">
          <span
            className="material-symbols-outlined text-[#cabeff] text-[32px] transition-transform duration-500 group-hover:rotate-90"
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
          >
            terminal
          </span>
          <Image
            src="/logoq.svg"
            alt="QYRODEV Logo"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative text-sm font-bold tracking-widest uppercase pb-1 transition-colors duration-300 ${
                  isActive ? "text-[#cabeff]" : "text-[#c9c4d8] hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-[2px] bg-[#cabeff] rounded-full transition-all duration-300"
                  style={{ width: isActive ? "100%" : "0%" }}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#cabeff]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[32px]">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-[#111319]/95 backdrop-blur-xl border-b border-white/10`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-bold tracking-widest uppercase py-1 transition-colors ${
                  isActive ? "text-[#cabeff]" : "text-[#c9c4d8] hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
