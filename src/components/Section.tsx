import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, intro, children, className = "" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-[75rem] px-4 sm:px-6">
        <Reveal className="mb-10 max-w-2xl sm:mb-12">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
