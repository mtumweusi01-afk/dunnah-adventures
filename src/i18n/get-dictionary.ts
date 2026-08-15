import type { Locale } from "./config";
import type { Dictionary } from "./dictionary-type";
import en from "./dictionaries/en";
import cs from "./dictionaries/cs";
import pl from "./dictionaries/pl";

const dictionaries: Record<Locale, Dictionary> = { en, cs, pl };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
