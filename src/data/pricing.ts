import type { PricingTier } from "./types";

// Indicative bands from public 2025/2026 rate research (SafariBookings,
// SafariFind, AJ Kenya Safaris, Porini/Gamewatchers) — replace with the
// owner's real rate card once available. See MEDIA-TODO.md.
const pricingTiers: PricingTier[] = [
  {
    key: "budget",
    label: { en: "Budget / camping", cs: "Rozpočtové / kempování", pl: "Budżetowe / kempingowe" },
    rangeEUR: "140–260",
    unit: { en: "per person / day", cs: "za osobu / den", pl: "za osobę / dzień" },
    note: {
      en: "Shared group camping safaris with a mobile crew.",
      cs: "Skupinové kempová safari se sdíleným týmem.",
      pl: "Grupowe safari kempingowe z mobilną ekipą.",
    },
  },
  {
    key: "mid",
    label: { en: "Mid-range lodge", cs: "Střední třída / lodge", pl: "Standard / lodge" },
    rangeEUR: "280–460",
    unit: { en: "per person / day", cs: "za osobu / den", pl: "za osobę / dzień" },
    note: {
      en: "Comfortable lodges and permanent tented camps.",
      cs: "Pohodlné lodge a stálé stanové kempy.",
      pl: "Komfortowe lodge i stałe obozy namiotowe.",
    },
  },
  {
    key: "luxury",
    label: { en: "Luxury tented camp", cs: "Luxusní stanový kemp", pl: "Luksusowy obóz namiotowy" },
    rangeEUR: "570–930",
    unit: { en: "per person / night", cs: "za osobu / noc", pl: "za osobę / noc" },
    note: {
      en: "Premium camps with full-board dining and private guiding.",
      cs: "Prémiové kempy s plnou penzí a soukromým průvodcem.",
      pl: "Luksusowe obozy z pełnym wyżywieniem i prywatnym przewodnikiem.",
    },
  },
];

export default pricingTiers;
