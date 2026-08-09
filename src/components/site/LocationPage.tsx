import { Link } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "./PageHero";
import { SectionHeading } from "./SectionHeading";
import { ServiceGrid } from "./ServiceGrid";
import { FAQAccordion, type FaqItem } from "./FAQAccordion";
import { CTASection } from "./CTASection";
import { Reveal } from "./Reveal";
import type { Crumb } from "./Breadcrumbs";
import { site } from "@/data/site";

export function LocationPage({
  eyebrow,
  title,
  description,
  crumbs,
  intro,
  bullets,
  faq,
  showServices = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  intro: string[];
  bullets: string[];
  faq: FaqItem[];
  showServices?: boolean;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} crumbs={crumbs}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="brand" size="lg">
            <Link to="/servis-talebi">Servis Talebi Oluştur</Link>
          </Button>
          <Button asChild variant="onNavy" size="lg">
            <a href={site.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              Hemen Ara
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            {intro.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground first:mt-0">
                {p}
              </p>
            ))}
          </div>
          <ul className="surface-card space-y-3 p-6">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showServices ? (
        <section className="bg-surface py-16 lg:py-24">
          <div className="container-page">
            <SectionHeading
              eyebrow="Hizmetler"
              title="Bu bölgede sunduğumuz hizmetler"
              description="İhtiyacınıza uygun hizmeti seçerek detaylı bilgiye ulaşabilirsiniz."
            />
            <div className="mt-12">
              <ServiceGrid />
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading align="left" eyebrow="SSS" title="Bölgeye özel sık sorulanlar" />
          </Reveal>
          <FAQAccordion items={faq} idPrefix="loc" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
