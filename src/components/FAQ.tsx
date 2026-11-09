import { Plus } from "lucide-react";
import { faqs } from "@/content/site";
import Section from "./Section";

export default function FAQ() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions people ask before we start">
      <div className="max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
        {faqs.map((f) => (
          <details key={f.q} className="group px-5 sm:px-6">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus
                size={18}
                className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-muted sm:text-base">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
