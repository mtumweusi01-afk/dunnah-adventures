"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Currency = "EUR" | "USD" | "KES";

export const CURRENCIES: Currency[] = ["EUR", "USD", "KES"];

// Fallback rates (approx, EUR base) used until/unless the live rate fetch
// succeeds — static export has no server to refresh these at build time.
const FALLBACK_RATES: Record<Currency, number> = {
  EUR: 1,
  USD: 1.08,
  KES: 168,
};

const SYMBOLS: Record<Currency, string> = {
  EUR: "€",
  USD: "$",
  KES: "KSh",
};

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  convert: (amountEUR: number) => number;
  format: (amountEUR: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("EUR");
  const [rates, setRates] = useState<Record<Currency, number>>(FALLBACK_RATES);

  useEffect(() => {
    const stored = window.localStorage.getItem("dunnah-currency");
    if (stored === "EUR" || stored === "USD" || stored === "KES") {
      setCurrencyState(stored);
    }

    const controller = new AbortController();
    fetch("https://api.frankfurter.app/latest?from=EUR&to=USD,KES", {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: { rates?: { USD?: number; KES?: number } }) => {
        if (data.rates?.USD && data.rates?.KES) {
          setRates({ EUR: 1, USD: data.rates.USD, KES: data.rates.KES });
        }
      })
      .catch(() => {
        // Live rates unavailable (offline, blocked, etc.) — fallback rates
        // already in state, nothing further to do.
      });

    return () => controller.abort();
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    window.localStorage.setItem("dunnah-currency", c);
  };

  const value = useMemo<CurrencyContextValue>(() => {
    const convert = (amountEUR: number) => amountEUR * rates[currency];
    const format = (amountEUR: number) => {
      const converted = convert(amountEUR);
      const rounded =
        currency === "KES" ? Math.round(converted / 10) * 10 : Math.round(converted);
      return `${SYMBOLS[currency]}${rounded.toLocaleString("en-US")}`;
    };
    return { currency, setCurrency, convert, format };
  }, [currency, rates]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within a CurrencyProvider");
  return ctx;
}
