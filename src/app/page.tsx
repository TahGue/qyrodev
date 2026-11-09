import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Work />
        <Approach />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
