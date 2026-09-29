#!/usr/bin/env bun
/**
 * Generates public/sitemap.xml from the live service/district data in
 * src/data/site.ts. Runs at build time (see package.json `build` script) so
 * the sitemap never drifts out of sync when services or districts are added.
 *
 * Regenerate manually with: bun run generate:sitemap
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { districts, services, site } from "../src/data/site";
import { guides } from "../src/data/guides";

type UrlEntry = {
  path: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
};

const staticPages: UrlEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/hizmetler", changefreq: "weekly", priority: "0.9" },
  { path: "/hizmet-bolgeleri", changefreq: "weekly", priority: "0.8" },
  { path: "/servis-talebi", changefreq: "monthly", priority: "0.8" },
  { path: "/iletisim", changefreq: "monthly", priority: "0.7" },
  { path: "/nasil-calisiyoruz", changefreq: "monthly", priority: "0.6" },
  { path: "/sik-sorulan-sorular", changefreq: "monthly", priority: "0.6" },
  { path: "/hakkimizda", changefreq: "monthly", priority: "0.6" },
  { path: "/rehber", changefreq: "weekly", priority: "0.7" },
  { path: "/gizlilik-politikasi", changefreq: "yearly", priority: "0.3" },
  { path: "/kvkk", changefreq: "yearly", priority: "0.3" },
  { path: "/cerez-politikasi", changefreq: "yearly", priority: "0.3" },
];

const servicePages: UrlEntry[] = services.map((s) => ({
  path: `/hizmetler/${s.slug}`,
  changefreq: "monthly",
  priority: "0.8",
}));

const districtPages: UrlEntry[] = districts.map((d) => ({
  path: `/hizmet-bolgeleri/${d.slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const leakDetectionDistrictPages: UrlEntry[] = districts.map((d) => ({
  path: `/su-kacagi-tespiti/${d.slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const clogRemovalDistrictPages: UrlEntry[] = districts.map((d) => ({
  path: `/tikaniklik-acma/${d.slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const guidePages: UrlEntry[] = guides.map((g) => ({
  path: `/rehber/${g.slug}`,
  changefreq: "monthly",
  priority: "0.6",
}));

const allEntries: UrlEntry[] = [
  ...staticPages,
  ...servicePages,
  ...districtPages,
  ...leakDetectionDistrictPages,
  ...clogRemovalDistrictPages,
  ...guidePages,
];

const today = new Date().toISOString().slice(0, 10);

const xmlEscape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const urlset = allEntries
  .map(
    (entry) => `  <url>
    <loc>${xmlEscape(site.url + entry.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`;

const outPath = fileURLToPath(new URL("../public/sitemap.xml", import.meta.url));
writeFileSync(outPath, xml, "utf-8");

console.log(`sitemap.xml written with ${allEntries.length} URLs -> ${outPath}`);
