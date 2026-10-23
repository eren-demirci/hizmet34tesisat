import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, Check, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "./PageHero";
import { SectionHeading } from "./SectionHeading";
import { ServiceGrid } from "./ServiceGrid";
import { FAQAccordion, type FaqItem } from "./FAQAccordion";
import { CTASection } from "./CTASection";
import { ProjectList } from "./ProjectList";
import { Reveal } from "./Reveal";
import type { Crumb } from "./Breadcrumbs";
import { districtBySlug, site } from "@/data/site";
import { districtDetail, profileText } from "@/data/districts";
import { projectsFor } from "@/data/projects";

export type LocationVariant =
  | "bolge"
  | "su-kacagi-tespiti"
  | "tikaniklik-acma"
  | "kombi-petek-temizligi";

const variantLinks: Record<LocationVariant, { label: (name: string) => string; to: string }> = {
  bolge: { label: (n) => `${n} tesisat hizmetleri`, to: "/hizmet-bolgeleri/$ilce" },
  "su-kacagi-tespiti": { label: (n) => `${n} su kaçağı tespiti`, to: "/su-kacagi-tespiti/$ilce" },
  "tikaniklik-acma": { label: (n) => `${n} tıkanıklık açma`, to: "/tikaniklik-acma/$ilce" },
  "kombi-petek-temizligi": {
    label: (n) => `${n} kombi ve petek temizliği`,
    to: "/kombi-petek-temizligi/$ilce",
  },
};

export function LocationPage({
  district,
  variant,
  eyebrow,
  title,
  description,
  crumbs,
  intro,
  bullets,
  faq,
  showServices = false,
}: {
  district: { slug: string; name: string; region: string };
  variant: LocationVariant;
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  intro: string[];
  bullets: string[];
  faq: FaqItem[];
  showServices?: boolean;
}) {
  const detail = districtDetail(district.slug);
  const profile = detail ? profileText[detail.profile] : null;
  const neighbors = (detail?.neighbors ?? [])
    .map((slug) => districtBySlug(slug))
    .filter((d) => d !== undefined);
  const serviceFilter = variant === "bolge" ? undefined : variant;
  const localProjects = projectsFor({ district: district.slug, service: serviceFilter });
  const siblingPages = (Object.keys(variantLinks) as LocationVariant[]).filter((v) => v !== variant);

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

            {profile ? (
              <>
                <h2 className="mt-10 flex items-center gap-2.5 text-xl font-bold text-navy">
                  <Building2 className="size-5 text-brand" aria-hidden="true" />
                  {district.name}: {profile.title.toLocaleLowerCase("tr-TR")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{profile.text}</p>
              </>
            ) : null}

            {detail?.areas.length ? (
              <>
                <h2 className="mt-10 text-xl font-bold text-navy">
                  {district.name} içinde hizmet verdiğimiz başlıca semtler
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {detail.areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                    >
                      <MapPin className="size-3.5 text-brand" aria-hidden="true" />
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  Listede olmayan mahalleler için de {district.name} genelinde servis veriyoruz.
                </p>
              </>
            ) : null}
          </div>

          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <ul className="surface-card space-y-3 p-6">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <nav aria-label={`${district.name} hizmet sayfaları`} className="surface-card p-6">
              <h2 className="text-sm font-bold text-navy">{district.name} için diğer sayfalar</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {siblingPages.map((v) => (
                  <li key={v}>
                    <Link
                      to={variantLinks[v].to}
                      params={{ ilce: district.slug }}
                      className="inline-flex items-center gap-1.5 font-semibold text-brand hover:underline"
                    >
                      {variantLinks[v].label(district.name)}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <ProjectList
        projects={localProjects}
        title={`${district.name} bölgesinde yaptığımız işler`}
      />

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

      {neighbors.length ? (
        <section className="bg-surface py-14 lg:py-20">
          <div className="container-page">
            <h2 className="text-xl font-extrabold text-navy sm:text-2xl">
              {district.name} çevresindeki ilçeler
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {neighbors.map((n) => (
                <li key={n.slug}>
                  <Link
                    to={variantLinks[variant].to}
                    params={{ ilce: n.slug }}
                    className="surface-card flex items-center justify-between gap-3 p-4 text-sm font-semibold text-navy hover:border-brand/30"
                  >
                    {variantLinks[variant].label(n.name)}
                    <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}
