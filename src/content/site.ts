// Company-wide copy and configuration. Anything a search engine, a visitor or a
// future edit touches lives here so pages stay purely presentational.

export const SITE = {
  name: "QYRODEV",
  legalName: "QYRODEV",
  url: "https://www.qyrodev.com",
  tagline: "Built with intelligence. Engineered for impact.",
  alternateTagline: "Engineering the software. Intelligence behind the business.",
  location: "Sweden",
  founded: 2021,
  description:
    "QYRODEV is a Swedish software engineering studio. We design and build custom software, intelligent AI systems and digital products that solve real business problems.",
  shortDescription: "Software engineering, applied AI and digital products, built in Sweden.",
} as const;

export const CONTACT_EMAIL = "hello@qyrodev.com"; // TODO: confirm this inbox exists
export const LINKEDIN_URL = "https://linkedin.com/company/qyrodev";
export const GITHUB_URL = "https://github.com/TahGue";
export const CONTACT_HREF = "/contact";
export const CALL_HREF = `mailto:${CONTACT_EMAIL}?subject=Free%2030-minute%20call`;

/** Availability signal for the hero and the contact page. */
export const AVAILABILITY = {
  status: "Taking on new projects",
  region: "Sweden · remote across the EU",
};

/**
 * Optional scheduler link (Cal.com, Calendly, Cal.eu, …). Set NEXT_PUBLIC_BOOKING_URL in the
 * hosting environment and every "book a call" CTA points there; without it they fall back to
 * the contact form, so the site never links to a booking page that does not exist.
 */
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
export const BOOKING_HREF = BOOKING_URL || CONTACT_HREF;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Headline proof points. Never extend these without a real, verifiable basis. */
export const proofMetrics = [
  { value: "100+", label: "projects built since 2021" },
  { value: "5", label: "disciplines in one team, from code to marketing" },
  { value: "0", label: "incorrect answers in a 976-question evaluation" },
  { value: "27", label: "languages handled by our voice AI" },
];

/**
 * How the AI accuracy figure is produced. The wording is deliberately scoped: it describes
 * one evaluated test set, not a guarantee about production behaviour.
 *
 * TODO(team): before this is quoted in sales material, confirm the model versions, who signs
 * off an answer as correct, and the evaluation date for the case study on /work.
 */
export const aiEvaluation = {
  claim: "976 test questions. Zero incorrect answers in the evaluated test set.",
  summary:
    "Accuracy is a measured claim, not a slogan. This is how we test an assistant before anyone relies on it, and what the figure does and does not mean.",
  what: [
    "The test set is built from the project's own domain: the documents, calculations and vocabulary the users will actually rely on.",
    "Every answer is checked against the source data the system was given. A wrong number is a failure, and so is a claim the data cannot support.",
    "The set deliberately includes questions that cannot be answered from the data, to confirm the assistant refuses instead of guessing.",
    "A refusal counts as a good answer when the evidence is missing; a confident guess never does.",
  ],
  how: [
    "Numbers come from the calculation engine; the model only explains output it was given.",
    "Answers are compared with the source of truth by the delivery team before go-live.",
    "The evaluation runs against the same deployment the client receives, not a lab build.",
    "Results are reported with the test set, so the figure can be re-checked later.",
  ],
  limits: [
    "This measures one test set at one point in time. It is not a mathematical guarantee of zero errors in production.",
    "The evaluation is re-run whenever the sources, the data model or the model version change.",
    "The published figure applies to the stated scope and period of that evaluation.",
  ],
  detailsNote:
    "Test-set composition, model versions and evaluation dates can be walked through on a call, or under NDA for client work.",
};

/**
 * How the studio is organised — the honest answer to "who will actually build my product?".
 *
 * TODO(team): confirm the exact collaboration model (founder-led, associates, …) before
 * editing these sentences; they must stay factual.
 */
export const teamStructure = {
  title: "Direct access to the people building your product",
  summary:
    "A lean, engineering-led studio. The person who scopes your project is the person who designs and builds it, joined by specialists brought in for the specific work.",
  points: [
    "One named contact from the first call to handover",
    "Specialists added for the project at hand — design, mobile, data, growth — rather than kept on a bench",
    "Technical questions answered by the engineers doing the work, not relayed through an account manager",
  ],
};

/** Engineering principles shown on the homepage and the about page. */
export const principles = [
  {
    title: "You own everything",
    body: "Full source code, documentation and deployment setup are handed to you. No proprietary lock-in, no hostage code.",
  },
  {
    title: "No black boxes",
    body: "Architecture, trade-offs and risks are explained in plain language. You decide with evidence, not marketing.",
  },
  {
    title: "Security and privacy by design",
    body: "Least privilege, encrypted transport, minimal data collection and audit trails from the first commit.",
  },
  {
    title: "Open source where it fits",
    body: "We reach for proven open-source foundations before inventing something new, so you are never stuck with a vendor.",
  },
  {
    title: "Private and self-hosted AI",
    body: "When data is sensitive, models run on your own infrastructure. Cloud models only where they are the right call.",
  },
  {
    title: "Maintainable by your team",
    body: "Readable code, tests and documentation so your team can take the system over whenever you choose.",
  },
];

export const deliveryProcess = [
  {
    n: "01",
    title: "Discovery",
    body: "Understand the business problem, the people who use the software and what success actually means.",
  },
  {
    n: "02",
    title: "Architecture",
    body: "A clear technical plan: data model, integrations, deployment and the trade-offs behind each choice.",
  },
  {
    n: "03",
    title: "Engineering",
    body: "Weekly demos of working software. No status reports that hide progress — you see the build.",
  },
  {
    n: "04",
    title: "Validation",
    body: "Tests, performance work and security review, including measured accuracy for AI features.",
  },
  {
    n: "05",
    title: "Deployment",
    body: "Production release with monitoring, documentation and a handover your team can operate.",
  },
  {
    n: "06",
    title: "Evolution",
    body: "Improve, measure and extend the product as the business and its data change.",
  },
];

/** Roles that make up the team. Used as a factual list, not a testimonial. */
export const team = [
  "Backend engineers",
  "Frontend engineers",
  "UI/UX designers",
  "Marketing strategist",
  "Business growth advisor",
];

export const faqs = [
  {
    q: "Who will we work with?",
    a: "A small, senior team of developers and designers, with our marketing strategist and growth advisor joining when you need them. You get one dedicated contact and you talk directly to the people building your product.",
  },
  {
    q: "We don't need AI. Can you still help?",
    a: "Yes. Most of our work is business software: apps, websites, booking and payment flows, internal systems and dashboards. We only add AI where it clearly saves time or money.",
  },
  {
    q: "Can you help us grow after launch?",
    a: "Yes. Marketing and growth advice are part of the team. We help with positioning, launch campaigns, SEO, pricing and deciding what to build next.",
  },
  {
    q: "Who owns the code?",
    a: "You do. You get the full source code, documentation and deployment setup, and you are free to take it in-house at any time.",
  },
  {
    q: "How do we get started?",
    a: "A 30-minute call about your goals and where software can help, followed by a short written scope. If it is not a fit, we say so and point you in a better direction.",
  },
  {
    q: "How do you handle data and privacy?",
    a: "We collect the minimum needed, keep data in the EU where required and can run AI entirely on your own servers. Access is limited, logged and documented as part of the delivery.",
  },
];

export const socials = [
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "GitHub", href: GITHUB_URL },
];

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];
