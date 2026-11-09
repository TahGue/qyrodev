import { ArrowRight } from "lucide-react";
import { CONTACT_EMAIL, proofMetrics } from "@/content/site";
import GroundedDemo from "./GroundedDemo";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="glow -top-40 left-1/4 h-[420px] w-[520px] bg-primary/25" aria-hidden />
      <div className="glow top-20 right-0 h-[320px] w-[420px] bg-accent/15" aria-hidden />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-xs text-muted">
            <span className="pulse-dot h-2 w-2 rounded-full bg-success" aria-hidden />
            Taking on new projects · Sweden &amp; remote
          </p>

          <h1 className="mt-6 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            AI that tells the truth.
            <br />
            <span className="text-gradient">Software that runs your business.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            QYRODEV is the independent studio of <span className="text-foreground">Tahar Guemir</span>. I design and
            ship grounded AI assistants, private on-prem AI and full-stack business platforms. Every answer they give
            is backed by your data, or it isn&apos;t given.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Discovery%20call`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
            >
              Book a free discovery call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2"
            >
              See the work
            </a>
          </div>
        </div>

        <GroundedDemo />
      </div>

      <div className="relative mx-auto mt-16 max-w-[1200px] px-4 sm:mt-24 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {proofMetrics.map((m) => (
            <div key={m.value} className="bg-surface p-5 sm:p-6">
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">{m.value}</dd>
              <dd className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
