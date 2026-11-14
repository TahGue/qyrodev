import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import FinalCTA from "@/components/FinalCTA";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/content/seo";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies from QYRODEV: anonymised systems for small businesses, growing companies and large organisations, with the architecture and outcomes behind them.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Work", href: "/work" }]}
        eyebrow="Selected work"
        title="Systems we built, problems they solved"
        lead="Client names stay confidential. Everything else — the problem, the architecture, the stack and the outcome — is what we actually delivered."
      />

      <Section
        eyebrow="Case studies"
        title="Four projects, four company sizes"
        intro="Each case study covers the challenge, the requirements, the architecture and what the client gained."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 60} className="h-full">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Honesty note"
        title="What you will not find here"
        intro="No invented logos, no stock “testimonials”, no numbers we cannot point at."
        className="border-t border-border"
      >
        <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
          <p>
            We anonymise client names and hide anything commercially confidential. Some screenshots stay out for the
            same reason — the architecture diagrams and the stack are what matter for judging the engineering.
          </p>
          <p>
            If a case study is close to your problem, ask on the call: we can usually walk through more detail under an
            NDA than we can publish.
          </p>
        </div>
      </Section>

      <FinalCTA showLogo={false} />
    </>
  );
}
