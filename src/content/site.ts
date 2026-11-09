// All landing-page copy lives here so it can be edited without touching layout code.

export const CONTACT_EMAIL = "hello@qyrodev.com"; // TODO: confirm this inbox exists
export const LINKEDIN_URL = "https://linkedin.com/company/qyrodev";

export type Metric = { value: string; label: string };

export const proofMetrics: Metric[] = [
  { value: "0", label: "wrong answers across 976 test questions in a grounded engineering-report assistant" },
  { value: "27", label: "languages handled by a phone agent that runs 100% on local hardware" },
  { value: "1,317", label: "automated tests behind a platform that verifies AI-generated code" },
  { value: "100+", label: "projects built since 2021, from web apps to GPU research" },
];

export type Product = {
  id: string;
  icon: "shield" | "cpu" | "workflow" | "receipt" | "globe" | "factory";
  name: string;
  pitch: string;
  includes: string[];
  idealFor: string;
  provenIn: string[];
};

export const products: Product[] = [
  {
    id: "grounded-ai",
    icon: "shield",
    name: "Grounded AI Assistant",
    pitch:
      "Chat over your reports, data and regulations that cites its source or says “I don’t know”. It never guesses.",
    includes: [
      "Answers computed from your data, not invented by a model",
      "Verbatim citations from your approved documents",
      "Typed refusals when evidence is missing",
      "An evaluation report with measured accuracy",
    ],
    idealFor: "Engineering, energy, legal and compliance teams",
    provenIn: ["Engineering-report assistant", "Research atlas", "Code verification"],
  },
  {
    id: "private-ai",
    icon: "cpu",
    name: "Private AI on Your Hardware",
    pitch:
      "LLMs, speech recognition and voice agents that run on your own servers. No data leaves the building and no per-token bills.",
    includes: [
      "Local LLMs (Qwen, Gemma) benchmarked for your task",
      "Speech-to-text, text-to-speech and voice cloning",
      "GPU deployment with Docker",
      "Integrations with email, phone and WhatsApp",
    ],
    idealFor: "Clinics, public sector and anyone bound by GDPR",
    provenIn: ["Phone & email assistant", "Voice isolation", "Audiobook app"],
  },
  {
    id: "operations",
    icon: "workflow",
    name: "Operations Platform",
    pitch:
      "A custom system that replaces the spreadsheets: customers, visits, quotes, work orders, inventory and documents in one place.",
    includes: [
      "Role-based access and secure auth (Argon2id)",
      "Private document storage",
      "Admin dashboards and KPI widgets",
      "End-to-end tests and documented deploys",
    ],
    idealFor: "Service companies, workshops and restaurants",
    provenIn: ["Field-service system", "Repair shop platform", "Kitchen display & POS"],
  },
  {
    id: "finance",
    icon: "receipt",
    name: "Swedish Finance & Invoicing",
    pitch:
      "Invoicing and bookkeeping built for Swedish rules: BAS chart of accounts, SIE 4, Peppol e-invoicing and VAT, accurate to the öre.",
    includes: [
      "Double-entry ledger that follows Bokföringslagen",
      "VAT-compliant PDF invoices and Peppol BIS 3.0",
      "SIE 4 import/export for your accountant",
      "Bank CSV import with auto-categorisation",
    ],
    idealFor: "Fintech start-ups and accounting firms",
    provenIn: ["Accounting SaaS", "Finance analyser"],
  },
  {
    id: "web",
    icon: "globe",
    name: "Web Platforms & Commerce",
    pitch:
      "Fast, SEO-ready websites and portals with booking, payments, multilingual content and an admin panel your team can use.",
    includes: [
      "Next.js and TypeScript, deployed on Vercel or your cloud",
      "Stripe, PayPal and Zettle POS integrations",
      "Multilingual content (i18n) and local SEO",
      "Course, booking and marketplace flows",
    ],
    idealFor: "Schools, marketplaces and local businesses",
    provenIn: ["Course platform", "B2B marketplace", "Local business site"],
  },
  {
    id: "industrial",
    icon: "factory",
    name: "Industrial AI & Simulation",
    pitch:
      "Digital twins, anomaly detection and training simulators that let automation teams test failures before they happen on the floor.",
    includes: [
      "PLC and process simulation with realistic physics",
      "LSTM-based anomaly detection on telemetry",
      "Failure injection and ICS attack labs",
      "Scored training scenarios for operators",
    ],
    idealFor: "Manufacturing, OT security and technical schools",
    provenIn: ["Process digital twin", "RL research"],
  },
];

export type Category = "AI & Data" | "Business Systems" | "Web & Commerce" | "Industrial & Research" | "Mobile & Games";

