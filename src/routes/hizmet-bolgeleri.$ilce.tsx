import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import { districtBySlug } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

type District = { slug: string; name: string; region: string };

const faqFor = (name: string) => [
  {
    q: `${name} bölgesinde su kaçağı tespiti yapıyor musunuz?`,
    a: `Evet. ${name} ve çevresinde akustik dinleme, termal görüntüleme ve nem ölçümü ile cihaz destekli su kaçağı tespiti yapıyoruz.`,
  },
  {
    q: `${name} için servis talebini nasıl oluşturabilirim?`,
    a: "Telefon, WhatsApp veya sitedeki servis talebi formu üzerinden ulaşabilirsiniz. Talebiniz alındıktan sonra ekibimiz sizinle iletişime geçer.",
  },
  {
    q: `${name} bölgesinde hangi tesisat hizmetleri veriliyor?`,
    a: "Su kaçağı tespiti, tıkanıklık açma, kameralı gider görüntüleme, tesisat tamiri, armatür onarımı ve tesisat yenileme hizmetlerinin tamamı sunulmaktadır.",
  },
];

export const Route = createFileRoute("/hizmet-bolgeleri/$ilce")({
  loader: ({ params }): { district: District } => {
    const district = districtBySlug(params.ilce);
    if (!district) throw notFound();
    return { district };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Bölge bulunamadı" }, { name: "robots", content: "noindex" }] };
    }
    const name = loaderData.district.name;
    const url = `/hizmet-bolgeleri/${params.ilce}`;
    const title = `${name} Tesisatçı | Su Kaçağı ve Tıkanıklık — Hizmet34 Tesisat`;
    const description = `${name} bölgesinde cihazla su kaçağı tespiti, tıkanıklık açma ve tesisat onarımı. Kırmadan tespit, temiz işçilik.`;
    return {
      meta: pageMeta({ title, description, url }),
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqFor(name))) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", url: "/" },
              { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri" },
              { name, url },
            ]),
          ),
        },
      ],
    };
  },
  component: DistrictPage,
});

function DistrictPage() {
  const { district } = Route.useLoaderData() as { district: District };
  const name = district.name;

  return (
    <LocationPage
      eyebrow={district.region}
      title={`${name} Bölgesinde Profesyonel Tesisat Hizmeti`}
      description={`${name} ve çevresinde su kaçağı tespiti, tıkanıklık açma ve tesisat onarımı hizmetleri veriyoruz.`}
      crumbs={[
        { label: "Ana Sayfa", to: "/" },
        { label: "Hizmet Bölgeleri", to: "/hizmet-bolgeleri" },
        { label: name },
      ]}
      intro={[
        `${name}, farklı yaş ve yapıda binaların bir arada bulunduğu bir bölge. Bu nedenle tesisat problemleri de bina yaşına, boru malzemesine ve hattın geçmişteki müdahalelerine göre farklılık gösteriyor.`,
        `Ekibimiz ${name} bölgesindeki taleplerde önce yerinde değerlendirme yapar; ölçüm sonuçlarına göre yalnızca gerekli noktada müdahale eder. Böylece hem işlem süresi hem de yapıya verilen etki sınırlı kalır.`,
      ]}
      bullets={[
        `${name} ve çevresinde yerinde servis`,
        "Cihaz destekli kaçak tespiti",
        "Kameralı gider görüntüleme imkânı",
        "İşlem öncesi bilgilendirme",
        "Temiz çalışma ve kontrollü teslim",
      ]}
      faq={faqFor(name)}
      showServices
    />
  );
}
