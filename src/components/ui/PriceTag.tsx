"use client";

import { useCurrency } from "@/lib/currency";

export function PriceTag({
  priceFromEUR,
  unitLabel,
  fromLabel,
  className,
}: {
  priceFromEUR: number;
  unitLabel: string;
  fromLabel: string;
  className?: string;
}) {
  const { format } = useCurrency();
  return (
    <span className={className}>
      <span className="text-text-muted text-sm">{fromLabel} </span>
      <span className="font-semibold text-brand-primary">{format(priceFromEUR)}</span>
      <span className="text-text-muted text-sm"> {unitLabel}</span>
    </span>
  );
}