// Descriptions are deliberately generic: no client names, product names or code links.
export type Project = {
  title: string;
  kicker: string;
  category: Category;
  summary: string;
  metric: string;
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Grounded engineering-report assistant",
    kicker: "Energy sector",
    category: "AI & Data",
    summary:
      "Runs technical calculations from an industry tool, generates formal planning reports, and answers questions about them. Every number comes from a typed fact store. Regulation questions are answered with quotes from an approved corpus, and the assistant refuses when the evidence isn't there.",
    metric: "0 wrong answers / 976 test questions",
    stack: ["Python", "Local LLM", "Evals", "Report generation"],
    featured: true,
  },
  {
    title: "Private AI phone & email assistant",
    kicker: "Fully on-prem",
    category: "AI & Data",
    summary:
      "Answers calls in the caller's language, places calls from call lists, summarises conversations, drafts email replies and sends chat notifications. Every model runs on one local GPU, including voice cloning.",
    metric: "27 languages · 0 cloud AI",
    stack: ["Local LLM", "Speech-to-text", "Voice cloning", "PostgreSQL", "Docker"],
    featured: true,
  },
  {
    title: "Accounting & invoicing SaaS",
    kicker: "Built for Swedish SMEs",
    category: "Business Systems",
    summary:
      "Invoicing, double-entry bookkeeping, payroll, year-end close, budgeting and inventory, with Swedish compliance built in from the start and money stored as exact integers.",
    metric: "BAS · SIE 4 · Peppol · K2",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Encryption at rest"],
    featured: true,
  },
  {
    title: "Verification platform for AI-generated code",
    kicker: "Developer tooling",
    category: "AI & Data",
    summary:
      "Treats generated code as a hypothesis. It grounds reasoning in repository evidence, proposes minimal patches, and marks a patch verified only after it passes tests and has a full audit trail.",
    metric: "1,317 automated tests",
    stack: ["Python", "REST API", "CLI", "Dashboard"],
  },
  {
    title: "Real-time voice isolation",
    kicker: "Desktop audio tool",
    category: "AI & Data",
    summary:
      "Strips music and sound effects from any audio playing on a PC, live, on a GPU. It comes with a benchmark harness that was used to choose the separation model.",
    metric: "Live GPU source separation",
    stack: ["PyTorch", "ONNX Runtime", "Audio ML"],
  },
  {
    title: "Source-grounded research atlas",
    kicker: "Interactive maps & timelines",
    category: "AI & Data",
    summary:
      "An interactive map and timeline in which every person, route and event comes from claims extracted from primary texts and can be traced back to them. It has a time slider and movement trajectories.",
    metric: "1,000+ traced movements",
    stack: ["MapLibre GL", "TypeScript", "PostgreSQL", "NLP"],
  },
  {
    title: "Document-to-audiobook app",
    kicker: "Local-first desktop app",
    category: "AI & Data",
    summary:
      "Converts PDF, EPUB and DOCX files into narrated audio in many languages. It includes OCR for right-to-left scripts, custom voice cloning and background music mixing.",
    metric: "10+ languages",
    stack: ["Tauri", "Python", "Neural TTS"],
  },
  {
    title: "Field-service operations system",
    kicker: "Service & inspection companies",
    category: "Business Systems",
    summary:
      "Replaces spreadsheets with one system for customers, site visits, quotes, work orders, inventory, compliance documentation and service contracts, with private document storage.",
    metric: "Unit + end-to-end tested",
    stack: ["Next.js", "Prisma", "Argon2id", "Blob storage"],
  },
  {
    title: "Retail & repair shop platform",
    kicker: "Local business",
    category: "Business Systems",
    summary:
      "A marketing site with local SEO and live reviews, POS catalogue sync over OAuth, and a repair-ticket queue with a daily KPI widget for the owners.",
    metric: "POS sync · local SEO",
    stack: ["Next.js", "Prisma", "Auth", "Cloud storage"],
  },
  {
    title: "Clinical assessment platform",
    kicker: "Healthcare professionals",
    category: "Business Systems",
    summary:
      "Lets clinicians manage patients, assign standardised questionnaires, score them automatically with interpretation bands and export reports. Patients use their own age-gated portal.",
    metric: "Automated scoring engine",
    stack: ["Next.js", "TypeScript", "Charts", "PDF"],
  },
  {
    title: "Private personal-finance analyser",
    kicker: "Runs in the browser",
    category: "Business Systems",
    summary:
      "Imports bank CSV exports, categorises spending, detects anomalies and recurring payments, highlights tax deductions and offers an AI advisor. No data ever leaves the device.",
    metric: "Zero backend",
    stack: ["Next.js", "React", "Charts", "Zod"],
  },
  {
    title: "Course platform with payments",
    kicker: "Education",
    category: "Web & Commerce",
    summary:
      "A multilingual course catalogue with online enrolment, card and wallet payments, and an admin area for sessions, capacity, pricing and students.",
    metric: "2 payment providers · 2 languages",
    stack: ["Next.js", "Prisma", "i18n", "Stripe"],
  },
  {
    title: "B2B mobility marketplace",
    kicker: "Transport",
    category: "Web & Commerce",
    summary:
      "A managed marketplace that turns unused premium transport capacity into journeys business partners can book, with role-based workspaces.",
    metric: "Multi-workspace B2B",
    stack: ["Next.js", "Prisma", "Zod", "Tailwind"],
  },
  {
    title: "Industrial process digital twin",
    kicker: "Automation & OT security",
    category: "Industrial & Research",
    summary:
      "A drag-and-drop factory simulator with physics models, failure injection, a control-logic debugger, an attack lab for industrial control systems, and deep-learning anomaly detection on telemetry.",
    metric: "12 failure modes · 10 attack types",
    stack: ["FastAPI", "PyTorch", "PostgreSQL", "Docker"],
  },
  {
    title: "Reinforcement-learning research",
    kicker: "Autonomous agents",
    category: "Industrial & Research",
    summary:
      "Studies whether agents can discover the rules of an unfamiliar environment and transfer what they learn. Experiments are pre-registered and reported with confidence intervals.",
    metric: "+34% rule discovery vs baseline",
    stack: ["Python", "PPO", "Experiment tracking"],
  },
  {
    title: "Offline-first outdoor app",
    kicker: "Mobile",
    category: "Mobile & Games",
    summary:
      "Offline topographic maps, GPS, field observations, safety warnings and on-device species identification. Cloud sync is optional.",
    metric: "Works fully offline",
    stack: ["Flutter", "Dart", "Offline maps"],
  },
  {
    title: "2D game prototypes",
    kicker: "RPG & multiplayer strategy",
    category: "Mobile & Games",
    summary:
      "A pixel-art adventure RPG with crafting, quests and cloud saves, plus a real-time multiplayer strategy game in which the server controls the fog of war.",
    metric: "Playable vertical slices",
    stack: ["Phaser 3", "React", "Socket.IO", "Node.js"],
  },
];

