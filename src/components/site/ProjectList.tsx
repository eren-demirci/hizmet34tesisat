import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { districtBySlug, serviceBySlug } from "@/data/site";
import type { Project } from "@/data/projects";

const monthName = (date: string) =>
  new Date(`${date}-01T00:00:00`).toLocaleDateString("tr-TR", { month: "long", year: "numeric" });

export function ProjectList({
  projects,
  title = "Bölgede yaptığımız işler",
  description,
  className = "bg-surface",
}: {
  projects: Project[];
  title?: string;
  description?: string | undefined;
  className?: string;
}) {
  if (!projects.length) return null;

  return (
    <section className={`${className} py-16 lg:py-24`}>
      <div className="container-page">
        <SectionHeading align="left" eyebrow="Sahadan" title={title} {...(description ? { description } : {})} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => {
            const district = districtBySlug(p.district);
            const service = serviceBySlug(p.service);
            return (
              <Reveal as="article" key={p.id} delay={(i % 3) * 80} className="surface-card overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                  />
                ) : null}
                <div className="p-6">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-brand">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {[p.area, district?.name].filter(Boolean).join(", ")} · {monthName(p.date)}
                  </p>
                  <h3 className="mt-3 text-base font-bold text-navy">{p.title}</h3>
                  {service ? (
                    <p className="mt-1 text-xs text-muted-foreground">{service.title}</p>
                  ) : null}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    <strong className="font-semibold text-foreground">Sorun: </strong>
                    {p.problem}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <strong className="font-semibold text-foreground">Çözüm: </strong>
                    {p.solution}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
