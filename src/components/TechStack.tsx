"use client";

const techs = [
  { name: "Next.js", icon: "web" },
  { name: "React", icon: "widgets" },
  { name: "TypeScript", icon: "code" },
  { name: "Tailwind CSS", icon: "style" },
  { name: "Python", icon: "terminal" },
  { name: "PyTorch", icon: "neurology" },
  { name: "AWS", icon: "cloud" },
  { name: "Kubernetes", icon: "hub" },
  { name: "PostgreSQL", icon: "storage" },
  { name: "Docker", icon: "deployed_code" },
  { name: "Unreal Engine", icon: "sports_esports" },
  { name: "Figma", icon: "palette" },
  { name: "GraphQL", icon: "api" },
  { name: "Rust", icon: "memory" },
  { name: "Swift", icon: "phone_iphone" },
  { name: "Terraform", icon: "dns" },
];

export default function TechStack() {
  const doubled = [...techs, ...techs];

  return (
    <section className="py-16 sm:py-20 bg-[#0F1117] overflow-hidden border-y border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mb-10 text-center">
        <span className="section-tag" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Our Arsenal
        </span>
        <h2
          className="text-2xl sm:text-[32px] font-bold text-white mt-3"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Built With the Best
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-6 tech-marquee">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 glass-card rounded-xl border border-white/5 hover:border-[#cabeff]/30 transition-colors duration-300 group"
            >
              <span
                className="material-symbols-outlined text-[#cabeff] text-[20px] group-hover:text-white transition-colors duration-300"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {tech.icon}
              </span>
              <span
                className="text-sm font-bold text-[#c9c4d8] group-hover:text-white transition-colors duration-300 whitespace-nowrap"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
