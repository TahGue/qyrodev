"use client";

import type React from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    number: "01",
    color: "#cabeff",
    title: "Discovery",
    desc: "We dissect your goals, constraints, and competitive landscape. No assumptions — only first principles.",
  },
  {
    number: "02",
    color: "#4cd6ff",
    title: "Architecture",
    desc: "System design that scales from MVP to millions. Every decision documented and justified.",
  },
  {
    number: "03",
    color: "#aec6ff",
    title: "Design",
    desc: "Interactive prototypes that feel real before a single line of code is written. Tested with users.",
  },
  {
    number: "04",
    color: "#ffb4ab",
    title: "Build",
    desc: "Iterative sprints with weekly demos. Full transparency — you see everything as it happens.",
  },
  {
    number: "05",
    color: "#cabeff",
    title: "Launch",
    desc: "Zero-downtime deployments, load tested, monitored. We stay on-call for 30 days post-launch.",
  },
  {
    number: "06",
    color: "#4cd6ff",
    title: "Evolve",
    desc: "Monthly retrospectives, performance audits, and feature velocity that compounds over time.",
  },
];

export default function Process() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 sm:py-24 bg-[#191b22]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`mb-14 text-center space-y-3 reveal-up ${visible ? "is-visible" : ""}`}>
          <span className="section-tag" style={{ fontFamily: "var(--font-space-grotesk)" }}>How We Work</span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            The QYRODEV Protocol
          </h2>
          <p
            className="text-[#c9c4d8] max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            A battle-tested process refined across 50+ projects. Predictable, transparent, relentless.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`glass-card rounded-xl p-6 group hover:border-white/10 transition-all duration-300 reveal-up reveal-delay-${(i % 5) + 1} ${visible ? "is-visible" : ""}`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-[#484555] text-xs font-bold tracking-widest"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.number}
                </span>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${step.color}18` }}
                >
                  <Image
                    src="/logoq.png"
                    alt=""
                    width={22}
                    height={22}
                    className="w-[22px] h-[22px]"
                    style={{ filter: `brightness(0) saturate(100%) invert(39%) sepia(89%) saturate(423%) hue-rotate(199deg) brightness(97%) contrast(91%)` }}
                  />
                </div>
              </div>

              {/* Connector line */}
              <div
                className="h-px w-10 mb-5 rounded-full"
                style={{ background: `linear-gradient(to right, ${step.color}60, transparent)` }}
              />

              <h3
                className="text-base font-bold text-white mb-2 group-hover:text-[#cabeff] transition-colors duration-300"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#c9c4d8] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
