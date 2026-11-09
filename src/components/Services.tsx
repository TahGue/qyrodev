import { Check, Rocket, ShieldCheck, TrendingUp, Workflow, type LucideIcon } from "lucide-react";
import { services, type ServiceIcon } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  rocket: Rocket,
  workflow: Workflow,
  shield: ShieldCheck,
  growth: TrendingUp,
};

export default function Services() {
  return (
    <Section id="services" eyebrow="What we do" title="Everything you need to grow, in one team">
      <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal key={s.title} delay={i * 70} className="h-full w-[82%] shrink-0 snap-start sm:w-auto">
              <article className="card card-hover flex h-full flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-soft">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.pitch}</p>
                <ul className="mt-auto space-y-2 pt-5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm text-foreground/90">
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
