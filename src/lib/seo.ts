import { site } from "@/data/site";

export const absoluteUrl = (path: string) => `${site.url}${path}`;

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: site.name,
  description: site.description,
  url: site.url,
  image: absoluteUrl("/og-image.jpg"),
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: "İstanbul",
  openingHours: ["Mo-Fr 08:00-20:00", "Sa-Su 09:00-18:00"],
});

export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
});

export const serviceJsonLd = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: name,
  name,
  description,
  url: absoluteUrl(url),
  provider: { "@type": "Plumber", name: site.name, telephone: site.phone },
  areaServed: "İstanbul",
});

export const pageMeta = ({
  title,
  description,
  url,
  type = "website",
  image = absoluteUrl("/og-image.jpg"),
}: {
  title: string;
  description: string;
  url: string;
  type?: string;
  image?: string;
}) => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: type },
  { property: "og:url", content: absoluteUrl(url) },
  { property: "og:site_name", content: site.name },
  { property: "og:locale", content: "tr_TR" },
  { property: "og:image", content: image },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: image },
];
