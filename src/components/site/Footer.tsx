import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, services } from "@/data/site";

const footerServices = services.filter((s) =>
  [
    "su-kacagi-tespiti",
    "tikaniklik-acma",
    "kamerali-gider-goruntuleme",
    "su-tesisati-tamiri",
    "tesisat-yenileme",
    "kombi-petek-temizligi",
  ].includes(s.slug),
);

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Link
            to="/"
            aria-label={`${site.name} ana sayfa`}
            className="inline-flex rounded-xl bg-white px-3 py-2 shadow-sm transition-opacity hover:opacity-95"
          >
            <img src="/logo.svg" alt={site.name} className="h-12 w-auto object-contain" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/65">
            Su kaçağı tespiti, tıkanıklık açma ve tesisat onarımında cihaz destekli çalışan
            profesyonel teknik servis ekibi. Sorunun kaynağını doğru tespit ediyor, minimum
            müdahaleyle çözüyoruz.
          </p>
        </div>

        <nav aria-label="Hizmetlerimiz">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-cyan">Hizmetlerimiz</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/hizmetler/$slug"
                  params={{ slug: s.slug }}
                  className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Kurumsal">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-cyan">Kurumsal</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/hakkimizda" className="text-navy-foreground/70 transition-colors hover:text-navy-foreground">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/hizmet-bolgeleri" className="text-navy-foreground/70 transition-colors hover:text-navy-foreground">
                Hizmet Bölgeleri
              </Link>
            </li>
            <li>
              <Link to="/nasil-calisiyoruz" className="text-navy-foreground/70 transition-colors hover:text-navy-foreground">
                Nasıl Çalışıyoruz?
              </Link>
            </li>
            <li>
              <Link to="/rehber" className="text-navy-foreground/70 transition-colors hover:text-navy-foreground">
                Tesisat Rehberi
              </Link>
            </li>
            <li>
              <Link to="/sik-sorulan-sorular" className="text-navy-foreground/70 transition-colors hover:text-navy-foreground">
                Sık Sorulan Sorular
              </Link>
            </li>
            <li>
              <Link to="/iletisim" className="text-navy-foreground/70 transition-colors hover:text-navy-foreground">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-cyan">İletişim</h2>
          <ul className="mt-5 space-y-4 text-sm text-navy-foreground/70">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <span className="flex flex-col gap-1">
                {site.phoneNumbers.map((phone) => (
                  <a key={phone.href} href={phone.href} className="transition-colors hover:text-navy-foreground">
                    {phone.label}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-navy-foreground"
              >
                WhatsApp ile yazın
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-navy-foreground">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-navy-foreground/55 sm:flex-row">
          <p>
            © 2026 Hizmet34 Tesisat. Tüm hakları saklıdır.{" "}
            <a
              href="https://lapdijital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-navy-foreground"
            >
              Lap Dijital tarafından yapılmıştır.
            </a>
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            <li>
              <Link to="/kvkk" className="transition-colors hover:text-navy-foreground">
                KVKK
              </Link>
            </li>
            <li>
              <Link to="/gizlilik-politikasi" className="transition-colors hover:text-navy-foreground">
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link to="/cerez-politikasi" className="transition-colors hover:text-navy-foreground">
                Çerez Politikası
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
