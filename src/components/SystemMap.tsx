// A small, honest diagram of how the systems we build fit together. Rendered in
// the hero so the first screen says "engineering", not "agency".

const layers = [
  { label: "Interface", items: ["Web", "Mobile", "Internal tools"] },
  { label: "Services", items: ["APIs", "Jobs", "Integrations"] },
  { label: "Data", items: ["PostgreSQL", "Files", "Audit log"] },
  { label: "Intelligence", items: ["RAG", "Agents", "Evaluation"] },
];

export default function SystemMap() {
  return (
    <figure className="card overflow-hidden p-0" aria-labelledby="system-map-title">
      <figcaption className="flex items-center justify-between border-b border-border px-5 py-3">
        <span id="system-map-title" className="font-mono text-xs tracking-wide text-subtle uppercase">
          How we build
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-subtle">
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
          owned by you
        </span>
      </figcaption>

      <ol className="divide-y divide-border">
        {layers.map((layer, i) => (
          <li key={layer.label} className="flex items-start gap-4 px-5 py-3.5">
            <span className="mt-0.5 font-mono text-[0.6875rem] text-subtle">{String(i + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <p className="font-mono text-xs tracking-wide text-foreground uppercase">{layer.label}</p>
              <p className="mt-1 text-sm text-muted">{layer.items.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="border-t border-border px-5 py-3">
        <p className="font-mono text-[0.6875rem] text-subtle">Typed · tested · documented · self-hosted when needed</p>
      </div>
    </figure>
  );
}
