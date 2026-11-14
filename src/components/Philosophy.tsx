import { principles } from "@/content/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Philosophy() {
  return (
    <Section
      id="philosophy"
      eyebrow="Engineering philosophy"
      title={
        <>
          No unnecessary complexity.
          <br className="hidden sm:block" /> No vendor lock-in. No black boxes.
        </>
      }
      intro="Software outlives the project that created it. We build it to be understood, handed over and trusted."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 40} className="h-full">
            <div className="h-full border-t border-border-strong pt-5">
              <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
