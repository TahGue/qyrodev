import { process } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Process() {
  return (
    <Section
      id="process"
      eyebrow="Development process"
      title="From problem to production"
      intro="A visible process, weekly demos and no surprises at the end. You see the software working as it is built."
    >
      <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {process.map((step, i) => (
          <li key={step.n}>
            <Reveal delay={(i % 3) * 60} className="border-t border-border pt-5">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-primary-soft">{step.n}</span>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
