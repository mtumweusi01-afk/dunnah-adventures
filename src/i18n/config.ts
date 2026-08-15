export const LOCALES = ["en", "cs", "pl"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  cs: "CS",
  pl: "PL",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  cs: "Čeština",
  pl: "Polski",
};

export type Localized = Record<Locale, string>;
