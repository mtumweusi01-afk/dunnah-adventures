import type { Locale } from "./config";
import type { Dictionary } from "./dictionary-type";
import en from "./dictionaries/en";
import cs from "./dictionaries/cs";
import pl from "./dictionaries/pl";
import sk from "./dictionaries/sk";
import da from "./dictionaries/da";
import no from "./dictionaries/no";

const dictionaries: Record<Locale, Dictionary> = { en, cs, pl, sk, da, no };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
