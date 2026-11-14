import { FlaskConical, ListChecks, TriangleAlert } from "lucide-react";
import { aiEvaluation } from "@/content/site";

const groups = [
  { key: "what", icon: FlaskConical, title: "What is measured", items: aiEvaluation.what },
  { key: "how", icon: ListChecks, title: "How it is evaluated", items: aiEvaluation.how },
  { key: "limits", icon: TriangleAlert, title: "What it does not mean", items: aiEvaluation.limits },
] as const;

/** Explains how the published AI accuracy figure was produced, and its limits. */
export default function AIEvaluation() {
  return (
    <section id="ai-evaluation" aria-labelledby="ai-evaluation-title" className="section border-t border-border">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow">AI evaluation methodology</p>
            <h2 id="ai-evaluation-title" className="display mt-3 text-3xl text-foreground sm:text-4xl">
              {aiEvaluation.claim}
            </h2>
            <p className="lead mt-4">{aiEvaluation.summary}</p>
            <p className="mt-6 text-xs leading-relaxed text-subtle">{aiEvaluation.detailsNote}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.key} className="card p-5">
                  <p className="flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-primary-soft uppercase">
                    <Icon size={14} aria-hidden />
                    {group.title}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-soft" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
