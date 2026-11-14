import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import AudienceCards from "@/components/AudienceCards";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { SITE, process } from "@/content/site";
import { pageMetadata } from "@/content/seo";
import { services } from "@/content/services";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Custom software engineering, AI engineering, business automation and digital product development from a senior Swedish engineering studio.",
  path: "/services",
});

const serviceList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "QYRODEV services",
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: service.title,
    url: `${SITE.url}/services/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceList} />

      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
        eyebrow="Services"
        title="Engineering, AI and automation under one roof"
        lead="Four capability areas that usually overlap. Pick the one closest to your problem — we will tell you honestly if it is the wrong one."
      />

      <Section
        eyebrow="Capability areas"
        title="Where to start"
        intro="Each area has a dedicated page with what we deliver, the stack we use and the kind of project it fits."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="card card-interactive flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[0.6875rem] tracking-wide text-subtle">
                  /services/{service.slug}
                </span>
                <ArrowRight size={16} className="text-subtle" aria-hidden />
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Who we help"
        title="Built for your stage of growth"
        intro="Whether you are a five-person shop or a large organisation, you get the same senior team, scaled to what you need."
        className="border-t border-border"
      >
        <AudienceCards />
      </Section>

      <Section
        eyebrow="Development process"
        title="How a project runs"
        intro="Six stages, with working software visible from the first demo."
        className="border-t border-border"
      >
        <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step) => (
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

      <div className="container-x py-6">
        <div className="card flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            Not sure which area fits? The free call exists for exactly that question.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Book a 30-minute call
          </Link>
        </div>
      </div>

      <FinalCTA showLogo={false} />
    </>
  );
}
