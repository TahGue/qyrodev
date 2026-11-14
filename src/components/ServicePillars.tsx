import Section from "./Section";
import ServiceGrid from "./ServiceGrid";

export default function ServicePillars() {
  return (
    <Section
      id="services"
      eyebrow="Core services"
      title="Four capabilities, one engineering team"
      intro="Most projects need more than one of them. You get the same senior team across design, engineering, AI and launch."
    >
      <ServiceGrid />
    </Section>
  );
}
