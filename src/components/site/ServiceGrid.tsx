import { services } from "@/data/site";
import { ServiceCard } from "./ServiceCard";
import { Reveal } from "./Reveal";

export function ServiceGrid({ exclude }: { exclude?: string }) {
  const list = services.filter((s) => s.slug !== exclude);
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((service, i) => (
        <Reveal key={service.slug} delay={(i % 3) * 80} className="h-full">
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  );
}
