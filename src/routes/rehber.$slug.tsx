import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTASection } from "@/components/site/CTASection";
import { ServiceCard } from "@/components/site/ServiceCard";
import { GuideCard } from "@/components/site/GuideCard";
import { guideBySlug, guides, type Guide } from "@/data/guides";
import { serviceBySlug, site } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd, canonical, faqJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/rehber/$slug")({
  loader: ({ params }): { guide: Guide } => {
    const guide = guideBySlug(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Sayfa bulunamadı" }, { name: "robots", content: "noindex" }] };
    }
    const g = loaderData.guide;
    const url = `/rehber/${params.slug}`;
    return {
      meta: [
        ...pageMeta({ title: g.metaTitle, description: g.metaDescription, url, type: "article" }),
        { property: "article:published_time", content: g.datePublished },
        { property: "article:modified_time", content: g.dateModified },
      ],
      links: [canonical(url)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            articleJsonLd({
              title: g.title,
              description: g.metaDescription,
              url,
              datePublished: g.datePublished,
              dateModified: g.dateModified,
            }),
          ),
        },
        ...(g.faq.length
          ? [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(g.faq)) }]
          : []),
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", url: "/" },
              { name: "Rehber", url: "/rehber" },
              { name: g.title, url },
            ]),
          ),
        },
      ],
    };
  },
  component: GuideDetail,
});

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function GuideDetail() {
  const { guide } = Route.useLoaderData() as { guide: Guide };
  const related = guide.relatedServices
    .map((slug) => serviceBySlug(slug))
    .filter((s) => s !== undefined);
  const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Rehber"
        title={guide.title}
        description={guide.excerpt}
        crumbs={[
          { label: "Ana Sayfa", to: "/" },
          { label: "Rehber", to: "/rehber" },
          { label: guide.title },
        ]}
      >
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-navy-foreground/70">
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden="true" />
            {guide.readingMinutes} dk okuma
          </span>
          <span>
            Güncellenme: <time dateTime={guide.dateModified}>{formatDate(guide.dateModified)}</time>
          </span>
          <span>{site.name} teknik ekibi</span>
        </p>
      </PageHero>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <article className="max-w-3xl">
            {guide.sections.map((section) => {
              const ListTag = section.ordered ? "ol" : "ul";
              return (
                <section key={section.heading} className="mt-10 first:mt-0">
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">{section.heading}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                  {section.list ? (
                    <ListTag className="mt-5 space-y-3">
                      {section.list.map((item, i) => (
                        <li key={item} className="flex items-start gap-3 text-base text-foreground">
                          {section.ordered ? (
                            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-brand">
                              {i + 1}
                            </span>
                          ) : (
                            <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />
                          )}
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ListTag>
                  ) : null}
                </section>
              );
            })}
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="surface-card p-6">
              <h2 className="text-base font-bold text-navy">Yerinde tespit ister misiniz?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Sorunu tarif edin, uygun ekibi İstanbul'daki adresinize yönlendirelim.
              </p>
              <Button asChild variant="brand" className="mt-5 w-full">
                <Link to="/servis-talebi">Servis Talebi Oluştur</Link>
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

      {guide.faq.length ? (
        <section className="bg-surface py-16 lg:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              align="left"
              eyebrow="SSS"
              title="Sık sorulan sorular"
              className="lg:sticky lg:top-28 lg:self-start"
            />
            <FAQAccordion items={guide.faq} idPrefix={guide.slug} />
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="bg-background py-16 lg:py-24">
          <div className="container-page">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">İlgili hizmetler</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-border bg-surface py-16 lg:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Diğer rehber yazıları</h2>
            <Link
              to="/rehber"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Tüm yazılar
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherGuides.map((g, i) => (
              <GuideCard key={g.slug} guide={g} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
