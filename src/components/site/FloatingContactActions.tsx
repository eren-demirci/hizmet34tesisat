import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

/** Discreet mobile-only contact bar. Hidden on desktop where header CTAs are visible. */
export function FloatingContactActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
      <div className="container-page grid grid-cols-2 gap-2 py-2.5">
        <a
          href={site.phoneHref}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-navy text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-soft"
        >
          <Phone className="size-4" aria-hidden="true" />
          Telefon
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card text-sm font-semibold text-foreground transition-colors hover:border-whatsapp/40 hover:text-whatsapp"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
