import Image from "next/image";
import { LINKEDIN_URL } from "@/content/site";

const links = [
  { label: "Products", href: "#products" },
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/logoq.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
          <p className="text-xs text-subtle">© {new Date().getFullYear()} QYRODEV · Tahar Guemir · Sweden</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted hover:border-border-strong hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
