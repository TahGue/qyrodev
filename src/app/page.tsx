import type { Metadata } from "next";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import LegacyAnchors from "@/components/LegacyAnchors";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import SelectedWork from "@/components/SelectedWork";
import ServicePillars from "@/components/ServicePillars";
import TechStack from "@/components/TechStack";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} — Engineering the software. Intelligence behind the business.` },
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <LegacyAnchors />
      <Hero />
      <ServicePillars />
      <SelectedWork />
      <TechStack />
      <Philosophy />
      <Process />
      <FinalCTA />
    </>
  );
}
