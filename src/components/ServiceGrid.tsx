import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/content/services";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";

/** The four capability cards. Links to each service landing page. */
export default function ServiceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service, i) => (
        <Reveal key={service.slug} delay={i * 60} className="h-full">
          <Link href={`/services/${service.slug}`} className="card card-interactive flex h-full flex-col p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary-soft">
                <ServiceIcon icon={service.icon} />
              </span>
              <ArrowUpRight size={18} className="text-subtle" aria-hidden />
            </div>

            <h3 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>

            <ul className="mt-5 space-y-2">
              {service.benefits.slice(0, 3).map((b) => (
                <li key={b} className="flex gap-2 text-sm text-foreground/85">
                  <Check size={15} className="mt-0.5 shrink-0 text-primary-soft" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>

            <span className="mt-auto pt-6 font-mono text-xs text-primary-soft">Explore {service.navLabel}</span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
