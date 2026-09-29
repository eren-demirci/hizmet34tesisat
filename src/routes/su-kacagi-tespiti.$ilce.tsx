import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import { districtBySlug } from "@/data/site";
import { breadcrumbJsonLd, canonical, faqJsonLd, pageMeta, serviceJsonLd } from "@/lib/seo";

type District = { slug: string; name: string; region: string };

const faqFor = (name: string) => [
  {
    q: `${name} bölgesinde su kaçağı kırmadan bulunabilir mi?`,
    a: "Kaçağın yeri akustik dinleme, termal görüntüleme ve nem ölçümüyle belirlenir; tespit aşamasında kırma işlemi yapılmaz.",
  },
  {
    q: `${name} için tespit süreci nasıl ilerliyor?`,
    a: "Önce belirtiler ve sayaç davranışı değerlendirilir, ardından şüpheli hatlar daraltılır ve kaçağın konumu netleştirilir.",
  },
];

export const Route = createFileRoute("/su-kacagi-tespiti/$ilce")({
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
    const url = `/su-kacagi-tespiti/${params.ilce}`;
    const title = `${name} Su Kaçağı Tespiti | Cihazla Kırmadan — Hizmet34 Tesisat`;
    const description = `${name} bölgesinde cihazla su kaçağı tespiti: akustik dinleme, termal görüntüleme ve nem ölçümüyle noktasal tespit.`;
    return {
      meta: pageMeta({ title, description, url }),
      links: [canonical(url)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            serviceJsonLd(`${name} Su Kaçağı Tespiti`, description, url, `${name}, İstanbul`),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqFor(name))) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", url: "/" },
              { name: "Su Kaçağı Tespiti", url: "/hizmetler/su-kacagi-tespiti" },
              { name, url },
            ]),
          ),
        },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { district } = Route.useLoaderData() as { district: District };
  const name = district.name;

  return (
    <LocationPage
      district={district}
      variant="su-kacagi-tespiti"
      eyebrow="Cihazla Su Kaçağı Tespiti"
      title={`${name} Su Kaçağı Tespiti`}
      description={`${name} bölgesinde su kaçağının kaynağını cihaz desteğiyle belirliyor, gereksiz kırma işlemlerinin önüne geçiyoruz.`}
      crumbs={[
        { label: "Ana Sayfa", to: "/" },
        { label: "Su Kaçağı Tespiti", to: "/hizmetler/$slug", params: { slug: "su-kacagi-tespiti" } },
        { label: name },
      ]}
      intro={[
        `${name} bölgesindeki dairelerde en sık karşılaşılan belirtiler duvarda nem, zeminde ısınan bölgeler ve su kullanılmadığı hâlde dönen sayaçtır. Bu belirtiler farklı hatlardan kaynaklanabileceği için doğru teşhis kritik önemdedir.`,
        "Akustik dinleme ile basınçlı hattaki kayıp sesi analiz edilir, termal görüntüleme sıcak su hattındaki ısı farkını ortaya koyar, nem ölçümü ise yayılım yönünü gösterir. Üç yöntemin birlikte kullanılması tespit doğruluğunu artırır.",
      ]}
      bullets={[
        "Akustik dinleme sistemleri",
        "Termal görüntüleme",
        "Nem ölçümü",
        "Hat bazlı basınç testi",
        "Noktasal müdahale planı",
      ]}
      faq={faqFor(name)}
    />
  );
}
