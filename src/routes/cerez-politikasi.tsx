import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { canonical, pageMeta } from "@/lib/seo";

const title = "Çerez Politikası | Hizmet34 Tesisat";
const description =
  "Hizmet34 Tesisat web sitesinde kullanılan çerez türleri, kullanım amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz.";

export const Route = createFileRoute("/cerez-politikasi")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/cerez-politikasi" }),
    links: [canonical("/cerez-politikasi")],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Çerez Politikası"
        description="Sitemizde kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "Çerez Politikası" }]}
      />
      <section className="bg-background py-16 lg:py-24">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Çerezler, ziyaret ettiğiniz web sitelerinin cihazınıza kaydettiği küçük metin
            dosyalarıdır. Sitenin temel işlevlerinin çalışması için zorunlu çerezler kullanılır.
          </p>
          <h2 className="text-lg font-bold text-navy">Çerez türleri</h2>
          <p>
            Zorunlu çerezler sitenin çalışması için gereklidir. Performans çerezleri, sayfa
            kullanımına ilişkin toplu istatistiklerin oluşturulmasına yardımcı olabilir.
          </p>
          <h2 className="text-lg font-bold text-navy">Tercihlerinizi yönetme</h2>
          <p>
            Tarayıcı ayarlarınız üzerinden çerezleri silebilir veya engelleyebilirsiniz. Zorunlu
            çerezlerin engellenmesi bazı bölümlerin çalışmamasına neden olabilir.
          </p>
        </div>
      </section>
    </>
  );
}
