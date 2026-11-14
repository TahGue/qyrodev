import { techGroups } from "@/content/tech";
import Reveal from "./Reveal";
import Section from "./Section";

export default function TechStack() {
  return (
    <Section
      id="technology"
      eyebrow="Technology"
      title="The stack we engineer in"
      intro="We pick boring, proven tools and go deep. Where AI is involved, the model is one component among many."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {techGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 50} className="h-full">
            <div className="card h-full p-6">
              <h3 className="font-mono text-xs tracking-[0.14em] text-primary-soft uppercase">{group.title}</h3>
              <p className="mt-2 text-sm text-muted">{group.caption}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
