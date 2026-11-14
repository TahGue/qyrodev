import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import CaseStudyCard from "@/components/CaseStudyCard";
import GroundedDemo from "@/components/GroundedDemo";
import Reveal from "@/components/Reveal";
import { BOOKING_HREF, deliveryProcess, SITE } from "@/content/site";
import { pageMetadata } from "@/content/seo";
import { serviceBySlug, services } from "@/content/services";
import { caseStudiesByService } from "@/content/work";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const related = caseStudiesByService(service.slug);
  const isAi = service.slug === "ai-engineering";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Sweden" },
      { "@type": "AdministrativeArea", name: "European Union" },
    ],
    url: `${SITE.url}/services/${service.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.navLabel, href: `/services/${service.slug}` },
        ]}
        eyebrow="Service"
        title={service.title}
        lead={service.summary}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href={BOOKING_HREF} className="btn btn-primary">
            Discuss this project <ArrowRight size={16} aria-hidden />
          </Link>
          <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
            {service.technologies.slice(0, 6).map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </PageHeader>

      <Section
        eyebrow="The problem"
        title="What this looks like in practice"
        intro={
          isAi
            ? "A model that invents numbers is worse than no model. We start with what it may claim, and how we prove it."
            : undefined
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <Reveal>
            <div className="space-y-4">
              {service.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="lead">
                  {paragraph}
                </p>
              ))}
            </div>
            <h3 className="mt-8 text-sm font-semibold text-foreground">Why teams choose us for this</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2 text-sm text-muted">
                  <Check size={15} className="mt-0.5 shrink-0 text-primary-soft" aria-hidden />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="card p-6">
              <h3 className="font-mono text-xs tracking-[0.14em] text-primary-soft uppercase">What you get</h3>
              <ul className="mt-4 space-y-2.5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-soft" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {isAi && (
        <Section
          eyebrow="How it works"
          title="Evidence, or an honest refusal"
          intro="The model writes prose; the numbers come from code. If the data does not support an answer, the assistant says so."
          className="border-t border-border"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <Reveal>
              <ul className="space-y-4">
                {[
                  "Retrieval pulls the passages that can answer the question, and keeps the citation next to the answer.",
                  "Calculations run in code and are injected into the answer as facts, never re-typed by the model.",
                  "A refusal policy returns “not in the data” instead of a guess when the evidence is missing.",
                  "An evaluation harness scores answers against a real test set before go-live.",
                ].map((item, i) => (
                  <li key={item} className="flex gap-3 border-t border-border pt-4">
                    <span className="font-mono text-xs text-primary-soft">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm leading-relaxed text-muted">{item}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <GroundedDemo />
            </Reveal>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-subtle">
            <Link href="/about#ai-evaluation" className="text-link">
              How we measure accuracy
            </Link>{" "}
            — the 976-question evaluation, what it covers and what it does not claim.
          </p>
        </Section>
      )}

      <Section
        eyebrow="Delivery"
        title="How the work runs"
        intro="A visible process, weekly demos and a handover your team can operate."
        className="border-t border-border"
      >
        <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {deliveryProcess.map((step) => (
            <li key={step.n} className="border-t border-border pt-5">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-primary-soft">{step.n}</span>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {related.length > 0 && (
        <Section
          eyebrow="Related work"
          title="Systems we have shipped"
          intro="Client names stay confidential. The problems and the outcomes are real."
          className="border-t border-border"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((study, i) => (
              <Reveal key={study.slug} delay={i * 60} className="h-full min-w-0">
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/work" className="text-link inline-flex items-center gap-1.5 text-sm font-semibold">
              All case studies <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </Section>
      )}

      <FinalCTA showLogo={false} />
    </>
  );
}
