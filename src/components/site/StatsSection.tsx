import { Reveal } from "./Reveal";

const stats = [
  { value: "Profesyonel", label: "Teknik Ekip" },
  { value: "Hızlı", label: "Servis Desteği" },
  { value: "Modern", label: "Tespit Ekipmanları" },
  { value: "Temiz", label: "İşçilik" },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 text-navy-foreground lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[var(--gradient-glow)]"
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
            Neden Hizmet34
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
            Neden Hizmet34 Tesisat?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
            Tesisat problemlerinde yalnızca görünen sorunu değil, problemin kaynağını bulmaya
            odaklanıyoruz.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 80}
              className="rounded-2xl border border-navy-foreground/12 bg-navy-foreground/6 p-6 backdrop-blur transition-colors hover:border-cyan/40 hover:bg-navy-foreground/10"
            >
              <p className="text-2xl font-extrabold tracking-tight text-cyan sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-navy-foreground/75">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