export const principles = [
  {
    title: "Code owns the facts",
    body: "Numbers come from calculations and databases. The model only chooses between options or explains evidence that has already been checked.",
  },
  {
    title: "Measured, not promised",
    body: "Every AI feature ships with a test set and a published accuracy figure, so you can see how it performs before launch.",
  },
  {
    title: "Private by default",
    body: "When data is sensitive, models run locally or in an EU region, and secrets are encrypted at rest.",
  },
  {
    title: "Production from day one",
    body: "Strict TypeScript, unit and end-to-end tests, Docker and CI from the start, so the code can be maintained after handover.",
  },
];

export const steps = [
  { n: "01", title: "Discovery call", body: "A free 30-minute call to map the problem, the data you have and what success looks like." },
  { n: "02", title: "Pilot on real data", body: "A small, scoped prototype on your own data that shows whether the idea holds up before you invest more." },
  { n: "03", title: "Build with weekly demos", body: "Working software every week. You see progress in the product, not in status reports." },
  { n: "04", title: "Launch & handover", body: "Deployment, documentation and a walkthrough. The code and the repository belong to you." },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Frontend & apps", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter", "Tauri", "Phaser", "MapLibre"] },
  { group: "Backend & data", items: ["Node.js", "Python", "FastAPI", "Prisma", "PostgreSQL", "TimescaleDB", "Socket.IO", "Docker"] },
  { group: "AI & ML", items: ["PyTorch", "Ollama", "Qwen / Gemma", "Whisper", "Voice cloning", "ONNX", "Reinforcement learning", "Evals"] },
  { group: "Integrations", items: ["Stripe", "PayPal", "Zettle", "Peppol", "SIE 4", "Google APIs", "WhatsApp", "Vercel"] },
];

export const faqs = [
  {
    q: "Who will I actually be working with?",
    a: "With me, Tahar. QYRODEV is an independent studio, so you talk directly to the person who designs and writes the code. Nothing gets lost between a salesperson and a developer.",
  },
  {
    q: "How do you stop the AI from making things up?",
    a: "Any fact the user asks about is computed by code from your data or quoted word-for-word from an approved source. If there's no evidence, the system says so. Before launch I measure this on a test set and share the numbers with you.",
  },
  {
    q: "Can the AI run without sending our data to the cloud?",
    a: "Yes. I've shipped local LLM, speech and voice-cloning systems that run on a single on-prem GPU. If cloud models are a better fit, I can use them with EU hosting and strict data controls.",
  },
  {
    q: "Do you build for Swedish requirements?",
    a: "Yes. That includes Swedish UI and copy, BAS accounts, SIE 4, moms rules on invoices, Peppol, and integrations with Swedish banks and POS systems.",
  },
  {
    q: "We don't need AI. Can you still help?",
    a: "Yes. Most of my projects are plain business software: operations systems, booking and payment flows, dashboards and websites. I only add AI where it clearly saves time.",
  },
  {
    q: "Who owns the code when we're done?",
    a: "You do. You get the full repository, documentation and deployment setup, and you can bring in your own team at any point.",
  },
];
