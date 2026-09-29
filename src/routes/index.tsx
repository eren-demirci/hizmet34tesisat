import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { FeatureSection } from "@/components/site/FeatureSection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { StatsSection } from "@/components/site/StatsSection";
import { ProblemSolution } from "@/components/site/ProblemSolution";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTASection } from "@/components/site/CTASection";
import { LocationCard } from "@/components/site/LocationCard";
import { Reveal } from "@/components/site/Reveal";
import { GuideCard } from "@/components/site/GuideCard";
import { guides } from "@/data/guides";
import { districts, homeFaq } from "@/data/site";
import { faqJsonLd, canonical, pageMeta } from "@/lib/seo";

const title = "Hizmet34 Tesisat | Su Kaçağı Tespiti ve Tıkanıklık Açma";
const description =
  "Cihazla su kaçağı tespiti, tıkanıklık açma, kameralı gider görüntüleme ve tesisat onarımı. Kırmadan tespit, temiz işçilik, hızlı müdahale.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/" }),
    links: [canonical("/")],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(homeFaq)) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="bg-background py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Tesisat Sorunlarınıza Profesyonel Çözümler"
            description="Arızanın kaynağını doğru tespit ediyor, ihtiyacınıza uygun çözümü hızlı ve profesyonel şekilde uyguluyoruz."
          />
          <div className="mt-14">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <FeatureSection />
      <ProcessTimeline />
      <StatsSection />
      <ProblemSolution />

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Hizmet Bölgeleri"
            title="Bulunduğunuz Yerde Profesyonel Tesisat Desteği"
            description="Ekibimiz İstanbul genelinde hizmet veriyor. Bölgenizi seçerek o bölgeye özel bilgilere ulaşabilirsiniz."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {districts.slice(0, 9).map((d, i) => (
              <Reveal key={d.slug} delay={(i % 3) * 60}>
                <LocationCard slug={d.slug} name={d.name} region={d.region} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/hizmet-bolgeleri"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Tüm hizmet bölgeleri
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-background py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="SSS"
            title="Sık Sorulan Sorular"
            description="Tesisat hizmetleri hakkında en çok merak edilen konuları derledik."
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <FAQAccordion items={homeFaq} idPrefix="home" />
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Rehber"
              title="Tesisat Rehberi"
              description="Su kaçağı ve tıkanıklık sorunlarını erken fark etmeniz için pratik bilgiler."
            />
            <Link
              to="/rehber"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Tüm yazılar
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[...guides]
              .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
              .slice(0, 3)
              .map((g, i) => (
                <GuideCard key={g.slug} guide={g} delay={i * 80} />
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
