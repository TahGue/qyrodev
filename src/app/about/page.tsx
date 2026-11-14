import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AIEvaluation from "@/components/AIEvaluation";
import FinalCTA from "@/components/FinalCTA";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { SITE, proofMetrics, team, teamStructure } from "@/content/site";
import { pageMetadata } from "@/content/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "QYRODEV is an independent Swedish engineering studio building software, applied AI and digital products. Small, senior team, client-owned source code.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
        eyebrow="About"
        title="An independent engineering studio, not an agency"
        lead="A small, senior team in Sweden. We build software that outlives the project that created it — and hand it over properly."
      />

      <Section eyebrow="Who we are" title="Small team, direct access">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                QYRODEV is a software engineering studio. We design and build custom software, applied AI and digital
                products for organisations that need a system to fit their business rather than the other way around.
              </p>
              <p>
                There is no sales layer between you and the people writing the code. You talk to the engineers and
                designers doing the work, see working software each week, and get decisions explained in plain
                language.
              </p>
              <p>
                Our clients range from a five-person repair shop to a large energy organisation. The team scales to the
                project, the standards do not change: typed code, tests, documentation and source code you own.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="card p-6">
              <h2 className="font-mono text-xs tracking-[0.14em] text-primary-soft uppercase">The team</h2>
              <ul className="mt-4 space-y-2.5">
                {team.map((role) => (
                  <li key={role} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="h-1 w-1 rounded-full bg-primary-soft" aria-hidden />
                    {role}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-subtle">
                {SITE.location} · Remote across the EU. The people on the first call are the people on the build.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="How we are organised"
        title={teamStructure.title}
        intro={teamStructure.summary}
        className="border-t border-border"
      >
        <ul className="grid gap-4 sm:grid-cols-3">
          {teamStructure.points.map((point) => (
            <li key={point} className="border-t border-border-strong pt-5 text-sm leading-relaxed text-muted">
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Track record"
        title="What the numbers stand for"
        intro="These are the only figures we publish. Each one maps to delivered work, not to a marketing goal."
        className="border-t border-border"
      >
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
          {proofMetrics.map((m) => (
            <div key={m.label} className="bg-surface px-5 py-6">
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{m.value}</dd>
              <dd className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{m.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-xs text-subtle">
          <a href="#ai-evaluation" className="text-link">
            Read how the AI accuracy figure was measured
          </a>{" "}
          · client references are available on request.
        </p>
      </Section>

      <AIEvaluation />

      <Philosophy />
      <Process />

      <FinalCTA
        showLogo={false}
        title="Want to work with a team like this?"
        description="A 30-minute call is enough to know whether we are the right fit. If we are not, we will say so."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About QYRODEV",
          url: `${SITE.url}/about`,
          about: { "@id": `${SITE.url}/#organization` },
        }}
      />
    </>
  );
}
