import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { GuideCard } from "@/components/site/GuideCard";
import { guides } from "@/data/guides";
import { absoluteUrl, breadcrumbJsonLd, canonical, pageMeta } from "@/lib/seo";

const title = "Tesisat Rehberi: Su Kaçağı, Tıkanıklık ve Bakım | Hizmet34 Tesisat";
const description =
  "Su kaçağı belirtileri, yüksek su faturası, kombi basıncı ve gider tıkanıklığı hakkında uzman ekibimizden pratik bilgiler ve evde yapabileceğiniz kontroller.";

export const Route = createFileRoute("/rehber/")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/rehber" }),
    links: [canonical("/rehber")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: "/" },
            { name: "Rehber", url: "/rehber" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: guides.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(`/rehber/${g.slug}`),
            name: g.title,
          })),
        }),
      },
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Rehber"
        title="Tesisat Rehberi"
        description="Su kaçağından tıkanıklığa, evde karşılaştığınız tesisat sorunlarını anlamanız ve doğru adımı atmanız için hazırladığımız yazılar."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "Rehber" }]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <GuideCard key={g.slug} guide={g} delay={(i % 3) * 80} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
