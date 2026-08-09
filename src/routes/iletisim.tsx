import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ServiceRequestForm } from "@/components/site/ServiceRequestForm";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

const title = "İletişim | Hizmet34 Tesisat";
const description =
  "Hizmet34 Tesisat ile telefon, WhatsApp veya servis formu üzerinden iletişime geçin. Çalışma saatleri ve adres bilgileri.";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: pageMeta({ title, description, url: "/iletisim" }),
    links: [{ rel: "canonical", href: "/iletisim" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize Ulaşın"
        description="Tesisat probleminizi telefonla, WhatsApp üzerinden veya servis formuyla iletebilirsiniz."
        crumbs={[{ label: "Ana Sayfa", to: "/" }, { label: "İletişim" }]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="space-y-4">
            <a href={site.phoneHref} className="surface-card flex items-start gap-4 p-6 hover:border-brand/30">
              <Phone className="mt-0.5 size-5 text-brand" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-navy">Telefon</span>
                <span className="block text-sm text-muted-foreground">{site.phone}</span>
              </span>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card flex items-start gap-4 p-6 hover:border-whatsapp/30"
            >
              <MessageCircle className="mt-0.5 size-5 text-whatsapp" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-navy">WhatsApp</span>
                <span className="block text-sm text-muted-foreground">{site.whatsapp}</span>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="surface-card flex items-start gap-4 p-6 hover:border-brand/30">
              <Mail className="mt-0.5 size-5 text-brand" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-navy">E-posta</span>
                <span className="block text-sm text-muted-foreground">{site.email}</span>
              </span>
            </a>
            <div className="surface-card flex items-start gap-4 p-6">
              <MapPin className="mt-0.5 size-5 text-brand" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-navy">Adres</span>
                <span className="block text-sm text-muted-foreground">{site.address}</span>
              </span>
            </div>
            <div className="surface-card flex items-start gap-4 p-6">
              <Clock className="mt-0.5 size-5 text-brand" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-navy">Çalışma saatleri</span>
                <span className="block text-sm text-muted-foreground">{site.hours}</span>
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-navy">Servis talebi formu</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Formu doldurun, ekibimiz talebinizi değerlendirip sizinle iletişime geçsin.
            </p>
            <div className="mt-6">
              <ServiceRequestForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
