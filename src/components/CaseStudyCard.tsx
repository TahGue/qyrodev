import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/work";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="card card-interactive flex h-full min-w-0 flex-col p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[0.6875rem] tracking-wide text-primary-soft uppercase">
          {study.sizeLabel}
        </span>
        <span className="font-mono text-[0.6875rem] tracking-wide text-subtle uppercase">{study.sector}</span>
      </div>

      <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">{study.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{study.summary}</p>

      <div className="mt-auto flex min-w-0 items-center justify-between gap-3 pt-6">
        <span className="min-w-0 truncate font-mono text-[0.6875rem] text-subtle">{study.metric}</span>
        <ArrowUpRight size={16} className="shrink-0 text-subtle" aria-hidden />
      </div>
    </Link>
  );
}
