import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet";

type Props = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  /** Opens in a new tab (external links). */
  external?: boolean;
};

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  quiet: "btn btn-quiet",
};

/** One button style for links into the site and out of it. */
export default function Button({ href, variant = "primary", children, className = "", external = false }: Props) {
  const classes = `${VARIANT_CLASS[variant]} ${className}`.trim();

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
