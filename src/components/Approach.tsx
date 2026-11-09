import { principles, stack, steps } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Approach() {
  return (
    <Section
      id="approach"
      eyebrow="How I work"
      title="Engineering you can verify"
      intro="Most AI demos look impressive and then fall apart in front of real users. These are the rules I use to make sure mine don't."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 70} className="h-full">
            <div className="card h-full p-6">
              <span className="font-mono text-xs text-subtle">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h3 className="text-2xl font-bold tracking-tight">From first call to launch</h3>
          <ol className="mt-8 space-y-0">
            {steps.map((s, i) => (
              <li key={s.n} className="relative flex gap-5 pb-8 last:pb-0">
                {i < steps.length - 1 && (
                  <span className="absolute top-10 bottom-0 left-[19px] w-px bg-border" aria-hidden />
                )}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs text-primary-soft">
                  {s.n}
                </span>
                <div className="pt-1.5">
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="text-2xl font-bold tracking-tight">Toolbox</h3>
          <div className="mt-8 space-y-6">
            {stack.map((g) => (
              <div key={g.group}>
                <p className="eyebrow !text-subtle">{g.group}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
