import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { StatsSection } from "@/components/site/StatsSection";
import { CTASection } from "@/components/site/CTASection";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { canonical, pageMeta } from "@/lib/seo";
import cameraImage from "@/assets/drain-camera.jpg";

const title = "Hakkımızda | Hizmet34 Tesisat";
const description =
  "Hizmet34 Tesisat; su kaçağı tespiti, tıkanıklık açma ve tesisat onarımında cihaz destekli, temiz işçilikle çalışan teknik servis ekibidir.";

const values = [
  { title: "Doğru teşhis", text: "Görünen belirtiyi değil, problemin kaynağını arıyoruz." },
  { title: "Minimum müdahale", text: "Gereksiz kırım yerine noktasal çözüm uyguluyoruz." },
  { title: "Şeffaf süreç", text: "Yapılacak işlem ve kapsamı önceden paylaşılır." },
  { title: "Temiz teslim", text: "Çalışma alanı düzenli bırakılır, sonuç kontrol edilir." },
];

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/hakkimizda" }),
    links: [canonical("/hakkimizda")],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Tesisatta Tahmin Değil, Tespit"
        description="Hizmet34 Tesisat, tesisat problemlerinde cihaz destekli teşhis ve kontrollü müdahaleyi esas alan bir teknik servis ekibidir."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "Hakkımızda" }]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Çalışma yaklaşımımız</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tesisat arızalarında en büyük maliyet çoğu zaman arızanın kendisi değil, yanlış
              yerde yapılan müdahaledir. Bu nedenle her işe teşhisle başlıyoruz: hattın yapısını,
              belirtileri ve ölçüm sonuçlarını birlikte değerlendiriyoruz.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ekibimiz akustik dinleme, termal görüntüleme, nem ölçümü ve kameralı hat görüntüleme
              gibi yöntemleri günlük işleyişin bir parçası olarak kullanır. Böylece hem işlem süresi
              hem de yapıya verilen etki sınırlanır.
            </p>
          </Reveal>
          <Reveal delay={80} className="overflow-hidden rounded-[1.5rem] border border-border shadow-[var(--shadow-card)]">
            <img
              src={cameraImage}
              alt="Teknisyen kameralı gider görüntüleme sistemiyle hattı inceliyor"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Değerlerimiz" title="İşimizi Nasıl Yapıyoruz?" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="surface-card p-6">
                <h3 className="text-base font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <CTASection />
    </>
  );
}
