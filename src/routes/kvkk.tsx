import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { pageMeta } from "@/lib/seo";

const title = "KVKK Aydınlatma Metni | Hizmet34 Tesisat";
const description =
  "Hizmet34 Tesisat kişisel verilerin korunması kapsamında veri işleme amaçları, saklama süresi ve haklarınıza ilişkin aydınlatma metni.";

export const Route = createFileRoute("/kvkk")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/kvkk" }),
    links: [{ rel: "canonical", href: "/kvkk" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="KVKK Aydınlatma Metni"
        description="Kişisel verilerinizin hangi amaçlarla işlendiğine ve haklarınıza ilişkin bilgilendirme."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "KVKK" }]}
      />
      <section className="bg-background py-16 lg:py-24">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Hizmet34 Tesisat olarak, servis talebi oluştururken paylaştığınız ad-soyad, telefon,
            adres ve talep içeriği bilgilerini yalnızca talebinizin değerlendirilmesi, hizmetin
            planlanması ve sizinle iletişim kurulması amacıyla işliyoruz.
          </p>
          <h2 className="text-lg font-bold text-navy">İşleme amaçları</h2>
          <p>
            Verileriniz; servis talebinin alınması, randevu planlaması, hizmetin yürütülmesi ve
            yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.
          </p>
          <h2 className="text-lg font-bold text-navy">Saklama süresi</h2>
          <p>
            Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta
            öngörülen süreler kadar saklanır; sürenin sona ermesiyle silinir veya anonim hâle
            getirilir.
          </p>
          <h2 className="text-lg font-bold text-navy">Haklarınız</h2>
          <p>
            6698 sayılı Kanun kapsamında verilerinize erişme, düzeltilmesini veya silinmesini
            isteme haklarına sahipsiniz. Taleplerinizi iletişim sayfamızdaki kanallar üzerinden
            iletebilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
