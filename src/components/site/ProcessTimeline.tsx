import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    no: "01",
    title: "Bize Ulaşın",
    text: "Telefon, WhatsApp veya servis formu üzerinden probleminizi iletin.",
  },
  {
    no: "02",
    title: "Problemi Değerlendirelim",
    text: "Ekibimiz arızanın türünü değerlendirerek gerekli ekipmanla yönlendirme sağlar.",
  },
  {
    no: "03",
    title: "Tespit ve Müdahale",
    text: "Problemin kaynağını tespit ederek gerekli işlemleri uygulayalım.",
  },
  {
    no: "04",
    title: "Kontrol ve Teslim",
    text: "Yapılan işlemleri kontrol ederek sistemi kullanıma hazır şekilde teslim edelim.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Nasıl Çalışıyoruz?"
          title="Sorununuzu 4 Adımda Çözüyoruz"
          description="Talep alındığı andan teslime kadar süreç şeffaf ilerler; her adımda ne yapıldığını bilirsiniz."
        />

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-[1.375rem] top-3 bottom-3 w-px bg-border lg:left-0 lg:right-0 lg:top-[1.375rem] lg:bottom-auto lg:h-px lg:w-full"
          />
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.no}
              delay={i * 90}
              className="relative flex gap-5 lg:flex-col lg:gap-0"
            >
              <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-extrabold text-brand shadow-[var(--shadow-soft)]">
                {step.no}
              </span>
              <div className="lg:mt-6 lg:pr-6">
                <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
