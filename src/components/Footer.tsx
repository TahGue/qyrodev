import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "Experiments", href: "#projects" },
    { label: "Solutions", href: "#services" },
    { label: "Legacy", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0F1117] border-t border-white/5 relative w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 py-10 sm:py-12 gap-6 max-w-[1280px] mx-auto">
        {/* Logo + copyright */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#cabeff]"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            >
              terminal
            </span>
            <Image
              src="/logoq.svg"
              alt="QYRODEV Logo"
              width={24}
              height={24}
              className="h-6 w-auto object-contain"
            />
          </div>
          <p
            className="text-[#c9c4d8] text-[10px] sm:text-xs font-bold tracking-widest uppercase opacity-80 text-center md:text-left"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            © {new Date().getFullYear()} QYRODEV. BORN IN THE NORTH, CRAFTED IN THE CLOUD.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold text-[#c9c4d8] hover:text-white transition-colors duration-200 tracking-widest uppercase opacity-70 hover:opacity-100"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
