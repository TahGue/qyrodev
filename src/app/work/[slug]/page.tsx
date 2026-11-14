import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, TrendingUp } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import FinalCTA from "@/components/FinalCTA";
import Reveal from "@/components/Reveal";
import { BOOKING_HREF, SITE } from "@/content/site";
import { pageMetadata } from "@/content/seo";
import { serviceBySlug } from "@/content/services";
import { caseStudies, caseStudyBySlug } from "@/content/work";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) return {};

  return pageMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) notFound();

  const service = serviceBySlug(study.service);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    url: `${SITE.url}/work/${study.slug}`,
    creator: { "@id": `${SITE.url}/#organization` },
    about: study.sector,
    keywords: study.stack.join(", "),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: study.title, href: `/work/${study.slug}` },
        ]}
        eyebrow="Case study"
        title={study.title}
        lead={study.summary}
      >
        <ul className="flex flex-wrap gap-1.5" aria-label="Project facts">
          <li className="chip">{study.sizeLabel}</li>
          <li className="chip">{study.sector}</li>
          <li className="chip">{study.metric}</li>
        </ul>
      </PageHeader>

      <div className="container-x py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
            <Reveal>
              <p className="lead">{study.intro}</p>
            </Reveal>

            {study.media && study.media.length > 0 && (
              <Reveal className="mt-8">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {study.media.map((shot) => (
                    <li key={shot.src}>
                      <figure>
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={1280}
                          height={800}
                          sizes="(min-width: 1024px) 32rem, 100vw"
                          className="h-auto w-full rounded-lg border border-border"
                          loading="lazy"
                        />
                        {shot.caption && <figcaption className="mt-2 text-xs text-subtle">{shot.caption}</figcaption>}
                      </figure>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal className="mt-10">
              <section aria-labelledby={`${study.slug}-challenge`}>
                <h2 id={`${study.slug}-challenge`} className="text-lg font-semibold tracking-tight text-foreground">
                  Challenge
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {study.challenge.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal className="mt-10">
              <section aria-labelledby={`${study.slug}-requirements`}>
                <h2 id={`${study.slug}-requirements`} className="text-lg font-semibold tracking-tight text-foreground">
                  Requirements
                </h2>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {study.requirements.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <Check size={15} className="mt-0.5 shrink-0 text-primary-soft" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal className="mt-10">
              <section aria-labelledby={`${study.slug}-architecture`}>
                <h2 id={`${study.slug}-architecture`} className="text-lg font-semibold tracking-tight text-foreground">
                  Architecture
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  A simplified view of the layers we designed and delivered.
                </p>
                <div className="mt-4">
                  <ArchitectureDiagram study={study} />
                </div>
              </section>
            </Reveal>

            <Reveal className="mt-10">
              <section aria-labelledby={`${study.slug}-implementation`}>
                <h2
                  id={`${study.slug}-implementation`}
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  Implementation
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {study.implementation.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {study.deepDive && (
              <Reveal className="mt-10">
                <section aria-labelledby={`${study.slug}-deep-dive`}>
                  <h2
                    id={`${study.slug}-deep-dive`}
                    className="text-lg font-semibold tracking-tight text-foreground"
                  >
                    Engineering deep dive
                  </h2>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "The hard part", body: study.deepDive.challenge },
                      { label: "The approach", body: study.deepDive.approach },
                      { label: "The trade-off", body: study.deepDive.tradeoff },
                    ].map((block) => (
                      <div key={block.label} className="card p-5">
                        <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-primary-soft uppercase">
                          {block.label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{block.body}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            <Reveal className="mt-10">
              <section aria-labelledby={`${study.slug}-results`}>
                <h2 id={`${study.slug}-results`} className="text-lg font-semibold tracking-tight text-foreground">
                  Results
                </h2>
                <div className="mt-3 rounded-xl border border-success/25 bg-success/5 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-success">
                    <TrendingUp size={16} aria-hidden /> What the client gained
                  </p>
                  <ul className="mt-3 space-y-2">
                    {study.results.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                        <Check size={15} className="mt-0.5 shrink-0 text-success" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {study.scopeNote && <p className="mt-3 text-xs leading-relaxed text-subtle">{study.scopeNote}</p>}

                {study.links?.aiEvaluation && (
                  <p className="mt-3 text-xs">
                    <Link href="/about#ai-evaluation" className="text-link">
                      Read how the accuracy figure was measured
                    </Link>
                  </p>
                )}
              </section>
            </Reveal>

            <Reveal className="mt-10">
              <section aria-labelledby={`${study.slug}-lessons`}>
                <h2 id={`${study.slug}-lessons`} className="text-lg font-semibold tracking-tight text-foreground">
                  What we took forward
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {study.lessons.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-soft" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start" aria-label="Project summary">
            <div className="card p-5">
              <h2 className="font-mono text-[0.6875rem] tracking-[0.16em] text-subtle uppercase">At a glance</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-subtle">Organisation</dt>
                  <dd className="mt-0.5 text-foreground">{study.sizeLabel}</dd>
                </div>
                <div>
                  <dt className="text-xs text-subtle">Sector</dt>
                  <dd className="mt-0.5 text-foreground">{study.sector}</dd>
                </div>
                {service && (
                  <div>
                    <dt className="text-xs text-subtle">Capability</dt>
                    <dd className="mt-0.5">
                      <Link href={`/services/${service.slug}`} className="text-link">
                        {service.navLabel}
                      </Link>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs text-subtle">Outcome</dt>
                  <dd className="mt-0.5 text-foreground">{study.metric}</dd>
                </div>
              </dl>

              <p className="mt-5 font-mono text-[0.6875rem] tracking-[0.16em] text-subtle uppercase">Stack</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {study.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-subtle">
                {study.media && study.media.length > 0
                  ? "Screenshots are published with client permission."
                  : "Product screenshots are shared under NDA where the client allows it; the walkthrough covers the system in detail."}
              </p>

              <Link href={BOOKING_HREF} className="btn btn-primary mt-4 w-full">
                Discuss a similar project
              </Link>
            </div>

            <Link href="/work" className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground">
              <ArrowLeft size={15} aria-hidden /> All case studies
            </Link>
          </aside>
        </div>
      </div>

      <FinalCTA
        showLogo={false}
        title="Something in this case study looks familiar?"
        description="Tell us what you are trying to solve. We will reply with an honest read on whether we are the right team."
      />
    </>
  );
}
