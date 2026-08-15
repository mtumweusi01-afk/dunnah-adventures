"use client";

import { CURRENCIES, useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1 text-xs font-semibold">
      {CURRENCIES.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCurrency(c)}
          aria-current={c === currency}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            c === currency
              ? "bg-brand-accent text-brand-accent-foreground"
              : "text-text-secondary hover:bg-surface-muted"
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
