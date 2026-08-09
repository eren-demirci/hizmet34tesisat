import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTASection } from "@/components/site/CTASection";
import { homeFaq, services } from "@/data/site";
import { faqJsonLd, pageMeta } from "@/lib/seo";

const allFaq = [...homeFaq, ...services.flatMap((s) => s.faq)].filter(
  (item, i, arr) => arr.findIndex((x) => x.q === item.q) === i,
);

const title = "Sık Sorulan Sorular | Hizmet34 Tesisat";
const description =
  "Su kaçağı tespiti, tıkanıklık açma, kameralı görüntüleme ve tesisat onarımı hakkında sık sorulan soruların yanıtları.";

export const Route = createFileRoute("/sik-sorulan-sorular")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/sik-sorulan-sorular" }),
    links: [{ rel: "canonical", href: "/sik-sorulan-sorular" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(allFaq)) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="SSS"
        title="Sık Sorulan Sorular"
        description="Tesisat hizmetleri hakkında en çok merak edilen konuları tek sayfada topladık."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "Sık Sorulan Sorular" }]}
      />
      <section className="bg-background py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <FAQAccordion items={allFaq} idPrefix="all" />
        </div>
      </section>
      <CTASection />
    </>
  );
}
