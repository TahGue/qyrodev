import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
};

/** Standard section shell: heading row, optional lead paragraph, then content. */
export default function Section({ id, eyebrow, title, intro, children, className = "" }: Props) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className={`section ${className}`}>
      <div className="container-x">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2 md:items-end md:gap-14">
            <div>
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              <h2
                id={id ? `${id}-title` : undefined}
                className="display mt-3 text-3xl text-foreground sm:text-4xl"
              >
                {title}
              </h2>
            </div>
            {intro && <p className="lead md:justify-self-end md:max-w-md">{intro}</p>}
          </div>
        </Reveal>
        {children && <div className="mt-10 sm:mt-14">{children}</div>}
      </div>
    </section>
  );
}
