import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Görüşler"
          title="Müşterilerimiz Ne Diyor?"
          description="Tamamlanan işlerde müşterilerimizin ilettiği geri bildirimlerden bir seçki."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="h-full">
              <figure className="surface-card flex h-full flex-col p-7">
                <Quote className="size-7 text-brand/25" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <span className="block text-sm font-bold text-navy">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.service}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
