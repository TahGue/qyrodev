"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["Digital Experiences", "AI-Powered Futures", "Nordic Innovation", "Cloud-Crafted Products"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Particle system
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const size = Math.random() * 2 + 1;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      const dur = Math.random() * 10 + 5;
      const del = Math.random() * 10;
      p.style.animation = `float-particle ${dur}s ease-in-out ${del}s infinite`;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  // Typewriter
  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden pt-20">
      {/* Background layers */}
      <div className={`absolute inset-0 overflow-hidden z-0 pointer-events-none bg-[#0F1117]${mounted ? " dot-grid" : ""}`}>
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        {mounted && <div className="aurora-blob aurora-3" />}
        {mounted && <div className="noise-overlay" />}
        <div ref={containerRef} className="absolute inset-0" />
        <div className="mountain-silhouette" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full space-y-6 sm:space-y-8">

        {/* Glitch badge */}
        <div className="flex justify-center">
          <span className="section-tag" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Northern Digital Precinct
          </span>
        </div>

        {/* Static line */}
        <p
          className="text-xs sm:text-sm text-[#484555] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          QYRODEV_OS v2.0 — BOOT SEQUENCE COMPLETE
        </p>

        {/* Headline with typewriter */}
        <div>
          <h1
            className="text-[28px] sm:text-[42px] md:text-[58px] lg:text-[68px] font-black text-white leading-tight glow-text"
            style={{ fontFamily: "var(--font-orbitron)", letterSpacing: "-0.03em" }}
          >
            QYRODEV
          </h1>
          <div
            className="text-[18px] sm:text-[26px] md:text-[36px] font-bold mt-1 typewriter-cursor"
            style={{
              fontFamily: "var(--font-orbitron)",
              background: "linear-gradient(90deg, #cabeff, #4cd6ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              minHeight: "1.4em",
            }}
          >
            {displayed}
          </div>
        </div>

        <p
          className="text-sm sm:text-base text-[#c9c4d8] max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Born in the North, Crafted in the Cloud. A fusion of extreme technical precision and boundless creative enthusiasm.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-xs sm:text-sm tracking-widest uppercase rounded glow-accent w-full sm:w-auto"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline px-6 sm:px-8 py-3 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase rounded w-full sm:w-auto"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            START A PROJECT
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator pt-4 opacity-40">
          <span className="text-[10px] tracking-widest uppercase text-[#c9c4d8]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#4cd6ff] to-transparent" />
        </div>
      </div>
    </section>
  );
}
