import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, faqs } from "@/content/site";
import { pageMetadata } from "@/content/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell QYRODEV about your project. We reply within one business day with an honest read on whether we are the right team.",
  path: "/contact",
});

const nextSteps = [
  {
    title: "We reply within one business day",
    body: "A real answer from an engineer, including whether we are the right fit.",
  },
  {
    title: "A 30-minute call",
    body: "Your goals, the constraints, and where software can actually help.",
  },
  {
    title: "A short written scope",
    body: "Architecture direction, phases and a clear estimate before any commitment.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
        eyebrow="Contact"
        title="Discuss your project"
        lead="Tell us what you are trying to build or fix. The more context you give, the more useful our first reply will be."
      />

      <div className="container-x py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
          <div>
            <ContactForm />
          </div>

          <aside aria-label="Contact details" className="space-y-4">
            <div className="card p-5">
              <h2 className="font-mono text-[0.6875rem] tracking-[0.16em] text-subtle uppercase">Direct</h2>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary-soft"
              >
                <Mail size={16} aria-hidden /> {CONTACT_EMAIL}
              </a>
              <p className="mt-3 text-xs leading-relaxed text-subtle">
                Prefer email? The form composes a message in your mail app — nothing is sent until you press send.
              </p>

              <p className="mt-5 border-t border-border pt-4 font-mono text-[0.6875rem] tracking-[0.16em] text-subtle uppercase">
                Elsewhere
              </p>
              <ul className="mt-2 flex gap-2">
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center rounded-md border border-border px-2.5 text-xs text-muted hover:border-border-strong hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center rounded-md border border-border px-2.5 text-xs text-muted hover:border-border-strong hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="card p-5">
              <h2 className="font-mono text-[0.6875rem] tracking-[0.16em] text-subtle uppercase">What happens next</h2>
              <ol className="mt-3 space-y-3">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="font-mono text-[0.6875rem] text-primary-soft">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{step.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="px-1 text-xs leading-relaxed text-subtle">
              How we handle your details is described in the{" "}
              <Link href="/privacy" className="text-link">
                privacy notice
              </Link>
              .
            </p>
          </aside>
        </div>
      </div>

      <FAQ />
    </>
  );
}
