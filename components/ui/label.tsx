import * as React from "react";
import { cn } from "@/lib/utils";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("mb-2 text-sm font-medium text-white/80", className)}
      {...props}
    />
  ),
);
Label.displayName = "Label";

export { Label };
