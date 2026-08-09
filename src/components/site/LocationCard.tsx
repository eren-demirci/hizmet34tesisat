import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";

export function LocationCard({
  slug,
  name,
  region,
}: {
  slug: string;
  name: string;
  region: string;
}) {
  return (
    <Link
      to="/hizmet-bolgeleri/$ilce"
      params={{ ilce: slug }}
      className="group surface-card flex items-center justify-between gap-3 p-4 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]"
    >
      <span className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
          <MapPin className="size-4" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-bold text-navy">{name}</span>
          <span className="block text-xs text-muted-foreground">{region}</span>
        </span>
      </span>
      <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
    </Link>
  );
}
