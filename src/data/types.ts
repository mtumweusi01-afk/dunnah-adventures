import type { Locale } from "@/i18n/config";

export type Localized = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type TourCategory =
  | "wildlife"
  | "beach"
  | "mountain"
  | "cultural"
  | "day-trip"
  | "honeymoon";

export type Tour = {
  slug: string;
  category: TourCategory;
  image: string;
  title: Localized;
  summary: Localized;
  description: Localized;
  itinerary: LocalizedList;
  durationDays: number;
  groupSize: string;
  priceFromEUR: number;
  priceUnit: "day" | "night" | "trip";
  destinationSlugs: string[];
};

export type Destination = {
  slug: string;
  image: string;
  title: Localized;
  summary: Localized;
  highlights: LocalizedList;
  bestTime: Localized;
};

export type BlogPost = {
  slug: string;
  image: string;
  title: Localized;
  excerpt: Localized;
  body: LocalizedList; // paragraphs
};

export type PricingTier = {
  key: "budget" | "mid" | "luxury";
  label: Localized;
  rangeEUR: string;
  unit: Localized;
  note: Localized;
};
