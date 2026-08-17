import type { PricingTier } from "./types";

// Indicative bands from public 2025/2026 rate research (SafariBookings,
// SafariFind, AJ Kenya Safaris, Porini/Gamewatchers) — replace with the
// owner's real rate card once available. See MEDIA-TODO.md.
const pricingTiers: PricingTier[] = [
  {
    key: "budget",
    label: {
      en: "Budget / camping",
      cs: "Rozpočtové / kempování",
      pl: "Budżetowe / kempingowe",
      sk: "Rozpočtové / kempovanie",
      da: "Budget / camping",
      no: "Budsjett / camping",
    },
    rangeEUR: "140–260",
    unit: {
      en: "per person / day",
      cs: "za osobu / den",
      pl: "za osobę / dzień",
      sk: "na osobu / deň",
      da: "pr. person / dag",
      no: "per person / dag",
    },
    note: {
      en: "Camping safaris shared with other travellers, mobile crew included.",
      cs: "Skupinové kempová safari se sdíleným týmem.",
      pl: "Grupowe safari kempingowe z mobilną ekipą.",
      sk: "Skupinové kempingové safari s mobilným tímom.",
      da: "Fælles gruppe-campingsafarier med et mobilt team.",
      no: "Felles gruppe-campingsafarier med et mobilt team.",
    },
  },
  {
    key: "mid",
    label: {
      en: "Mid-range lodge",
      cs: "Střední třída / lodge",
      pl: "Standard / lodge",
      sk: "Stredná trieda / lodge",
      da: "Mellemklasse lodge",
      no: "Mellomklasse lodge",
    },
    rangeEUR: "280–460",
    unit: {
      en: "per person / day",
      cs: "za osobu / den",
      pl: "za osobę / dzień",
      sk: "na osobu / deň",
      da: "pr. person / dag",
      no: "per person / dag",
    },
    note: {
      en: "Proper lodges and permanent tented camps, a step up from camping.",
      cs: "Pohodlné lodge a stálé stanové kempy.",
      pl: "Komfortowe lodge i stałe obozy namiotowe.",
      sk: "Pohodlné lodge a stále stanové tábory.",
      da: "Komfortable lodges og permanente teltlejre.",
      no: "Komfortable lodger og permanente teltleirer.",
    },
  },
  {
    key: "luxury",
    label: {
      en: "Luxury tented camp",
      cs: "Luxusní stanový kemp",
      pl: "Luksusowy obóz namiotowy",
      sk: "Luxusný stanový tábor",
      da: "Luksus teltlejr",
      no: "Luksus teltleir",
    },
    rangeEUR: "570–930",
    unit: {
      en: "per person / night",
      cs: "za osobu / noc",
      pl: "za osobę / noc",
      sk: "na osobu / noc",
      da: "pr. person / nat",
      no: "per person / natt",
    },
    note: {
      en: "Top-tier camps with full board and a private guide.",
      cs: "Prémiové kempy s plnou penzí a soukromým průvodcem.",
      pl: "Luksusowe obozy z pełnym wyżywieniem i prywatnym przewodnikiem.",
      sk: "Prémiové tábory s plnou penziou a súkromným sprievodcom.",
      da: "Eksklusive lejre med full-board forplejning og privat guide.",
      no: "Eksklusive leirer med full pensjon og privat guide.",
    },
  },
];

export default pricingTiers;
