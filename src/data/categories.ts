import type { TourCategory } from "./types";
import type { Locale } from "@/i18n/config";

export const CATEGORY_LABELS: Record<TourCategory, Record<Locale, string>> = {
  wildlife: {
    en: "Wildlife Safari",
    cs: "Safari s divokou zvěří",
    pl: "Safari z dziką przyrodą",
    sk: "Safari s divokou zverou",
    da: "Vildtsafari",
    no: "Viltsafari",
  },
  beach: {
    en: "Beach",
    cs: "Pobyt u moře",
    pl: "Wypoczynek nad morzem",
    sk: "Pobyt pri mori",
    da: "Strandferie",
    no: "Strandferie",
  },
  mountain: {
    en: "Mountain Trekking",
    cs: "Horský trekking",
    pl: "Trekking górski",
    sk: "Horský trekking",
    da: "Bjergvandring",
    no: "Fjellvandring",
  },
  cultural: {
    en: "Cultural",
    cs: "Kulturní",
    pl: "Kulturowe",
    sk: "Kultúrne",
    da: "Kulturel",
    no: "Kulturell",
  },
  "day-trip": {
    en: "Day Trip",
    cs: "Jednodenní výlet",
    pl: "Wycieczka jednodniowa",
    sk: "Jednodňový výlet",
    da: "Dagstur",
    no: "Dagstur",
  },
  honeymoon: {
    en: "Honeymoon / Private",
    cs: "Svatební cesta / soukromé",
    pl: "Podróż poślubna / prywatne",
    sk: "Svadobná cesta / súkromné",
    da: "Bryllupsrejse / privat",
    no: "Bryllupsreise / privat",
  },
};
