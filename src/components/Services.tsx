"use client";

import type React from "react";
import { useReveal } from "@/hooks/useReveal";

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-20 max-w-[1280px] mx-auto px-4 sm:px-6 bg-[#0F1117]"
    >
      {/* Header */}
      <div className={`mb-12 text-center md:text-left space-y-3 reveal-up ${visible ? "is-visible" : ""}`}>
        <span className="section-tag" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          What we build
        </span>
        <h2
          className="text-2xl sm:text-[32px] font-bold text-white tracking-tight"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Our Core Directives
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-[#4cd6ff]/40 via-[#cabeff]/20 to-transparent" />
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Solutions */}
        <div className={`neon-card glass-card p-6 rounded-xl group transition-all duration-300 reveal-up reveal-delay-1 ${visible ? "is-visible" : ""}`}>
          <div className="text-[#484555] text-xs font-bold tracking-widest mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>01</div>
          <div className="w-12 h-12 rounded-lg bg-[#cabeff]/10 flex items-center justify-center mb-6">
            <span
              className="material-symbols-outlined text-[#cabeff] text-[32px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              neurology
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-black transition-colors duration-300 mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
            AI Solutions
          </h3>
          <p className="text-[#c9c4d8] text-base leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Custom LLM integrations and neural network deployments for high-scale enterprise needs.
          </p>
        </div>

        {/* Web Development */}
        <div className={`neon-card glass-card p-6 rounded-xl group transition-all duration-300 reveal-up reveal-delay-2 ${visible ? "is-visible" : ""}`}>
          <div className="text-[#484555] text-xs font-bold tracking-widest mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>02</div>
          <div className="w-12 h-12 rounded-lg bg-[#4cd6ff]/10 flex items-center justify-center mb-6">
            <span
              className="material-symbols-outlined text-[#4cd6ff] text-[32px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              code
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-black transition-colors duration-300 mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
            Web Development
          </h3>
          <p className="text-[#c9c4d8] text-base leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Blazing fast performance meets ethereal design. Built for the modern edge.
          </p>
        </div>

        {/* Mobile Apps */}
        <div className={`neon-card glass-card p-6 rounded-xl group transition-all duration-300 reveal-up reveal-delay-3 ${visible ? "is-visible" : ""}`}>
          <div className="text-[#484555] text-xs font-bold tracking-widest mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>03</div>
          <div className="w-12 h-12 rounded-lg bg-[#aec6ff]/10 flex items-center justify-center mb-6">
            <span
              className="material-symbols-outlined text-[#aec6ff] text-[32px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              smartphone
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-black transition-colors duration-300 mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
            Mobile Apps
          </h3>
          <p className="text-[#c9c4d8] text-base leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Cross-platform excellence that feels native. Engineered for high retention.
          </p>
        </div>

        {/* Game Development — wide card */}
        <div className={`neon-card glass-card md:col-span-2 p-6 rounded-xl group transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left reveal-up reveal-delay-4 ${visible ? "is-visible" : ""}`}>
          <div className="w-24 h-24 shrink-0 rounded-full bg-[#282a30] flex items-center justify-center border border-white/10">
            <span className="material-symbols-outlined text-[#4cd6ff] text-[48px]">sports_esports</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-black transition-colors duration-300 mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
              Game Development
            </h3>
            <p className="text-[#c9c4d8] text-base leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Immersive 3D worlds and interactive storytelling utilizing Unreal Engine and custom shaders.
            </p>
          </div>
        </div>

        {/* Automation */}
        <div className={`neon-card glass-card p-6 rounded-xl group transition-all duration-300 reveal-up reveal-delay-5 ${visible ? "is-visible" : ""}`}>
          <div className="text-[#484555] text-xs font-bold tracking-widest mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>05</div>
          <div className="w-12 h-12 rounded-lg bg-[#ffb4ab]/10 flex items-center justify-center mb-6">
            <span
              className="material-symbols-outlined text-[#ffb4ab] text-[32px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              settings_suggest
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-black transition-colors duration-300 mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
            Automation
          </h3>
          <p className="text-[#c9c4d8] text-base leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Seamless workflows that scale. We automate the mundane so you can create.
          </p>
        </div>
      </div>
    </section>
  );
}
