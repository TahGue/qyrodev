import { ArrowRight, Mail } from "lucide-react";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/content/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 py-16 sm:px-6 sm:py-24">
      <Reveal className="relative mx-auto max-w-[75rem] overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="glow -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-primary/30" aria-hidden />
        <div className="relative">
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 id="contact-title" className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to grow? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
            Tell us where you want your business to be in a year. We&apos;ll reply within one business day with
            an honest plan for getting there.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
            >
              <Mail size={16} aria-hidden /> {CONTACT_EMAIL}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-7 py-4 text-sm font-semibold transition-colors hover:bg-surface-2"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
