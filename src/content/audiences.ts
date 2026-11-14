// Who the work is for. These are the three organisations we most often build for.

export type Audience = {
  key: "small" | "mid" | "large";
  label: string;
  headline: string;
  points: string[];
};

export const audiences: Audience[] = [
  {
    key: "small",
    label: "Small businesses",
    headline: "Get found online and win more customers.",
    points: [
      "A professional website with booking and payments",
      "Local SEO and Google reviews",
      "A simple admin panel you run yourself",
    ],
  },
  {
    key: "mid",
    label: "Growing & mid-size companies",
    headline: "Stop running the business on spreadsheets.",
    points: [
      "Custom systems for sales, operations and finance",
      "Automation of repetitive manual work",
      "Integrations with the tools you already use",
    ],
  },
  {
    key: "large",
    label: "Large organisations",
    headline: "AI and systems your IT and compliance teams can trust.",
    points: [
      "AI with measured accuracy and audit trails",
      "Private, on-prem or EU-hosted deployment",
      "Tested, documented handover to your team",
    ],
  },
];
