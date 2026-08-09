import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
  as: Tag = "h2",
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-block text-xs font-bold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-cyan" : "text-brand",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <Tag
        className={cn(
          "mt-3 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-navy-foreground" : "text-navy",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
