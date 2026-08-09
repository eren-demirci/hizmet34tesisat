import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LocationCard } from "@/components/site/LocationCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { districts } from "@/data/site";
import { pageMeta } from "@/lib/seo";

const title = "Hizmet Bölgeleri | Hizmet34 Tesisat";
const description =
  "İstanbul genelinde tesisat hizmeti verdiğimiz bölgeler. Bölgenizi seçerek o bölgeye özel hizmet bilgilerine ulaşın.";

const regions = ["Anadolu Yakası", "Avrupa Yakası"];

export const Route = createFileRoute("/hizmet-bolgeleri/")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/hizmet-bolgeleri" }),
    links: [{ rel: "canonical", href: "/hizmet-bolgeleri" }],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmet Bölgeleri"
        title="Bulunduğunuz Yerde Profesyonel Tesisat Desteği"
        description="Ekibimiz İstanbul'un her iki yakasında hizmet veriyor. Listede bölgenizi bulamazsanız bize ulaşın."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "Hizmet Bölgeleri" }]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page space-y-14">
          {regions.map((region) => (
            <div key={region}>
              <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{region}</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {districts
                  .filter((d) => d.region === region)
                  .map((d, i) => (
                    <Reveal key={d.slug} delay={(i % 3) * 60}>
                      <LocationCard slug={d.slug} name={d.name} region={d.region} />
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
