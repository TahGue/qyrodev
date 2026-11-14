import { Building, Building2, Check, Store, type LucideIcon } from "lucide-react";
import { audiences, type Audience } from "@/content/audiences";
import Reveal from "./Reveal";

const ICONS: Record<Audience["key"], LucideIcon> = { small: Store, mid: Building, large: Building2 };

export default function AudienceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {audiences.map((a, i) => {
        const Icon = ICONS[a.key];
        return (
          <Reveal key={a.key} delay={i * 60} className="h-full">
            <article className="card flex h-full flex-col p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary-soft">
                  <Icon size={19} aria-hidden />
                </span>
                <h3 className="text-sm font-semibold text-foreground">{a.label}</h3>
              </div>
              <p className="mt-4 text-base font-semibold leading-snug tracking-tight text-foreground">{a.headline}</p>
              <ul className="mt-4 space-y-2">
                {a.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted">
                    <Check size={15} className="mt-0.5 shrink-0 text-primary-soft" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
