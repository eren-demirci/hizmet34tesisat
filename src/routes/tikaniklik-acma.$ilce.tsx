import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import { districtBySlug } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

type District = { slug: string; name: string; region: string };

const faqFor = (name: string) => [
  {
    q: `${name} bölgesinde hangi tıkanıklıklara müdahale ediyorsunuz?`,
    a: "Lavabo, mutfak, banyo, klozet ve ana gider hatlarındaki tıkanıklıklara spiral ve basınçlı su yöntemleriyle müdahale ediyoruz.",
  },
  {
    q: "Tıkanıklık tekrarlarsa ne yapılır?",
    a: "Hatta çökme, kırık veya ters eğim şüphesi varsa kameralı gider görüntüleme ile hattın yapısal durumu incelenir.",
  },
];

export const Route = createFileRoute("/tikaniklik-acma/$ilce")({
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
    const url = `/tikaniklik-acma/${params.ilce}`;
    const title = `${name} Tıkanıklık Açma | Gider ve Lavabo — Hizmet34 Tesisat`;
    const description = `${name} bölgesinde lavabo, mutfak, klozet ve ana gider tıkanıklıklarını profesyonel ekipmanlarla açıyoruz.`;
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
              { name: "Tıkanıklık Açma", url: "/hizmetler/tikaniklik-acma" },
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
      eyebrow="Tıkanıklık Açma"
      title={`${name} Tıkanıklık Açma`}
      description={`${name} bölgesinde gider tıkanıklıklarını boru çapına uygun yöntemle, tesisata zarar vermeden açıyoruz.`}
      crumbs={[
        { label: "Ana Sayfa", to: "/" },
        { label: "Tıkanıklık Açma", to: "/hizmetler/$slug", params: { slug: "tikaniklik-acma" } },
        { label: name },
      ]}
      intro={[
        `${name} bölgesinde en sık karşılaşılan tıkanıklık nedenleri mutfak hatlarında yağ birikmesi, banyo hatlarında ise saç ve sabun kalıntısıdır. Eski binalarda kireçlenme de akışı belirgin şekilde daraltır.`,
        "Müdahale öncesinde tıkanıklığın hangi hatta ve yaklaşık hangi mesafede olduğu belirlenir. Ardından uygun spiral veya basınçlı su yöntemiyle hat açılır ve akış testi yapılır.",
      ]}
      bullets={[
        "Lavabo, mutfak ve banyo giderleri",
        "Klozet ve ana gider hatları",
        "Boru çapına uygun spiral seçimi",
        "Basınçlı su ile yağ ve tortu temizliği",
        "Gerektiğinde kamera ile doğrulama",
      ]}
      faq={faqFor(name)}
    />
  );
}
