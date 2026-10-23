import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocationPage } from "@/components/site/LocationPage";
import { districtBySlug } from "@/data/site";
import { districtDetail, type BuildingProfile } from "@/data/districts";
import { breadcrumbJsonLd, canonical, faqJsonLd, pageMeta, serviceJsonLd } from "@/lib/seo";

type District = { slug: string; name: string; region: string };

// Bölgedeki yapı stoğuna göre ısıtma tesisatında en sık karşılaşılan durum.
const heatingNote: Record<BuildingProfile, string> = {
  tarihi:
    "Eski binalarda kalorifer tesisatı genellikle yıllardır temizlenmemiş döküm veya panel peteklerden oluşur. Merkezi sistemden bireysel kombiye geçilen dairelerde eski hatlarda biriken pas ve çamur, peteklerin alt kısmının soğuk kalmasının en yaygın nedenidir.",
  karma:
    "Eski apartmanlarda uzun süre temizlenmemiş hatlarda biriken çamur ve pas, yeni binalarda ise ilk kurulumdan kalan montaj kirleri peteklerin eşit ısınmasını engelleyebilir. Temizlik öncesinde tesisatın yaşı ve petek tipi değerlendirilir.",
  yeni:
    "Yeni sitelerde kombi ve panel petekler yaygındır; ancak birkaç sezon içinde tesisatta tortu birikmeye başlar. Yerden ısıtma kullanılan dairelerde ise döşeme altı hatların da kontrol edilmesi gerekir.",
  mustakil:
    "Müstakil evlerde ve villalarda ısıtma hatları uzun, petek sayısı fazladır. Tesisatın uzak uçlarındaki petekler bu yüzden tortudan ilk etkilenen noktalardır; kullanılmayan yazlıklarda ise sezon başında temizlik ve hava alma ayrıca önem taşır.",
};

const faqFor = (name: string) => [
  {
    q: `${name} bölgesinde petek temizliği için petekler sökülüyor mu?`,
    a: "Hayır. Petek temizleme makinesi tesisata bağlanır, temizlik ve durulama petekler yerinde kalarak yapılır.",
  },
  {
    q: "Petek temizliği ne zaman yaptırılmalı?",
    a: "Isıtma sezonu öncesi en uygun zamandır. Petekler eşit ısınmıyorsa veya doğalgaz faturası belirgin şekilde arttıysa sezon içinde de yapılabilir.",
  },
];

export const Route = createFileRoute("/kombi-petek-temizligi/$ilce")({
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
    const url = `/kombi-petek-temizligi/${params.ilce}`;
    const title = `${name} Kombi ve Petek Temizliği | Makineli — Hizmet34 Tesisat`;
    const description = `${name} bölgesinde petekleri sökmeden makineli petek temizliği ve kombi kontrolü. Eşit ısınma, daha düşük doğalgaz tüketimi.`;
    return {
      meta: pageMeta({ title, description, url }),
      links: [canonical(url)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            serviceJsonLd(`${name} Kombi ve Petek Temizliği`, description, url, `${name}, İstanbul`),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqFor(name))) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Ana Sayfa", url: "/" },
              { name: "Kombi ve Petek Temizliği", url: "/hizmetler/kombi-petek-temizligi" },
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
  const profile = districtDetail(district.slug)?.profile;

  return (
    <LocationPage
      district={district}
      variant="kombi-petek-temizligi"
      eyebrow="Kombi ve Petek Temizliği"
      title={`${name} Kombi ve Petek Temizliği`}
      description={`${name} bölgesinde peteklerde biriken çamur ve tortuyu makineli sistemle temizliyor, ısınma performansını geri kazandırıyoruz.`}
      crumbs={[
        { label: "Ana Sayfa", to: "/" },
        {
          label: "Kombi ve Petek Temizliği",
          to: "/hizmetler/$slug",
          params: { slug: "kombi-petek-temizligi" },
        },
        { label: name },
      ]}
      intro={[
        `${name} bölgesinde petek temizliği taleplerinin büyük kısmı peteklerin alt kısmının soğuk kalması, bazı odaların geç ısınması ve artan doğalgaz faturasıyla gelir. Bu belirtilerin ortak nedeni tesisatta zamanla biriken çamur, pas ve kireçtir.`,
        ...(profile ? [heatingNote[profile]] : []),
        "Temizlik öncesinde kombi ve petekler kontrol edilir, ardından makineli yıkama, durulama ve hava alma yapılır. İşlem kombi basıncı ayarlanıp ısınma test edilerek tamamlanır.",
      ]}
      bullets={[
        "Petekler sökülmeden makineli temizlik",
        "Tesisata uygun temizlik solüsyonu",
        "Temiz suyla durulama ve hava alma",
        "Kombi basıncı ayarı ve ısınma testi",
        "Panel, döküm ve havlupan petekler",
      ]}
      faq={faqFor(name)}
    />
  );
}
