import { Building, Building2, Check, Store, type LucideIcon } from "lucide-react";
import { segments, type Size } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export const SIZE_ICON: Record<Size, LucideIcon> = { small: Store, mid: Building, large: Building2 };

export default function Segments() {
  return (
    <Section
      id="who"
      eyebrow="Who we help"
      title="Built for your stage of growth"
      intro="Whether you're a five-person shop or a large organisation, you get the same senior team, scaled to what you need."
      className="bg-surface/40"
    >
      <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
        {segments.map((seg, i) => {
          const Icon = SIZE_ICON[seg.size];
          return (
            <Reveal key={seg.size} delay={i * 80} className="h-full w-[85%] shrink-0 snap-start md:w-auto">
              <article className="card card-hover flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-soft">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="font-semibold">{seg.label}</h3>
                </div>
                <p className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground">{seg.headline}</p>
                <ul className="mt-4 space-y-2.5">
                  {seg.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-muted">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
