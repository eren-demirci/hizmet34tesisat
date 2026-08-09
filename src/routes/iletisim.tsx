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
            <div className="surface-card flex items-start gap-4 p-6">
              <Phone className="mt-0.5 size-5 text-brand" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-navy">Telefon</span>
                <span className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground">
                  {site.phoneNumbers.map((phone) => (
                    <a key={phone.href} href={phone.href} className="transition-colors hover:text-brand">
                      {phone.label}
                    </a>
                  ))}
                </span>
              </span>
            </div>
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

        <div className="container-page mt-10 lg:mt-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center gap-3 border-b border-border px-6 py-5">
              <MapPin className="size-5 text-brand" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-extrabold text-navy">Konumumuz</h2>
                <p className="mt-0.5 text-sm text-muted-foreground">{site.address}</p>
              </div>
            </div>
            <iframe
              title="Hizmet34 Tesisat konumu"
              src="https://www.google.com/maps?q=G%C3%BCne%C5%9Ftepe+Mahallesi,+Ba%C5%9Faran+Sokak+No:+6,+G%C3%BCng%C3%B6ren,+%C4%B0stanbul&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
