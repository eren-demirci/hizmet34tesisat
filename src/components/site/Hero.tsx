import { Link } from "@tanstack/react-router";
import { Check, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import heroImage from "@/assets/hero-technician.jpg";

const trust = ["Profesyonel Ekip", "Cihazla Tespit", "Hızlı Müdahale", "Garantili İşçilik"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 size-[36rem] rounded-full bg-[var(--gradient-glow)] blur-2xl"
      />
      <div className="container-page relative grid items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="animate-reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Profesyonel Tesisat Hizmetleri
          </span>

          <h1 className="mt-6 text-[2.15rem] font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-[3.6rem]">
            Tesisat Sorunlarını <span className="text-gradient-brand">Kırmadan</span>, Hızlı ve
            Profesyonel Çözüyoruz.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Su kaçağından tıkanıklık açmaya, tesisat onarımından cihazla kaçak tespitine kadar tüm
            tesisat ihtiyaçlarınız için profesyonel çözümler sunuyoruz.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <Link to="/servis-talebi">Servis Talebi Oluştur</Link>
            </Button>
            <Button asChild variant="softOutline" size="xl">
              <a href={site.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Hemen Ara
              </a>
            </Button>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:max-w-lg">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-navy">
                <Check className="size-4 shrink-0 text-brand" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-reveal [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-card)]">
            <img
              src={heroImage}
              alt="Hizmet34 Tesisat teknisyeni banyo duvarında akustik cihazla su kaçağı tespiti yapıyor"
              width={1280}
              height={1600}
              fetchPriority="high"
              className="aspect-4/5 w-full object-cover sm:aspect-3/4 lg:aspect-4/5"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-navy/55 via-transparent to-transparent"
            />
          </div>

          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:left-6 sm:right-auto sm:max-w-xs">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Cihazla Tespit
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Akustik dinleme, termal görüntüleme ve nem ölçümüyle kaçağın kaynağını noktasal olarak
              belirliyoruz.
            </p>
          </div>
        </div>
      </div>
      <div className="h-8 lg:h-4" />
    </section>
  );
}
