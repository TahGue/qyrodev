"use client";

import { useState } from "react";
import { projects, type Category, type Project } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

const FILTERS: ("All" | Category)[] = [
  "All",
  "AI & Data",
  "Business Systems",
  "Web & Commerce",
  "Industrial & Research",
  "Mobile & Games",
];

const CATEGORY_TINT: Record<Category, string> = {
  "AI & Data": "from-primary/25",
  "Business Systems": "from-accent/20",
  "Web & Commerce": "from-[#4b8bff]/25",
  "Industrial & Research": "from-warning/15",
  "Mobile & Games": "from-success/15",
};

function FeaturedCard({ p }: { p: Project }) {
  return (
    <article className="card card-hover relative flex h-full flex-col overflow-hidden p-6 sm:p-8">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${CATEGORY_TINT[p.category]} to-transparent`}
        aria-hidden
      />
      <div className="relative flex h-full flex-col">
        <p className="eyebrow">{p.category}</p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight">{p.title}</h3>
        <p className="mt-1 text-sm text-primary-soft">{p.kicker}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{p.summary}</p>
        <p className="mt-6 text-lg font-semibold text-gradient">{p.metric}</p>
        <div className="mt-auto pt-6">
          <ul className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <li key={s} className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card card-hover flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-0.5 text-sm text-primary-soft">{p.kicker}</p>
        </div>
        <span className="shrink-0 rounded-full bg-surface-3 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted uppercase">
          {p.category}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
      <p className="mt-4 font-mono text-xs text-accent">{p.metric}</p>
      <div className="mt-auto pt-5">
        <p className="border-t border-border pt-4 font-mono text-[11px] text-subtle">{p.stack.join(" · ")}</p>
      </div>
    </article>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured && (filter === "All" || p.category === filter));
  const showFeatured = filter === "All";
  const filteredFeatured = featured.filter((p) => p.category === filter);

  return (
    <Section
      id="work"
      eyebrow="Experience"
      title={
        <>
          What I&apos;ve built, <span className="text-gradient">numbers included</span>
        </>
      }
      intro="A selection of client platforms, my own products and research projects. Names and code stay confidential, but the results are real and I'm happy to walk through them on a call."
      className="bg-surface/40"
    >
      {showFeatured && (
        <div className="mb-14 grid gap-5 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="h-full">
              <FeaturedCard p={p} />
            </Reveal>
          ))}
        </div>
      )}

      <div role="group" aria-label="Filter projects by category" className="-mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="flex w-max gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-11 rounded-full border px-4 text-sm whitespace-nowrap transition-colors ${
                filter === f
                  ? "border-transparent bg-foreground font-semibold text-background"
                  : "border-border text-muted hover:border-border-strong hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[...filteredFeatured, ...rest].map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
