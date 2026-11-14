import Button from "./Button";
import SystemMap from "./SystemMap";
import Reveal from "./Reveal";
import { proofMetrics } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-14 sm:pt-24 sm:pb-20">
      <div className="tick-grid absolute inset-0" aria-hidden />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">QYRODEV · Software &amp; AI engineering</p>

            <h1 className="display mt-5 text-4xl text-foreground sm:text-5xl lg:text-[3.5rem]">
              Engineering the software.
              <br />
              <span className="text-primary-soft">Intelligence behind the business.</span>
            </h1>

            <p className="lead mt-6 max-w-xl">
              We design and build custom software, intelligent AI systems and digital products that solve real
              business problems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Discuss your project</Button>
              <Button href="/work" variant="secondary">
                Explore our work
              </Button>
            </div>

            <p className="mt-6 font-mono text-[0.6875rem] tracking-wide text-subtle uppercase">
              Sweden · Remote across the EU · You own the source code
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
      </div>
    </section>
  );
}
