import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
};

/** Header block for inner pages: breadcrumb trail, eyebrow, page title and lead. */
export default function PageHeader({ crumbs, eyebrow, title, lead, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border/70 pt-10 pb-12 sm:pt-14 sm:pb-16">
      <div className="tick-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="container-x relative">
        <Breadcrumbs items={crumbs} />

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-end md:gap-14">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="display mt-3 text-3xl text-foreground sm:text-4xl lg:text-[2.75rem]">{title}</h1>
          </div>
          {lead && <p className="lead md:justify-self-end md:max-w-md">{lead}</p>}
        </div>

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
