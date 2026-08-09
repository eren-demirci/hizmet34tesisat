import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Tesisat Probleminizi Büyümeden Çözelim.",
  text = "Su kaçağı, tıkanıklık veya tesisat arızası için Hizmet34 Tesisat ekibiyle iletişime geçin.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-gradient-navy px-6 py-14 text-center text-navy-foreground sm:px-12 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[var(--gradient-glow)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-[1.12] sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
              {text}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="brand" size="xl">
                <Link to="/servis-talebi">Servis Talebi Oluştur</Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <a href={site.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Hemen Ara
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
