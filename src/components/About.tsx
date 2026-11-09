import Image from "next/image";
import Reveal from "./Reveal";

const facts = [
  { value: "2021", label: "shipping code since" },
  { value: "6", label: "languages: TS, Python, Dart, Java, SQL, GDScript" },
  { value: "End-to-end", label: "from GPU models to UI to deploy" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="card relative mx-auto flex aspect-square max-w-sm items-center justify-center overflow-hidden">
            <div className="glow h-64 w-64 bg-primary/30" aria-hidden />
            <div className="grid-bg absolute inset-0 [mask-image:none]" aria-hidden />
            <Image src="/logoq.png" alt="QYRODEV logo" width={160} height={160} className="relative h-40 w-40 object-contain" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Hi, I&apos;m Tahar.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m a full-stack and AI engineer based in Sweden. I started with Java and Vue, moved on to TypeScript
              platforms for real businesses, and now build GPU-backed AI systems that run on a single machine.
            </p>
            <p>
              What sets my work apart is a fixation on <span className="text-foreground">trust</span>. On one
              engineering-report project, a free-text LLM hallucinated in roughly a third of its answers. The code-first
              design I built in its place made zero mistakes across nearly a thousand test questions. I bring that same
              rigour to every invoice engine, booking flow and dashboard I ship.
            </p>
            <p>
              Alongside client work I study AI and machine learning and run my own research, from verified code
              generation to agents that learn the rules of new games.
            </p>
          </div>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="border-l border-primary/40 pl-4">
                <dt className="sr-only">{f.label}</dt>
                <dd className="text-xl font-bold text-foreground">{f.value}</dd>
                <dd className="mt-1 text-xs text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>

        </Reveal>
      </div>
    </section>
  );
}
