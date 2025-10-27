import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "neon";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide";

    const variants = {
      default: "border-accent/30 bg-accent/10 text-accent",
      outline: "border-white/20 text-white/70",
      neon: "border-neon/40 bg-neon/10 text-neon",
    } as const;

    return (
      <span
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";
