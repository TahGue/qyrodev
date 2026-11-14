import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/work";
import Reveal from "./Reveal";
import Section from "./Section";
import CaseStudyCard from "./CaseStudyCard";

export default function SelectedWork({ limit = 3 }: { limit?: number }) {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Systems we built, problems they solved"
      intro="Client names stay confidential. The problems, the architecture and the outcomes are real."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {caseStudies.slice(0, limit).map((study, i) => (
          <Reveal key={study.slug} delay={i * 60} className="h-full">
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
  );
}
