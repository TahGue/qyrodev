import { BRAND_TAGLINE } from "@/content/site";
import AnimatedLogo from "./AnimatedLogo";
import Reveal from "./Reveal";

/** Brand statement between the hero and the services: the animated lockup plus the tagline. */
export default function BrandShowcase() {
  return (
    <section aria-labelledby="brand-title" className="px-4 py-10 sm:px-6 sm:py-14">
      <Reveal className="mx-auto flex max-w-[75rem] flex-col items-center gap-4 sm:gap-5">
        <h2 id="brand-title" className="sr-only">
          QYRODEV
        </h2>
        <AnimatedLogo className="max-w-[20rem] sm:max-w-[28rem]" />
        <p className="text-center font-mono text-[0.6875rem] tracking-[0.22em] text-subtle uppercase sm:text-xs">
          {BRAND_TAGLINE}
        </p>
      </Reveal>
    </section>
  );
}
