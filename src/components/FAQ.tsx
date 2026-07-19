"use client";

import type React from "react";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  {
    question: "What makes QYRODEV different from other agencies?",
    answer: "We combine Nordic engineering discipline with AI-first thinking. Every project gets a senior technical architect, a transparent build process, and code that is actually ready for production at scale.",
  },
  {
    question: "Do you only build AI products?",
    answer: "Not at all. While AI and LLM integration is a core strength, we build web apps, mobile apps, games, cloud infrastructure, and automation systems — with or without AI.",
  },
  {
    question: "How long does a typical project take?",
    answer: "MVPs usually ship in 6–10 weeks. Larger enterprise platforms are scoped into monthly milestones with clear deliverables and weekly demos.",
  },
  {
    question: "Can you integrate with our existing team?",
    answer: "Yes. We can operate as a full external team, augment your in-house developers, or hand off a clean codebase and deployment pipeline for your team to own.",
  },
  {
    question: "What does the Q3 2026 onboarding look like?",
    answer: "Discovery call → technical audit → proposal with fixed scope and timeline → kickoff within one week. We keep slots intentionally limited to ensure quality.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Absolutely. We include 30 days of post-launch support and offer ongoing retainers for monitoring, performance tuning, security updates, and feature velocity.",
  },
];

export default function FAQ() {
  const { ref, visible } = useReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-24 bg-[#191b22]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`mb-12 text-center space-y-3 reveal-up ${visible ? "is-visible" : ""}`}>
          <span className="section-tag" style={{ fontFamily: "var(--font-space-grotesk)" }}>Common Questions</span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Signal Clarity
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-xl overflow-hidden group reveal-up reveal-delay-${(i % 5) + 1} ${visible ? "is-visible" : ""}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span
                  className="text-white font-bold text-sm sm:text-base pr-4"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-[#cabeff] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p
                    className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#c9c4d8] text-sm sm:text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
