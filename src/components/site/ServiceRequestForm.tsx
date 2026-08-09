import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { districts, services } from "@/data/site";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "phone" | "service" | "district" | "message", string>>;

export function ServiceRequestForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const district = String(data.get("district") ?? "");
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 3) next.name = "Lütfen ad ve soyadınızı yazın.";
    if (!/^[0-9 ()+-]{10,20}$/.test(phone)) next.phone = "Geçerli bir telefon numarası girin.";
    if (!service) next.service = "Hizmet türü seçin.";
    if (!district) next.district = "İlçe seçin.";
    if (message.length < 10) next.message = "Sorunu birkaç cümleyle açıklayın.";
    return next;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="surface-card p-8 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent text-brand">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-extrabold text-navy">Talebiniz alındı</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Servis talebiniz ekibimize iletildi. En kısa sürede sizinle iletişime geçeceğiz. Acil
          durumlarda telefon veya WhatsApp üzerinden de bize ulaşabilirsiniz.
        </p>
        <Button variant="softOutline" className="mt-6" onClick={() => setStatus("idle")}>
          Yeni talep oluştur
        </Button>
      </div>
    );
  }

  const fieldClass = (hasError?: string) =>
    cn("mt-2", hasError && "border-destructive focus-visible:ring-destructive");

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Ad Soyad</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Adınız ve soyadınız"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(errors.name)}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="05xx xxx xx xx"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass(errors.phone)}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="service">Hizmet Türü</Label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService}
            aria-invalid={!!errors.service}
            className={cn(
              "mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              errors.service && "border-destructive",
            )}
          >
            <option value="">Seçiniz</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="diger">Diğer</option>
          </select>
          {errors.service ? (
            <p className="mt-1.5 text-xs font-medium text-destructive">{errors.service}</p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="district">İlçe</Label>
          <select
            id="district"
            name="district"
            defaultValue=""
            aria-invalid={!!errors.district}
            className={cn(
              "mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              errors.district && "border-destructive",
            )}
          >
            <option value="">Seçiniz</option>
            {districts.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
            <option value="diger">Diğer</option>
          </select>
          {errors.district ? (
            <p className="mt-1.5 text-xs font-medium text-destructive">{errors.district}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="address">Adres</Label>
          <Input
            id="address"
            name="address"
            autoComplete="street-address"
            placeholder="Mahalle, cadde, bina ve daire bilgisi"
            className="mt-2"
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message">Sorun Açıklaması</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Problemi kısaca anlatın: ne zaman başladı, hangi noktada görülüyor?"
            aria-invalid={!!errors.message}
            className={fieldClass(errors.message)}
          />
          {errors.message ? (
            <p className="mt-1.5 text-xs font-medium text-destructive">{errors.message}</p>
          ) : null}
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          Talebiniz gönderilemedi. Lütfen tekrar deneyin veya telefonla ulaşın.
        </p>
      ) : null}

      <Button type="submit" variant="brand" size="lg" className="mt-7 w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Gönderiliyor…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Servis Talebini Gönder
          </>
        )}
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Formu göndererek iletişim bilgilerinizin talebinizin değerlendirilmesi amacıyla
        işlenmesini kabul etmiş olursunuz.
      </p>
    </form>
  );
}
