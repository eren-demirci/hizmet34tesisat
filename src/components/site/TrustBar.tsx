import { Gauge, Users, Cpu, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Gauge, title: "Hızlı Müdahale", text: "Talebinize en kısa sürede dönüş." },
  { icon: Users, title: "Profesyonel Ekip", text: "Deneyimli teknik personel." },
  { icon: Cpu, title: "Modern Ekipman", text: "Gelişmiş cihazlarla doğru tespit." },
  { icon: Sparkles, title: "Temiz İşçilik", text: "Minimum müdahale, maksimum çözüm." },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-brand">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-navy">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
