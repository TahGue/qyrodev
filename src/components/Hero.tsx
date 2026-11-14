import Button from "./Button";
import SystemMap from "./SystemMap";
import Reveal from "./Reveal";
import { AVAILABILITY, BOOKING_HREF, proofMetrics } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-14 sm:pt-20 sm:pb-20">
      <div className="tick-grid absolute inset-0" aria-hidden />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[0.6875rem] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
              {AVAILABILITY.status} · {AVAILABILITY.region}
            </p>

            <h1 className="display mt-6 text-4xl text-foreground sm:text-5xl lg:text-[3.4rem]">
              Engineering software.
              <br />
              Building intelligence.
              <br />
              <span className="text-primary-soft">Solving business problems.</span>
            </h1>

            <p className="lead mt-6 max-w-xl">
              We engineer custom software, intelligent AI systems and business automation. From the first architecture
              decision to production deployment, we build technology that gives businesses more control, efficiency
              and room to grow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={BOOKING_HREF}>Discuss your project</Button>
              <Button href="/work" variant="secondary">
                Explore our work
              </Button>
            </div>

            <p className="mt-6 font-mono text-[0.6875rem] tracking-wide text-subtle uppercase">
              You own the source code · {AVAILABILITY.region}
            </p>
          </Reveal>

          <Reveal delay={120} className="hidden sm:block">
            <SystemMap />
          </Reveal>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:mt-20 lg:grid-cols-4">
          {proofMetrics.map((m) => (
            <div key={m.label} className="bg-surface px-5 py-6">
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{m.value}</dd>
              <dd className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{m.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-xs text-subtle">
          <a href="/about#ai-evaluation" className="text-link">
            How the AI accuracy figure is measured
          </a>{" "}
          · client references available on request.
        </p>
      </div>
    </section>
  );
}
