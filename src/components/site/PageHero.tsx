import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy pb-16 pt-10 text-navy-foreground lg:pb-24 lg:pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[var(--gradient-glow)]"
      />
      <div className="container-page relative">
        <Breadcrumbs items={crumbs} tone="dark" />
        <div className="mt-8 max-w-3xl">
          {eyebrow ? (
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-3 text-[2rem] font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
