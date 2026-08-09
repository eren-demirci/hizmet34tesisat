import {
  Radar,
  Waves,
  Video,
  Droplets,
  Wrench,
  ShowerHead,
  Settings2,
  Layers,
  CircleDot,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  radar: Radar,
  waves: Waves,
  video: Video,
  toilet: CircleDot,
  droplets: Droplets,
  wrench: Wrench,
  shower: ShowerHead,
  settings: Settings2,
  layers: Layers,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Wrench;
  return <Icon className={className} aria-hidden="true" />;
}
