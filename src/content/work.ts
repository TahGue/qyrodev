// Case studies. Names stay confidential; every claim here reflects a system we
// shipped and has been reviewed by the team. Do not add metrics or testimonials
// that cannot be backed by real evidence.

export type Size = "small" | "mid" | "large";

export type CaseStudy = {
  slug: string;
  size: Size;
  sizeLabel: string;
  sector: string;
  title: string;
  summary: string;
  intro: string;
  challenge: string[];
  requirements: string[];
  architecture: { label: string; items: string[] }[];
  implementation: string[];
  stack: string[];
  results: string[];
  metric: string;
  lessons: string[];
  service: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-repair-shop",
    size: "small",
    sizeLabel: "Small business",
    sector: "Retail & repairs",
    title: "From walk-ins to found online",
    summary: "A local repair shop gained a website that syncs with the till and a repair queue the team actually uses.",
    intro:
      "A local repair shop depended on walk-ins and managed its catalogue, repairs and invoices by hand. The goal was simple: be found online, and stop losing track of repairs.",
    challenge: [
      "Customers could not find the shop in local search, so every new customer was a walk-in.",
      "The catalogue lived in the point-of-sale system while repairs lived in a paper book.",
      "Repair status was communicated by phone calls, which meant the shop phone rang all day.",
    ],
    requirements: [
      "A fast site found in local search, with live Google reviews",
      "Catalogue sync with the existing till, without retyping products",
      "One queue that tracks every repair from drop-off to pickup",
      "An owner-friendly admin panel with no training required",
    ],
    architecture: [
      { label: "Web", items: ["Next.js site", "Local SEO pages", "Review widget"] },
      { label: "Integration", items: ["POS catalogue sync", "Scheduled import job"] },
      { label: "Data", items: ["Catalogue mirror", "Repair queue"] },
      { label: "Operations", items: ["Daily KPI overview", "Repair status notifications"] },
    ],
    implementation: [
      "Built a local-SEO site with structured data for the shop and its services, generated from the catalogue itself.",
      "Wrote a scheduled sync that mirrors the till catalogue, so prices change in one place.",
      "Replaced the paper repair book with a queue that tracks status, parts and pickup, plus a daily overview for the owner.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Linux"],
    results: [
      "Shows up in local searches, with live Google reviews",
      "Shop catalogue syncs with the till automatically",
      "Every repair tracked in one queue, with a daily KPI overview",
    ],
    metric: "Website + POS sync + repair queue",
    lessons: [
      "Catalogues want a single source of truth; mirroring beats duplicating.",
      "For a small team, an unglamorous daily overview beats a dashboard nobody opens.",
    ],
    service: "digital-products",
  },
  {
    slug: "field-service-operations",
    size: "mid",
    sizeLabel: "Mid-size company",
    sector: "Field service",
    title: "From spreadsheets to one system",
    summary:
      "A growing service company replaced a stack of spreadsheets with one operations platform, covered by tests.",
    intro:
      "Customers, site visits, quotes and work orders each lived in a separate spreadsheet. Every new crew added another copy, and nobody could answer a simple question without three phone calls.",
    challenge: [
      "Four business processes, four spreadsheets, no shared identifiers.",
      "Quotes were rebuilt by hand for every repeat job.",
      "Compliance documents were stored in folders nobody could search confidently.",
    ],
    requirements: [
      "One system covering customers, visits, quotes, work orders, inventory and contracts",
      "A quote that turns into a work order without retyping anything",
      "Compliance documents stored securely and easy to find",
      "Service contracts tracked so renewals are never missed",
    ],
    architecture: [
      { label: "Domain", items: ["Customers", "Quotes", "Work orders", "Contracts", "Inventory"] },
      { label: "Backend", items: ["Typed API", "Role-based access", "Audit log"] },
      { label: "Data", items: ["PostgreSQL", "Document storage", "Migrations"] },
      { label: "Quality", items: ["Unit tests", "End-to-end tests", "Staging"] },
    ],
    implementation: [
      "Modelled the whole job lifecycle once, so a quote, order and invoice share the same records.",
      "Built a typed API with role-based access and an audit log for anything compliance-adjacent.",
      "Migrated the spreadsheets with import tooling, then deleted them.",
      "Covered the critical paths with unit and end-to-end tests before go-live.",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "React", "Docker", "Linux"],
    results: [
      "One place for the whole job, from quote to invoice",
      "Compliance documents stored securely and easy to find",
      "Service contracts tracked so renewals are not missed",
    ],
    metric: "Covered by unit and end-to-end tests",
    lessons: [
      "Naming the lifecycle is half the design: the database wants to mirror the business.",
      "Migration tooling is part of the product, not a one-off script.",
    ],
    service: "software-engineering",
  },
  {
    slug: "finance-cloud-platform",
    size: "mid",
    sizeLabel: "Growing companies",
    sector: "Finance",
    title: "Invoicing & bookkeeping in one place",
    summary:
      "A cloud platform for Swedish SMEs: invoicing, double-entry bookkeeping, payroll and year-end close.",
    intro:
      "Swedish SMEs juggle separate tools for invoicing, bookkeeping and payroll, then reconcile them by hand once a year. The platform puts all of it in one compliant flow.",
    challenge: [
      "Invoicing, bookkeeping and payroll lived in different tools with different data models.",
      "Year-end close required manual reconciliation of numbers that should already match.",
      "Swedish rules (BAS, SIE, Peppol, K2) had to be correct from the first invoice.",
    ],
    requirements: [
      "Double-entry bookkeeping with a verified chart of accounts",
      "Invoicing and payroll feeding the ledger automatically",
      "SIE 4 import and export, and Peppol e-invoicing",
      "An audit trail an accountant can follow",
    ],
    architecture: [
      { label: "Domain", items: ["Invoicing", "Ledger", "Payroll", "Year-end"] },
      { label: "Compliance", items: ["BAS chart", "SIE 4", "Peppol", "K2"] },
      { label: "Backend", items: ["Typed services", "Validation", "Audit trail"] },
      { label: "Data", items: ["PostgreSQL", "Immutable postings", "Backups"] },
    ],
    implementation: [
      "Modelled postings as immutable records with compensating entries, so history is always auditable.",
      "Kept compliance rules in one tested module instead of scattering checks across screens.",
      "Built SIE 4 import/export and Peppol delivery so accountants keep their existing tooling.",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "React", "Next.js", "Docker", "Linux"],
    results: [
      "One system instead of three or four tools",
      "Compliant by design: BAS, SIE 4, Peppol e-invoicing",
      "Accountants work directly in the same system",
    ],
    metric: "BAS · SIE 4 · Peppol · K2",
    lessons: [
      "In finance, the data model is the compliance story.",
      "Accountants are the real integration test: watch them use it early.",
    ],
    service: "business-automation",
  },
  {
    slug: "energy-planning-assistant",
    size: "large",
    sizeLabel: "Large organisation",
    sector: "Energy",
    title: "An AI assistant engineers can trust",
    summary:
      "An assistant that writes planning reports from real calculations and refuses to answer when the data does not support it.",
    intro:
      "Engineering teams spent days writing planning reports by hand. General-purpose chatbots could draft prose but invented numbers, which made them unusable for anything that ships.",
    challenge: [
      "Report writing consumed engineering time better spent on analysis.",
      "General-purpose assistants confidently produced wrong figures.",
      "The organisation needed evidence, not plausible text.",
    ],
    requirements: [
      "Reports generated from the real calculations, never invented",
      "Answers backed by a cited source or a clear refusal",
      "Measured accuracy before go-live",
      "Private deployment that fits the organisation's security posture",
    ],
    architecture: [
      { label: "Sources", items: ["Calculation output", "Technical documents", "Internal references"] },
      { label: "Retrieval", items: ["Ingestion", "Chunking", "Vector search", "Citation tracking"] },
      { label: "Reasoning", items: ["Local LLM", "Tool calls for arithmetic", "Refusal policy"] },
      { label: "Evaluation", items: ["976-question test set", "Accuracy report", "Audit trail"] },
    ],
    implementation: [
      "Made the calculation engine the source of numbers; the model only explains validated output.",
      "Added a refusal policy: if the evidence is not there, the assistant says so.",
      "Ran the assistant against a 976-question test set and measured accuracy before anyone relied on it.",
      "Deployed privately so no internal documents left the organisation's infrastructure.",
    ],
    stack: ["Python", "PyTorch", "Ollama", "RAG", "PostgreSQL", "Docker", "Linux"],
    results: [
      "Planning reports generated straight from source calculations",
      "Answers come with evidence, or a clear “not in the data”",
      "Accuracy measured before go-live",
    ],
    metric: "0 wrong answers across 976 test questions",
    lessons: [
      "Give the model tools, not truth: calculation stays in code.",
      "A refusal is a feature. It is what makes the other answers trustworthy.",
    ],
    service: "ai-engineering",
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const caseStudiesByService = (serviceSlug: string) =>
  caseStudies.filter((c) => c.service === serviceSlug);
