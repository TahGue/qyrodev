import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/content/site";
import AnimatedLogo from "./AnimatedLogo";
import Button from "./Button";
import Reveal from "./Reveal";

type Props = {
  title?: string;
  description?: string;
  showLogo?: boolean;
};

/**
 * Closing call to action. The animated lockup sits directly on the page background,
 * which is why the artwork's canvas was normalised to --background when it was built.
 */
export default function FinalCTA({
  title = "Have a problem worth engineering a solution for?",
  description = "Tell us where you want the business to be in a year. We reply within one business day with an honest plan for getting there.",
  showLogo = true,
}: Props) {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="tick-grid absolute inset-0 opacity-70" aria-hidden />
      <div className="container-x relative flex flex-col items-center py-16 text-center sm:py-24">
        <Reveal className="flex flex-col items-center">
          {showLogo && <AnimatedLogo className="max-w-[17rem]" />}

          <h2 className={`display max-w-2xl text-3xl text-foreground sm:text-4xl ${showLogo ? "mt-8" : ""}`}>
            {title}
          </h2>
          <p className="lead mt-4 max-w-xl">{description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Start a project</Button>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
              <Mail size={16} aria-hidden /> Contact QYRODEV
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
