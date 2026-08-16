export const LOCALES = ["en", "cs", "pl", "sk", "da", "no"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  cs: "CS",
  pl: "PL",
  sk: "SK",
  da: "DA",
  no: "NO",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  cs: "Čeština",
  pl: "Polski",
  sk: "Slovenčina",
  da: "Dansk",
  no: "Norsk",
};

export type Localized = Record<Locale, string>;
