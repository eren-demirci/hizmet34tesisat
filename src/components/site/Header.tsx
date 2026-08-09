import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Hizmetlerimiz", to: "/hizmetler" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "Nasıl Çalışıyoruz?", to: "/nasil-calisiyoruz" },
  { label: "Sık Sorulan Sorular", to: "/sik-sorulan-sorular" },
  { label: "İletişim", to: "/iletisim" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl shadow-[var(--shadow-soft)]"
          : "border-transparent bg-background",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} ana sayfa`}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-navy text-navy-foreground">
            <Droplet className="size-4.5 text-cyan" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-navy">Hizmet34</span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Tesisat
            </span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
              activeProps={{ className: "text-navy bg-secondary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="softOutline" size="default">
            <a href={site.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              Bizi Arayın
            </a>
          </Button>
          <Button asChild variant="brand">
            <Link to="/servis-talebi">Servis Talebi Oluştur</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          className="flex size-11 items-center justify-center rounded-xl border border-border text-navy transition-colors hover:bg-secondary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobil menü" className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-3 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
                activeProps={{ className: "text-navy bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2">
              <Button asChild variant="brand" size="lg">
                <Link to="/servis-talebi">Servis Talebi Oluştur</Link>
              </Button>
              <Button asChild variant="softOutline" size="lg">
                <a href={site.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Bizi Arayın
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
