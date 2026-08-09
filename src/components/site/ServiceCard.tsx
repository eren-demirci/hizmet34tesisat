import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "./ServiceIcon";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/hizmetler/$slug"
      params={{ slug: service.slug }}
      className="group surface-card flex h-full flex-col p-6 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[var(--shadow-lift)] sm:p-7"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
        <ServiceIcon name={service.icon} className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-navy">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
        Detaylı Bilgi
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
