"use client";

import type React from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    tag: "Active Experiment",
    tagColor: "text-[#4cd6ff]",
    title: "AETHER DASHBOARD",
    desc: "Next-gen telemetry visualization for distributed cloud networks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    tag: "Neural Concept",
    tagColor: "text-[#cabeff]",
    title: "NORDIC NEURAL GATE",
    desc: "Custom inference engine optimized for low-latency edge computing.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    tag: "Web Deployment",
    tagColor: "text-[#aec6ff]",
    title: "KINETIC VESTIGE",
    desc: "A high-performance e-commerce engine with zero-latency navigation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

const delayClass = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-[#191b22] py-20 reveal ${visible ? "is-visible" : ""}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-10 sm:mb-12">
          <div className="space-y-3">
            <span className="section-tag" style={{ fontFamily: "var(--font-space-grotesk)" }}>Selected Work</span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              The Experiment Lab
            </h2>
            <p className="text-[#c9c4d8]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Ongoing concepts and live deployments.
            </p>
          </div>
          <a
            href="#contact"
            className="text-[#cabeff] text-sm font-bold flex items-center gap-2 hover:underline tracking-widest uppercase self-start sm:self-auto"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            EXPLORE ALL{" "}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card relative group overflow-hidden rounded-xl border border-white/5 bg-[#1e1f26] reveal ${visible ? "is-visible" : ""} ${delayClass[i]}`}
            >
              <div className="card-shine" />
              <div className="aspect-video bg-[#33343b] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span
                  className={`text-xs font-bold ${project.tagColor} uppercase tracking-widest`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.tag}
                </span>
                <h4
                  className="text-lg font-bold text-white mt-1"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {project.title}
                </h4>
                <p
                  className="text-[#c9c4d8] text-base mt-2 leading-relaxed"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
