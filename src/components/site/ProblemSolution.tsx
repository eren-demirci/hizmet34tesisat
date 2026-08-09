import { useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Radar } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "nem",
    label: "Duvarda nem",
    problem: "Duvarınızda nem, rutubet veya beklenmedik su tüketimi mi var?",
    detail: "Boyada kabarma ve küf lekesi çoğu zaman gizli bir sızıntının ilk göstergesidir.",
    solution:
      "Profesyonel ekipmanlarla arızanın kaynağını tespit ederek gerekli müdahaleyi gerçekleştiriyoruz.",
    method: "Nem ölçümü + termal görüntüleme",
  },
  {
    id: "sayac",
    label: "Dönen sayaç",
    problem: "Su kullanmadığınız hâlde sayaç dönmeye devam mı ediyor?",
    detail: "Bu durum basınçlı hatta kayıp olduğunu gösterir ve fatura üzerinde hızla hissedilir.",
    solution:
      "Hatları ayrı ayrı basınç testine alarak kaybın hangi hattan kaynaklandığını belirliyoruz.",
    method: "Basınç testi + akustik dinleme",
  },
  {
    id: "gider",
    label: "Tekrarlayan tıkanıklık",
    problem: "Gideriniz açıldıktan kısa süre sonra yeniden mi tıkanıyor?",
    detail: "Tekrar eden tıkanıklıklar genellikle hattaki yapısal bir sorunun işaretidir.",
    solution:
      "Hattı kamerayla görüntüleyerek çökme, kırık veya ters eğim olup olmadığını netleştiriyoruz.",
    method: "Kameralı gider görüntüleme",
  },
];

export function ProblemSolution() {
  const [active, setActive] = useState(tabs[0]!.id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0]!;


  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Problem → Çözüm
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.12] text-navy sm:text-4xl">
            Belirtiden Çözüme Giden Yolu Birlikte Takip Edelim
          </h2>
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2" role="tablist" aria-label="Yaygın tesisat problemleri">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                active === tab.id
                  ? "border-brand bg-brand text-brand-foreground shadow-[var(--shadow-soft)]"
                  : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-brand",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="surface-card border-destructive/20 bg-destructive/4 p-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-destructive">
              <AlertTriangle className="size-4" aria-hidden="true" />
              Problem
            </span>
            <p className="mt-4 text-lg font-bold leading-snug text-navy">{current.problem}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{current.detail}</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 px-2 py-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-[var(--shadow-lift)]">
                <Radar className="size-6" aria-hidden="true" />
              </span>
              <span className="text-center text-xs font-semibold text-muted-foreground">
                {current.method}
              </span>
              <ArrowRight className="size-4 rotate-90 text-brand lg:rotate-0" aria-hidden="true" />
            </div>
          </div>

          <div className="surface-card border-brand/20 bg-accent/50 p-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              Çözüm
            </span>
            <p className="mt-4 text-lg font-bold leading-snug text-navy">{current.solution}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              İşlem öncesinde yapılacaklar, süresi ve kapsamı hakkında bilgi veriyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
