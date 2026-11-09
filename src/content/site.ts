// All landing-page copy lives here so it can be edited without touching layout code.
// Project descriptions are deliberately generic: no client names, product names or code links.

export const CONTACT_EMAIL = "hello@qyrodev.com"; // TODO: confirm this inbox exists
export const LINKEDIN_URL = "https://linkedin.com/company/qyrodev";
export const CALL_HREF = `mailto:${CONTACT_EMAIL}?subject=Free%2030-minute%20call`;

export const proofMetrics = [
  { value: "100+", label: "projects built since 2021" },
  { value: "5", label: "disciplines in one team, from code to marketing" },
  { value: "0", label: "wrong answers from our AI across 976 test questions" },
  { value: "27", label: "languages handled by our voice AI" },
];

export type ServiceIcon = "rocket" | "workflow" | "shield" | "growth";

export const services: { icon: ServiceIcon; title: string; pitch: string; points: string[] }[] = [
  {
    icon: "rocket",
    title: "Launch your digital product",
    pitch: "Web platforms and mobile and desktop apps, designed and built from start to finish.",
    points: ["UI/UX design & prototypes", "Web, iOS, Android & desktop", "Payments, booking & multiple languages"],
  },
  {
    icon: "workflow",
    title: "Automate your operations",
    pitch: "Replace spreadsheets and manual work with one system your team will actually use.",
    points: ["Customers, quotes & work orders", "Invoicing & Swedish bookkeeping", "Live dashboards & KPIs"],
  },
  {
    icon: "shield",
    title: "Put AI to work, safely",
    pitch: "Assistants that answer from your own data or say they don't know. They can run entirely on your own servers.",
    points: ["Chat over documents & reports", "Voice & email assistants", "Private, GDPR-friendly setups"],
  },
  {
    icon: "growth",
    title: "Grow your reach",
    pitch: "Strategy and marketing that turn what we build into paying customers.",
    points: ["Positioning & go-to-market", "SEO & launch campaigns", "Pricing & growth advice"],
  },
];

export type Size = "small" | "mid" | "large";

export const segments: { size: Size; label: string; headline: string; points: string[] }[] = [
  {
    size: "small",
    label: "Small businesses",
    headline: "Get found online and win more customers.",
    points: [
      "A professional website with booking & payments",
      "Local SEO and Google reviews",
      "A simple admin panel you run yourself",
    ],
  },
  {
    size: "mid",
    label: "Growing & mid-size companies",
    headline: "Stop running the business on spreadsheets.",
    points: [
      "Custom systems for sales, operations & finance",
      "Automation of repetitive manual work",
      "Integrations with the tools you already use",
    ],
  },
  {
    size: "large",
    label: "Large organisations",
    headline: "AI and systems your IT and compliance teams can trust.",
    points: [
      "AI with measured accuracy and audit trails",
      "Private, on-prem or EU-hosted deployment",
      "Tested, documented handover to your team",
    ],
  },
];

// Case studies: anonymised, but every claim reflects a real delivered system.
export const results: {
  size: Size;
  sizeLabel: string;
  sector: string;
  title: string;
  challenge: string;
  built: string;
  gains: string[];
  metric: string;
}[] = [
  {
    size: "small",
    sizeLabel: "Small business",
    sector: "Retail & repairs",
    title: "From walk-ins to found online",
    challenge: "A local repair shop needed to be found online and stop managing its catalogue and repairs by hand.",
    built: "A local-SEO website with live reviews, point-of-sale sync and a repair-ticket queue.",
    gains: [
      "Shows up in local searches, with live Google reviews",
      "Shop catalogue syncs with the till automatically",
      "Every repair tracked in one queue, with a daily KPI overview",
    ],
    metric: "Website + POS sync + repair queue",
  },
  {
    size: "mid",
    sizeLabel: "Mid-size company",
    sector: "Field service",
    title: "From spreadsheets to one system",
    challenge: "A growing service company kept its customers, visits, quotes and work orders in separate spreadsheets.",
    built: "An operations platform covering customers, site visits, quotes, work orders, inventory and contracts.",
    gains: [
      "One place for the whole job, from quote to invoice",
      "Compliance documents stored securely and easy to find",
      "Service contracts tracked so renewals aren't missed",
    ],
    metric: "Covered by unit and end-to-end tests",
  },
  {
    size: "mid",
    sizeLabel: "Growing companies",
    sector: "Finance",
    title: "Invoicing & bookkeeping in one place",
    challenge: "Swedish SMEs juggle separate tools for invoicing, bookkeeping and payroll, and still need to follow Swedish rules.",
    built: "A cloud platform for invoicing, double-entry bookkeeping, payroll and year-end close.",
    gains: [
      "One system instead of three or four tools",
      "Compliant by design: BAS, SIE 4, Peppol e-invoicing",
      "Accountants work directly in the same system",
    ],
    metric: "BAS · SIE 4 · Peppol · K2",
  },
  {
    size: "large",
    sizeLabel: "Large organisation",
    sector: "Energy",
    title: "An AI assistant engineers can trust",
    challenge: "Engineering teams spent a lot of time writing planning reports, and general-purpose AI chatbots got the numbers wrong.",
    built: "An assistant that writes reports from real calculations and answers questions only when the data backs it up.",
    gains: [
      "Planning reports generated straight from source calculations",
      "Answers come with evidence, or a clear “not in the data”",
      "Accuracy measured before go-live",
    ],
    metric: "0 wrong answers across 976 test questions",
  },
];

export const steps = [
  { n: "01", title: "Free call", body: "30 minutes on your goals and where software can help." },
  { n: "02", title: "Plan & prototype", body: "A clear scope and a clickable prototype before the big spend." },
  { n: "03", title: "Build", body: "Weekly demos of working software, not status reports." },
  { n: "04", title: "Launch & grow", body: "Go live, then market, measure and improve." },
];

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
    a: "A small, senior team of developers and designers, with our marketing strategist and growth advisor joining when you need them. You get one dedicated contact and talk directly to the people building your product.",
  },
  {
    q: "We don't need AI. Can you still help?",
    a: "Yes. Most of our work is business software: apps, websites, booking and payment flows, internal systems and dashboards. We only add AI where it clearly saves time or money.",
  },
  {
    q: "Can you help us grow after launch?",
    a: "Yes. That's why marketing and growth advice are part of the team. We help with positioning, launch campaigns, SEO, pricing and deciding what to build next.",
  },
  {
    q: "Who owns the code?",
    a: "You do. You get the full source code, documentation and deployment setup, and you're free to take it in-house at any time.",
  },
];
