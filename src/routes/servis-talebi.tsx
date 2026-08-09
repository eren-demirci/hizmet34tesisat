import { createFileRoute } from "@tanstack/react-router";
import { ServiceRequestForm } from "@/components/site/ServiceRequestForm";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { MessageCircle, Phone, Clock } from "lucide-react";

const title = "Servis Talebi Oluştur | Hizmet34 Tesisat";
const description =
  "Tesisat probleminiz için servis talebi oluşturun. Formu doldurun, ekibimiz en kısa sürede sizinle iletişime geçsin.";

export const Route = createFileRoute("/servis-talebi")({
  validateSearch: (search: Record<string, unknown>) => ({
    hizmet: typeof search["hizmet"] === "string" ? (search["hizmet"] as string) : undefined,
  }),
  head: () => ({
    meta: pageMeta({ title, description, url: "/servis-talebi" }),
    links: [{ rel: "canonical", href: "/servis-talebi" }],
  }),
  component: ServiceRequestPage,
});

function ServiceRequestPage() {
  const { hizmet } = Route.useSearch();

  return (
    <>
      <PageHero
        eyebrow="Servis Talebi"
        title="Servis Talebi Oluşturun"
        description="Formu doldurduğunuzda talebiniz ekibimize iletilir. Acil durumlarda telefon veya WhatsApp üzerinden de ulaşabilirsiniz."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "Servis Talebi" }]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          <ServiceRequestForm defaultService={hizmet ?? ""} />

          <aside className="space-y-4">
            <div className="surface-card p-6">
              <h2 className="text-base font-bold text-navy">Doğrudan iletişim</h2>
              <a
                href={site.phoneHref}
                className="mt-4 flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Phone className="size-4 text-brand" aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={site.phoneNumbers[1].href}
                className="mt-3 flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Phone className="size-4 text-brand" aria-hidden="true" />
                {site.phoneNumbers[1].label}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-navy transition-colors hover:border-whatsapp/40 hover:text-whatsapp"
              >
                <MessageCircle className="size-4 text-whatsapp" aria-hidden="true" />
                WhatsApp ile yazın
              </a>
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <Clock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                {site.hours}
              </p>
            </div>

            <div className="surface-card p-6">
              <h2 className="text-base font-bold text-navy">Talep öncesi kontrol listesi</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                <li>Sorunun ne zaman başladığını not edin.</li>
                <li>Mümkünse ana su vanasını kapatın.</li>
                <li>Sızıntı bölgesindeki eşyaları uzaklaştırın.</li>
                <li>Varsa nem lekesinin fotoğrafını çekin.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
