import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-subtle">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-muted">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                  <ChevronRight size={12} aria-hidden className="text-subtle/70" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
