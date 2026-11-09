import { Check, Cpu, Factory, Globe, Receipt, ShieldCheck, Workflow, type LucideIcon } from "lucide-react";
import { products, type Product } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

const ICONS: Record<Product["icon"], LucideIcon> = {
  shield: ShieldCheck,
  cpu: Cpu,
  workflow: Workflow,
  receipt: Receipt,
  globe: Globe,
  factory: Factory,
};

export default function Products() {
  return (
    <Section
      id="products"
      eyebrow="What I deliver"
      title="Six products, each built from shipped work"
      intro="Every offer below grew out of a system I've already built and tested. You get a proven approach adapted to your business, not an experiment paid for by you."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <Reveal key={p.id} delay={(i % 3) * 80} className="h-full">
              <article className="card card-hover flex h-full flex-col p-6 sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-soft">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.pitch}</p>

                <ul className="mt-5 space-y-2.5">
                  {p.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground/90">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <p className="text-xs text-subtle">
                    <span className="text-muted">Ideal for:</span> {p.idealFor}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border pt-4">
                    <span className="mr-1 font-mono text-[11px] tracking-wider text-subtle uppercase">Proven in</span>
                    {p.provenIn.map((name) => (
                      <span key={name} className="rounded-md bg-surface-3 px-2 py-0.5 font-mono text-[11px] text-muted">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
