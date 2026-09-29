import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import type { Guide } from "@/data/guides";

export function GuideCard({ guide, delay = 0 }: { guide: Guide; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="surface-card group relative flex flex-col p-6">
      <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
        <Clock className="size-3.5" aria-hidden="true" />
        {guide.readingMinutes} dk okuma
      </p>
      <h3 className="mt-3 text-lg font-bold leading-snug text-navy">
        <Link
          to="/rehber/$slug"
          params={{ slug: guide.slug }}
          className="after:absolute after:inset-0 group-hover:text-brand"
        >
          {guide.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{guide.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Devamını oku
        <ArrowRight className="size-4" aria-hidden="true" />
      </span>
    </Reveal>
  );
}
