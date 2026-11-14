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
  { value: "0", label: "wrong answers from our AI across 976 test questions" },
  { value: "27", label: "languages handled by our voice AI" },
];

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

export const process = [
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
