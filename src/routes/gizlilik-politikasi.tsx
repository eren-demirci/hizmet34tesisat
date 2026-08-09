import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { pageMeta } from "@/lib/seo";

const title = "Gizlilik Politikası | Hizmet34 Tesisat";
const description =
  "Hizmet34 Tesisat web sitesinde toplanan bilgiler, kullanım amaçları ve gizliliğinizi nasıl koruduğumuz hakkında bilgilendirme.";

export const Route = createFileRoute("/gizlilik-politikasi")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/gizlilik-politikasi" }),
    links: [{ rel: "canonical", href: "/gizlilik-politikasi" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Gizlilik Politikası"
        description="Sitemiz üzerinden paylaştığınız bilgilerin nasıl kullanıldığına ilişkin açıklamalar."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "Gizlilik Politikası" }]}
      />
      <section className="bg-background py-16 lg:py-24">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Bu politika, Hizmet34 Tesisat web sitesi üzerinden iletilen bilgilerin nasıl
            toplandığını ve kullanıldığını açıklar.
          </p>
          <h2 className="text-lg font-bold text-navy">Toplanan bilgiler</h2>
          <p>
            Servis talebi formu aracılığıyla ad-soyad, telefon, ilçe, adres ve talep açıklaması
            bilgileri toplanır. Bu bilgiler yalnızca talebinizin karşılanması amacıyla kullanılır.
          </p>
          <h2 className="text-lg font-bold text-navy">Üçüncü taraflarla paylaşım</h2>
          <p>
            Bilgileriniz pazarlama amacıyla üçüncü taraflarla paylaşılmaz. Yalnızca yasal
            zorunluluk hâlinde yetkili kurumlarla paylaşılabilir.
          </p>
          <h2 className="text-lg font-bold text-navy">Güvenlik</h2>
          <p>
            Bilgilerinizin yetkisiz erişime karşı korunması için makul teknik ve idari tedbirler
            uygulanır.
          </p>
        </div>
      </section>
    </>
  );
}
