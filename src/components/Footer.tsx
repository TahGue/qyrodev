import Link from "next/link";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, SITE, legalLinks } from "@/content/site";
import { services } from "@/content/services";
import LogoMark from "./LogoMark";

const company = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function SocialIcon({ name }: { name: "linkedin" | "github" }) {
  if (name === "linkedin") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="QYRODEV home">
              <LogoMark size={26} />
              <span className="font-mono text-sm font-bold tracking-[0.18em]">QYRODEV</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{SITE.description}</p>
            <p className="mt-4 font-mono text-[0.6875rem] tracking-wide text-subtle uppercase">
              {SITE.location} · Remote across the EU
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="font-mono text-[0.6875rem] tracking-[0.16em] text-subtle uppercase">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-muted hover:text-foreground">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-mono text-[0.6875rem] tracking-[0.16em] text-subtle uppercase">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-muted hover:text-foreground">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[0.6875rem] tracking-[0.16em] text-subtle uppercase">Contact</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-muted hover:text-foreground">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="QYRODEV on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted hover:border-border-strong hover:text-foreground"
                >
                  <SocialIcon name="linkedin" />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="QYRODEV on GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted hover:border-border-strong hover:text-foreground"
                >
                  <SocialIcon name="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} {SITE.name} · {SITE.location}
          </p>
          <ul className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-xs text-subtle hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
