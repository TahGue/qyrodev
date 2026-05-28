"use client";

import type React from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-20 max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-[#0F1117]"
    >
      {/* Left — Image */}
      <div className={`relative reveal-left ${visible ? "is-visible" : ""}`}>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#cabeff]/20 rounded-full blur-[60px] pointer-events-none" />
        <div className="glass-card p-1 rounded-2xl relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
            alt="Nordic Precision"
            width={800}
            height={533}
            className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover"
          />
        </div>
      </div>

      {/* Right — Story + Stats */}
      <div className={`space-y-6 reveal-right-soft ${visible ? "is-visible" : ""}`}>
        <span className="section-tag" style={{ fontFamily: "var(--font-space-grotesk)" }}>About</span>

        <h2
          className="text-2xl sm:text-[32px] font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Nordic Precision, Global Vision
        </h2>

        <p
          className="text-[#c9c4d8] text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Inspired by the stoic landscapes of the North and the intricate geometric patterns of Arabic art,
          QYRODEV was founded as an experimental workshop to push the boundaries of what&apos;s possible
          at the intersection of AI and human experience.
        </p>

        <div className="flex flex-wrap gap-6 sm:gap-8 pt-2">
          <div className="text-center">
            <div
              className="stat-number font-bold text-2xl sm:text-[32px]"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              12+
            </div>
            <div
              className="text-xs text-[#c9c4d8] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Active Projects
            </div>
          </div>
          <div className="text-center">
            <div
              className="stat-number font-bold text-2xl sm:text-[32px]"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              0.4s
            </div>
            <div
              className="text-xs text-[#c9c4d8] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Avg Load Time
            </div>
          </div>
          <div className="text-center">
            <div
              className="stat-number font-bold text-2xl sm:text-[32px]"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              ∞
            </div>
            <div
              className="text-xs text-[#c9c4d8] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Coffee/Loop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
