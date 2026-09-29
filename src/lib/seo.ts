import { districts, services, site } from "@/data/site";

export const absoluteUrl = (path: string) => `${site.url}${path}`;

export const canonical = (path: string) => ({ rel: "canonical", href: absoluteUrl(path) });

const businessId = absoluteUrl("/#isletme");

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": businessId,
  name: site.name,
  description: site.description,
  url: site.url,
  logo: absoluteUrl("/logo.svg"),
  image: absoluteUrl("/og-image.jpg"),
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.district,
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "City", name: "İstanbul" },
    ...districts.map((d) => ({
      "@type": "AdministrativeArea",
      name: `${d.name}, İstanbul`,
    })),
  ],
  // Sitede "7/24 Hizmetteyiz" yazdığı için schema da aynı bilgiyi vermeli.
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tesisat Hizmetleri",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: absoluteUrl(`/hizmetler/${s.slug}`),
      },
    })),
  },
  ...(site.sameAs.length ? { sameAs: [...site.sameAs] } : {}),
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

export const serviceJsonLd = (
  name: string,
  description: string,
  url: string,
  areaServed = "İstanbul",
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: name,
  name,
  description,
  url: absoluteUrl(url),
  provider: { "@type": "Plumber", "@id": businessId, name: site.name, telephone: site.phone },
  areaServed: { "@type": "Place", name: areaServed },
});

export const articleJsonLd = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: absoluteUrl(url),
  mainEntityOfPage: absoluteUrl(url),
  image: absoluteUrl("/og-image.jpg"),
  datePublished,
  dateModified,
  inLanguage: "tr-TR",
  author: { "@type": "Organization", "@id": businessId, name: site.name, url: site.url },
  publisher: {
    "@type": "Organization",
    "@id": businessId,
    name: site.name,
    logo: { "@type": "ImageObject", url: absoluteUrl("/logo.svg") },
  },
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
