// The four capability areas. Each has a landing page at /services/<slug>.

export type ServiceSlug =
  | "software-engineering"
  | "ai-engineering"
  | "business-automation"
  | "digital-products";

export type Service = {
  slug: ServiceSlug;
  icon: "code" | "sparkles" | "workflow" | "layers";
  title: string;
  navLabel: string;
  summary: string;
  intro: string[];
  benefits: string[];
  deliverables: string[];
  technologies: string[];
  relatedWork: string[];
};

export const services: Service[] = [
  {
    slug: "software-engineering",
    icon: "code",
    title: "Custom Software Engineering",
    navLabel: "Software engineering",
    summary:
      "Web applications, backend systems, APIs and integrations built around how your business actually works.",
    intro: [
      "Most of what holds a growing company back is a system that does not quite fit. Off-the-shelf tools force the work into someone else's workflow, and the spreadsheets grow until nobody trusts the numbers.",
      "We design and build the software that fits: typed backends, tested integrations and interfaces your team can learn in a day. Everything is delivered as source code you own, with tests and documentation.",
    ],
    benefits: [
      "One system instead of three or four disconnected tools",
      "Integrations with the tools and databases you already run",
      "Performance and reliability measured, not assumed",
      "A codebase your own developers can read and extend",
    ],
    deliverables: [
      "Web applications and internal platforms",
      "Backend services and APIs",
      "Integrations with existing systems",
      "Data migration and import tooling",
      "Automated test suites and CI setup",
      "Documentation and deployment runbooks",
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Linux", "React", "Next.js", "Python", "Rust", "C", "C++"],
    relatedWork: ["field-service-operations", "retail-repair-shop"],
  },
  {
    slug: "ai-engineering",
    icon: "sparkles",
    title: "AI Engineering",
    navLabel: "AI engineering",
    summary:
      "Private AI infrastructure, assistants and agentic systems that answer from your own data — or admit they cannot.",
    intro: [
      "A chatbot that invents numbers is worse than no chatbot. Our AI work starts with evidence: what the model can see, what it must never claim, and how accuracy is measured before anyone relies on it.",
      "We build retrieval and evaluation pipelines around open models, run them on your own infrastructure when data is sensitive, and refuse to ship anything we cannot test.",
    ],
    benefits: [
      "Answers come with a source, or a clear refusal",
      "Models run privately, including fully self-hosted",
      "Accuracy measured against a real test set before go-live",
      "Human review where the stakes justify it",
    ],
    deliverables: [
      "Retrieval-augmented assistants over your documents",
      "Agentic workflows with tool calls and guardrails",
      "Private inference on your own servers",
      "Voice and email assistants",
      "Evaluation harnesses and accuracy reports",
      "Audit trails for every generated answer",
    ],
    technologies: ["PyTorch", "Ollama", "Hugging Face", "LLMs", "RAG", "AI agents", "Python", "PostgreSQL", "Docker"],
    relatedWork: ["energy-planning-assistant"],
  },
  {
    slug: "business-automation",
    icon: "workflow",
    title: "Business Automation",
    navLabel: "Business automation",
    summary:
      "Replace manual handoffs, spreadsheets and copy-paste reporting with systems and integrations that run themselves.",
    intro: [
      "Automation is not about removing people; it is about removing the work nobody should be doing. We map the process, find the handoffs that leak time, then automate them with software that can be audited.",
      "The result is fewer errors, faster turnaround and numbers your team can trust without chasing anyone for a status update.",
    ],
    benefits: [
      "Hours of manual admin removed each week",
      "Fewer copy-paste errors between systems",
      "Live reporting instead of month-end spreadsheets",
      "Every automated step logged and reversible",
    ],
    deliverables: [
      "Workflow and process automation",
      "System-to-system integrations",
      "Document and data processing pipelines",
      "Invoicing, bookkeeping and payroll flows",
      "Dashboards and KPI reporting",
      "Alerting and exception handling",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Docker", "Linux", "Rust", "TypeScript"],
    relatedWork: ["finance-cloud-platform", "field-service-operations"],
  },
  {
    slug: "digital-products",
    icon: "layers",
    title: "Digital Product Development",
    navLabel: "Digital products",
    summary:
      "From product architecture and design to a launched, maintainable SaaS or MVP your customers can use.",
    intro: [
      "A product is more than a prototype. It needs a data model that survives the second year, onboarding a customer completes without a call, and a deployment you can trust on a Friday.",
      "We take products from product architecture and interface design through MVP to production, then keep improving them with real usage data.",
    ],
    benefits: [
      "A launchable product instead of an endless prototype",
      "Design decisions grounded in the jobs customers actually do",
      "Multi-tenant architecture that can carry real tenants",
      "Payments, onboarding and analytics wired from day one",
    ],
    deliverables: [
      "Product architecture and technical discovery",
      "UI/UX design and clickable prototypes",
      "Web and mobile product engineering",
      "Multi-tenant SaaS foundations",
      "Payments, booking and onboarding flows",
      "Launch, maintenance and iteration",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Python"],
    relatedWork: ["finance-cloud-platform", "retail-repair-shop"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
