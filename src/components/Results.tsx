import { TrendingUp } from "lucide-react";
import { results } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";
import { SIZE_ICON } from "./Segments";

export default function Results() {
  return (
    <Section
      id="results"
      eyebrow="Results"
      title="What our clients gained"
      intro="Four projects, four company sizes. Names stay confidential, and we're happy to walk you through any of them on a call."
    >
      <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
        {results.map((r, i) => {
          const Icon = SIZE_ICON[r.size];
          return (
            <Reveal key={r.title} delay={(i % 2) * 80} className="h-full w-[85%] shrink-0 snap-start md:w-auto">
              <article className="card card-hover flex h-full flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-soft">
                    <Icon size={14} aria-hidden /> {r.sizeLabel}
                  </span>
                  <span className="font-mono text-xs tracking-wider text-subtle uppercase">{r.sector}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">{r.title}</h3>

                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-foreground">The challenge</dt>
                    <dd className="text-muted">{r.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">What we built</dt>
                    <dd className="text-muted">{r.built}</dd>
                  </div>
                </dl>

                <div className="mt-5 rounded-xl border border-success/20 bg-success/5 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-success">
                    <TrendingUp size={16} aria-hidden /> What they gained
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {r.gains.map((g) => (
                      <li key={g} className="flex gap-2 text-sm text-foreground/90">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-auto pt-5 font-mono text-xs text-accent">{r.metric}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
