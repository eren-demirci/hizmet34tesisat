import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, CircleAlert, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ProjectList } from "@/components/site/ProjectList";
import { districts, serviceBySlug, services, site, type Service } from "@/data/site";
import { projectsFor } from "@/data/projects";
import { breadcrumbJsonLd, faqJsonLd, canonical, pageMeta, serviceJsonLd } from "@/lib/seo";
import repairImage from "@/assets/plumbing-repair.jpg";

export const Route = createFileRoute("/hizmetler/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Sayfa bulunamadı" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const url = `/hizmetler/${params.slug}`;
    return {
      meta: pageMeta({
        title: s.metaTitle,
        description: s.metaDescription,
        url,
        type: "article",
      }),
      links: [canonical(url)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(serviceJsonLd(s.title, s.metaDescription, url)),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(s.faq)) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", url: "/" },
              { name: "Hizmetler", url: "/hizmetler" },
              { name: s.title, url },
            ]),
          ),
        },
      ],
    };
  },
  component: ServiceDetail,
});

// Bu hizmetlerin ilçe bazlı ayrı sayfaları var; hizmet sayfasından hepsine link verilir.
const districtRoutes: Partial<Record<Service["slug"], string>> = {
  "su-kacagi-tespiti": "/su-kacagi-tespiti/$ilce",
  "tikaniklik-acma": "/tikaniklik-acma/$ilce",
};

const regions = ["Anadolu Yakası", "Avrupa Yakası"] as const;

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const districtRoute = districtRoutes[service.slug];

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.heroTitle}
        description={service.heroText}
        crumbs={[
          { label: "Ana Sayfa", to: "/" },
          { label: "Hizmetler", to: "/hizmetler" },
          { label: service.title },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="brand" size="lg">
            <Link to="/servis-talebi" search={{ hizmet: service.slug }}>
              Servis Talebi Oluştur
            </Link>
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
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-brand">
              <ServiceIcon name={service.icon} className="size-6" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold text-navy sm:text-3xl">
              {service.title} hakkında
            </h2>
            {service.intro.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <h3 className="mt-10 text-xl font-bold text-navy">Belirtiler ve sık görülen sorunlar</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.symptoms.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground"
                >
                  <CircleAlert className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <img
                src={repairImage}
                alt={`${service.title} kapsamında yapılan profesyonel tesisat çalışması`}
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div className="surface-card mt-4 p-6">
              <h3 className="text-base font-bold text-navy">Neden Hizmet34 Tesisat?</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button asChild variant="brand" className="mt-6 w-full">
                <Link to="/servis-talebi" search={{ hizmet: service.slug }}>
                  Servis Talebi Oluştur
                </Link>
              </Button>
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-navy hover:text-brand"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Süreç"
            title="Hizmet nasıl uygulanıyor?"
            description="Her adımda ne yapıldığını bilirsiniz; işlem öncesi ve sonrası bilgilendirme yapılır."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80} className="surface-card p-6">
                <span className="text-sm font-extrabold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Ekipman ve Yöntem"
            title="Kullandığımız ekipmanlar"
            description="Doğru teşhis için ekipman seçimi, en az müdahaleyle çözüme ulaşmanın temelidir."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.equipment.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) * 80} className="surface-card p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-brand">
                  <Wrench className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="SSS"
            title={`${service.title} hakkında sık sorulanlar`}
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <FAQAccordion items={service.faq} idPrefix={service.slug} />
        </div>
      </section>

      <ProjectList
        projects={projectsFor({ service: service.slug })}
        title={`${service.title}: son işlerimiz`}
        className="bg-background"
      />

      <section className="border-t border-border bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Hizmet Bölgeleri"
            title={`İstanbul genelinde ${service.title.toLocaleLowerCase("tr-TR")}`}
            description="İstanbul'un iki yakasında da yerinde servis veriyoruz. Bölgenizi seçerek ilçeye özel bilgilere ulaşabilirsiniz."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {regions.map((region) => (
              <div key={region}>
                <h3 className="text-base font-bold text-navy">{region}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {districts
                    .filter((d) => d.region === region)
                    .map((d) => (
                      <li key={d.slug}>
                        <Link
                          to={districtRoute ?? "/hizmet-bolgeleri/$ilce"}
                          params={{ ilce: d.slug }}
                          className="inline-block rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                        >
                          {districtRoute ? `${d.name} ${service.title.toLocaleLowerCase("tr-TR")}` : d.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">İlgili hizmetler</h2>
            <Link
              to="/hizmetler"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Tüm hizmetler
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
