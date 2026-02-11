import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

export const ToggleGroup = React.forwardRef(function ToggleGroup(
  { className = "", ...props },
  ref
) {
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      {...props}
      className={`inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/60 p-1 ${className}`}
    />
  );
});

export const ToggleGroupItem = React.forwardRef(function ToggleGroupItem(
  { className = "", ...props },
  ref
) {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      {...props}
      className={
        "px-3 py-1.5 rounded-full text-xs font-medium text-zinc-200 " +
        "hover:bg-zinc-800 data-[state=on]:bg-white data-[state=on]:text-black " +
        "data-[state=on]:shadow-[0_0_20px_rgba(255,255,255,0.35)] " +
        "transition-colors " +
        className
      }
    />
  );
});


