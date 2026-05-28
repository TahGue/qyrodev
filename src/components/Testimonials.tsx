"use client";

import type React from "react";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    quote: "QYRODEV rebuilt our entire data pipeline in 6 weeks. What used to take 4 hours now runs in 11 seconds. The ROI was immediate and staggering.",
    name: "Erik Lindqvist",
    role: "CTO, Axiom Systems",
    avatar: "EL",
    color: "#cabeff",
  },
  {
    quote: "They designed and shipped our mobile app in under 3 months. It felt like having a world-class product team embedded inside our company.",
    name: "Amara Osei",
    role: "Founder, Luminary Health",
    avatar: "AO",
    color: "#4cd6ff",
  },
  {
    quote: "The AI integration they built handles 40,000 requests per day with 99.97% uptime. Technically flawless, and they were a joy to work with.",
    name: "Marco Ferretti",
    role: "VP Engineering, NovaPay",
    avatar: "MF",
    color: "#aec6ff",
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-24 bg-[#0F1117]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`mb-14 text-center space-y-3 reveal-up ${visible ? "is-visible" : ""}`}>
          <span className="section-tag" style={{ fontFamily: "var(--font-space-grotesk)" }}>Signal Received</span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            What Clients Transmit
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-7 flex flex-col gap-6 group hover:border-white/10 transition-all duration-300 reveal-zoom reveal-delay-${i + 1} ${visible ? "is-visible" : ""}`}
            >
              {/* Quote mark */}
              <div
                className="text-[48px] leading-none font-black select-none"
                style={{ color: t.color, fontFamily: "var(--font-orbitron)", opacity: 0.4 }}
              >
                "
              </div>

              <p
                className="text-[#c9c4d8] text-base leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-white/5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: `${t.color}20`, color: t.color, fontFamily: "var(--font-space-grotesk)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="text-white text-sm font-bold"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[#c9c4d8] text-xs opacity-70"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
