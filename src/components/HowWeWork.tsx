import { steps, team } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function HowWeWork() {
  return (
    <Section id="process" eyebrow="How we work" title="From first call to growing product" className="bg-surface/40">
      <ol className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 70} className="h-full">
              <div className="card h-full p-4 sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs text-primary-soft">
                  {s.n}
                </span>
                <p className="mt-4 font-semibold">{s.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
        <p className="shrink-0 font-semibold">One team, every skill:</p>
        <ul className="flex flex-wrap gap-2">
          {team.map((role) => (
            <li key={role} className="rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-sm text-foreground/90">
              {role}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
