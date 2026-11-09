import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Segments from "@/components/Segments";
import Results from "@/components/Results";
import HowWeWork from "@/components/HowWeWork";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Segments />
        <Results />
        <HowWeWork />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
