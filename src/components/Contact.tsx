"use client";

import type React from "react";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { ref, visible } = useReveal();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 sm:py-20 px-4 sm:px-6 bg-[#0F1117] reveal-zoom ${visible ? "is-visible" : ""}`}
    >
      <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 sm:p-12 text-center border-t border-[#cabeff]/30 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#cabeff]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <h2
          className="text-2xl sm:text-[32px] font-bold text-white mb-3 relative z-10"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Ready to build the future?
        </h2>
        <p
          className="text-[#c9c4d8] text-lg mb-10 relative z-10"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          We&apos;re currently accepting high-impact projects for Q3 2025.
        </p>

        {sent ? (
          <div className="relative z-10">
            <div className="text-4xl mb-3">🚀</div>
            <p
              className="text-[#4cd6ff] font-bold tracking-widest text-sm uppercase"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Transmission received — we&apos;ll be in touch.
            </p>
          </div>
        ) : (
          <button
            onClick={() => setSent(true)}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#0F1117] font-bold text-sm tracking-widest uppercase rounded relative z-10 hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            TRANSMIT INQUIRY
          </button>
        )}
      </div>
    </section>
  );
}
