import * as React from "react";

export function Badge({ className = "", children }) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border " +
        "border-zinc-700 bg-zinc-900/60 text-zinc-200 " +
        "hover:border-zinc-500 transition-colors " +
        className
      }
    >
      {children}
    </span>
  );
}


