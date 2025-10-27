import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "text-center items-center" : "text-left",
        className,
      )}
    >
      <Badge variant="neon" className="uppercase tracking-widest">
        {eyebrow}
      </Badge>
      <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-white/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
