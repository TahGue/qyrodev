// Technology groups. Only list what the team genuinely works with.

export type TechGroup = {
  title: string;
  caption: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: "Languages",
    caption: "Systems and application work, from kernels to interfaces.",
    items: ["C", "C++", "Rust", "Python", "TypeScript"],
  },
  {
    title: "Backend & infrastructure",
    caption: "Services, data and deployment we run in production.",
    items: ["Node.js", "PostgreSQL", "Docker", "Linux", "Distributed systems"],
  },
  {
    title: "AI ecosystem",
    caption: "Models, retrieval and evaluation, self-hosted when it matters.",
    items: ["PyTorch", "Ollama", "Hugging Face", "LLMs", "RAG", "AI agents"],
  },
  {
    title: "Frontend",
    caption: "Fast, accessible interfaces that hold up at scale.",
    items: ["React", "Next.js", "Modern web technologies"],
  },
];
