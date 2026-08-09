import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import leakImage from "@/assets/leak-detection.jpg";

const points = [
  "Akustik dinleme sistemleri",
  "Termal görüntüleme",
  "Nem ölçümü",
  "Noktasal arıza tespiti",
  "Minimum kırma işlemi",
];

export function FeatureSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-card)]">
            <img
              src={leakImage}
              alt="Termal görüntüleme cihazı duvardaki gizli su kaçağını ısı farkıyla gösteriyor"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={80}>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Cihazla Su Kaçağı Tespiti
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.12] text-navy sm:text-4xl lg:text-[2.6rem]">
            Kaçağı Bulmak İçin Evinizi Kırıp Dökmeye Gerek Yok.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Geleneksel yöntemlerde su kaçağının yerini bulmak için geniş alanlarda kırma işlemi
            yapılabilir. Modern kaçak tespit cihazları sayesinde problemin bulunduğu bölgeyi daha
            doğru şekilde belirleyerek gereksiz müdahalelerin önüne geçiyoruz.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-3 text-sm font-medium text-navy"
              >
                <Check className="size-4 shrink-0 text-brand" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>

          <Button asChild variant="brand" size="lg" className="mt-8">
            <Link to="/servis-talebi" search={{ hizmet: "su-kacagi-tespiti" }}>
              Su Kaçağı İçin Servis Talebi
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
