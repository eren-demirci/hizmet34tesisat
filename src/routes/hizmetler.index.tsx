import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { CTASection } from "@/components/site/CTASection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { breadcrumbJsonLd, canonical, pageMeta } from "@/lib/seo";

const title = "Tesisat Hizmetlerimiz | Hizmet34 Tesisat";
const description =
  "Su kaçağı tespiti, tıkanıklık açma, kameralı gider görüntüleme, tesisat tamiri ve yenileme hizmetlerimizin tamamı.";

export const Route = createFileRoute("/hizmetler/")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/hizmetler" }),
    links: [canonical("/hizmetler")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: "/" },
            { name: "Hizmetler", url: "/hizmetler" },
          ]),
        ),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Tesisat İhtiyaçlarınız İçin Uçtan Uca Teknik Servis"
        description="Tespitten onarıma kadar tüm süreçleri kendi ekibimizle yürütüyoruz. Aşağıdan ihtiyacınıza uygun hizmeti seçerek detaylı bilgiye ulaşabilirsiniz."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "Hizmetler" }]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page">
          <ServiceGrid />
        </div>
      </section>

      <ProcessTimeline />
      <CTASection />
    </>
  );
}
