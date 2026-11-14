import { Code2, Layers, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import type { Service } from "@/content/services";

export const SERVICE_ICON: Record<Service["icon"], LucideIcon> = {
  code: Code2,
  sparkles: Sparkles,
  workflow: Workflow,
  layers: Layers,
};

export default function ServiceIcon({ icon, size = 20 }: { icon: Service["icon"]; size?: number }) {
  const Icon = SERVICE_ICON[icon];
  return <Icon size={size} aria-hidden />;
}
