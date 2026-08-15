import type { TourCategory } from "./types";
import type { Locale } from "@/i18n/config";

export const CATEGORY_LABELS: Record<TourCategory, Record<Locale, string>> = {
  wildlife: { en: "Wildlife Safari", cs: "Safari za divokou zvěří", pl: "Safari z dziką przyrodą" },
  beach: { en: "Beach", cs: "Pobyt u moře", pl: "Wypoczynek nad morzem" },
  mountain: { en: "Mountain Trekking", cs: "Horský trekking", pl: "Trekking górski" },
  cultural: { en: "Cultural", cs: "Kulturní", pl: "Kulturowe" },
  "day-trip": { en: "Day Trip", cs: "Jednodenní výlet", pl: "Wycieczka jednodniowa" },
  honeymoon: { en: "Honeymoon / Private", cs: "Svatební cesta / soukromé", pl: "Podróż poślubna / prywatne" },
};
