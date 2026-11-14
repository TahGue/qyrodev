import type { CaseStudy } from "@/content/work";

/** Renders a case study's system layout as a block diagram. */
export default function ArchitectureDiagram({ study }: { study: CaseStudy }) {
  return (
    <figure className="card overflow-hidden p-0">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3">
        <span className="font-mono text-xs tracking-wide text-subtle uppercase">System architecture</span>
        <span className="font-mono text-[0.6875rem] text-subtle">anonymised</span>
      </figcaption>

      <ol className="divide-y divide-border">
        {study.architecture.map((layer, i) => (
          <li key={layer.label} className="grid gap-2 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:items-center">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[0.6875rem] text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-mono text-xs tracking-wide text-foreground uppercase">{layer.label}</span>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {layer.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </figure>
  );
}
