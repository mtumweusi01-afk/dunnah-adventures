import type { Tour } from "./types";

// Prices are indicative "from" figures in EUR, seeded from public 2025/2026
// rate research (SafariBookings, SafariFind, AJ Kenya Safaris, Porini/
// Gamewatchers, Kenya Luxury Safari) — see MEDIA-TODO.md. Replace with the
// owner's real rate card once available.
const tours: Tour[] = [
  {
    slug: "classic-wildlife-safari",
    category: "wildlife",
    image: "/images/destinations/maasai-mara.jpg",
    title: {
      en: "Classic Wildlife Safari",
      cs: "Klasické safari za divokou zvěří",
      pl: "Klasyczne safari z dziką przyrodą",
    },
    summary: {
      en: "Our signature circuit through the Maasai Mara, Lake Nakuru and Amboseli — Kenya's Big Five heartland.",
      cs: "Náš vlajkový okruh přes Masai Mara, jezero Nakuru a Amboseli — srdce keňské „velké pětky“.",
      pl: "Nasza flagowa trasa przez Masajską Marę, jezioro Nakuru i Amboseli — serce kenijskiej Wielkiej Piątki.",
    },
    description: {
      en: "The trip most people picture when they imagine Kenya: open savanna, big cats, vast herds and skies that go on forever. This circuit balances the Mara's density of wildlife with Amboseli's Kilimanjaro views and Nakuru's flamingo-lined lake, with comfortable lodges or tented camps each night.",
      cs: "Cesta, kterou si většina lidí představí, když se řekne Keňa: otevřená savana, velké kočky, obrovská stáda a nekonečné nebe. Tento okruh spojuje bohatství divoké zvěře v Maře s výhledy na Kilimandžáro v Amboseli a jezerem Nakuru lemovaným plameňáky, s pohodlnými lodge nebo stanovými kempy každou noc.",
      pl: "Podróż, którą większość ludzi wyobraża sobie, myśląc o Kenii: otwarta sawanna, wielkie koty, ogromne stada i niekończące się niebo. Ta trasa łączy bogactwo dzikiej przyrody Mary z widokami na Kilimandżaro w Amboseli i jeziorem Nakuru pełnym flamingów, z komfortowymi lodge lub obozami namiotowymi każdej nocy.",
    },
    itinerary: {
      en: [
        "Day 1: Arrive Nairobi, transfer & briefing",
        "Day 2–3: Maasai Mara game drives",
        "Day 4: Transfer to Lake Nakuru, afternoon game drive",
        "Day 5–6: Amboseli National Park, Kilimanjaro views",
        "Day 7: Return to Nairobi, departure",
      ],
      cs: [
        "Den 1: Příjezd do Nairobi, transfer a briefing",
        "Den 2–3: Safari jízdy v Masai Mara",
        "Den 4: Přejezd k jezeru Nakuru, odpolední safari",
        "Den 5–6: Národní park Amboseli, výhledy na Kilimandžáro",
        "Den 7: Návrat do Nairobi, odjezd",
      ],
      pl: [
        "Dzień 1: Przylot do Nairobi, transfer i odprawa",
        "Dzień 2–3: Safari w Masajskiej Marze",
        "Dzień 4: Przejazd nad jezioro Nakuru, popołudniowe safari",
        "Dzień 5–6: Park Narodowy Amboseli, widoki na Kilimandżaro",
        "Dzień 7: Powrót do Nairobi, wylot",
      ],
    },
    durationDays: 7,
    groupSize: "2–12",
    priceFromEUR: 1300,
    priceUnit: "trip",
    destinationSlugs: ["maasai-mara", "lake-nakuru", "amboseli"],
  },
  {
    slug: "safari-and-beach-escape",
    category: "beach",
    image: "/images/destinations/diani-beach.jpg",
    title: {
      en: "Safari & Beach Escape",
      cs: "Safari a pobyt u moře",
      pl: "Safari i wypoczynek nad morzem",
    },
    summary: {
      en: "The best of both worlds: Maasai Mara game drives followed by white-sand relaxation on Diani Beach.",
      cs: "To nejlepší z obou světů: safari jízdy v Masai Mara a poté odpočinek na bílé pláži Diani.",
      pl: "Połączenie obu światów: safari w Masajskiej Marze, a następnie relaks na białej plaży Diani.",
    },
    description: {
      en: "Ten days built for pace and contrast — several days chasing wildlife across the Mara's plains, then a flight down to the coast to unwind on Diani's beaches, with reef snorkelling, dhow cruises and Swahili cuisine to close out the trip.",
      cs: "Deset dní stavěných na kontrastu tempa — několik dní sledování divoké zvěře na pláních Mary, poté let na pobřeží k odpočinku na plážích Diani, se šnorchlováním u útesu, plavbami na dhow lodi a suahilskou kuchyní na závěr cesty.",
      pl: "Dziesięć dni zbudowanych na kontraście tempa — kilka dni tropienia dzikich zwierząt na równinach Mary, a następnie lot na wybrzeże, by odpocząć na plażach Diani, ze snorkelingiem przy rafie, rejsami dhow i suahilską kuchnią na zakończenie podróży.",
    },
    itinerary: {
      en: [
        "Day 1: Arrive Nairobi, transfer & briefing",
        "Day 2–4: Maasai Mara game drives",
        "Day 5: Fly to Diani (coast)",
        "Day 6–9: Beach relaxation, reef snorkelling, dhow cruise",
        "Day 10: Fly to Nairobi, departure",
      ],
      cs: [
        "Den 1: Příjezd do Nairobi, transfer a briefing",
        "Den 2–4: Safari jízdy v Masai Mara",
        "Den 5: Let na pobřeží do Diani",
        "Den 6–9: Odpočinek na pláži, šnorchlování u útesu, plavba na dhow lodi",
        "Den 10: Let do Nairobi, odjezd",
      ],
      pl: [
        "Dzień 1: Przylot do Nairobi, transfer i odprawa",
        "Dzień 2–4: Safari w Masajskiej Marze",
        "Dzień 5: Lot na wybrzeże do Diani",
        "Dzień 6–9: Relaks na plaży, snorkeling przy rafie, rejs dhow",
        "Dzień 10: Lot do Nairobi, wylot",
      ],
    },
    durationDays: 10,
    groupSize: "2–10",
    priceFromEUR: 2140,
    priceUnit: "trip",
    destinationSlugs: ["maasai-mara", "diani-beach"],
  },
  {
    slug: "mount-kenya-trek",
    category: "mountain",
    image: "/images/destinations/mount-kenya.jpg",
    title: {
      en: "Mount Kenya Trek",
      cs: "Trekking na horu Keňa",
      pl: "Trekking na Górę Kenia",
    },
    summary: {
      en: "A non-technical climb to Point Lenana through five climate zones, with fewer crowds than Kilimanjaro.",
      cs: "Netechnický výstup na Point Lenana pěti klimatickými pásmy, s méně turisty než na Kilimandžáru.",
      pl: "Nietechniczna wspinaczka na Point Lenana przez pięć stref klimatycznych, z mniejszym tłokiem niż na Kilimandżaro.",
    },
    description: {
      en: "For travellers who want a genuine physical challenge, this trek follows the Sirimon route up and Chogoria route down, crossing bamboo forest, moorland and alpine desert before reaching Point Lenana at 4,985m — no technical climbing gear required.",
      cs: "Pro cestovatele, kteří hledají skutečnou fyzickou výzvu, tento trek vede po trase Sirimon nahoru a Chogoria dolů, přes bambusový les, vřesoviště a alpskou poušť, než dosáhne Point Lenana ve výšce 4 985 m — bez potřeby technického horolezeckého vybavení.",
      pl: "Dla podróżnych szukających prawdziwego wyzwania fizycznego ten trekking prowadzi trasą Sirimon w górę i Chogoria w dół, przez las bambusowy, wrzosowiska i pustynię alpejską, zanim dotrze do Point Lenana na wysokości 4985 m — bez potrzeby technicznego sprzętu wspinaczkowego.",
    },
    itinerary: {
      en: [
        "Day 1: Nairobi to Sirimon gate, Old Moses Camp",
        "Day 2: Old Moses to Shipton's Camp",
        "Day 3: Summit Point Lenana at sunrise, descend to Chogoria",
        "Day 4: Chogoria descent, forest zone",
        "Day 5: Transfer back to Nairobi",
      ],
      cs: [
        "Den 1: Nairobi k bráně Sirimon, kemp Old Moses",
        "Den 2: Old Moses k Shiptonovu kempu",
        "Den 3: Výstup na Point Lenana za úsvitu, sestup k Chogorii",
        "Den 4: Sestup Chogorií, lesní pásmo",
        "Den 5: Přejezd zpět do Nairobi",
      ],
      pl: [
        "Dzień 1: Nairobi do bramy Sirimon, obóz Old Moses",
        "Dzień 2: Old Moses do obozu Shiptona",
        "Dzień 3: Zdobycie Point Lenana o wschodzie słońca, zejście do Chogorii",
        "Dzień 4: Zejście trasą Chogoria, strefa leśna",
        "Dzień 5: Powrót do Nairobi",
      ],
    },
    durationDays: 5,
    groupSize: "2–8",
    priceFromEUR: 920,
    priceUnit: "trip",
    destinationSlugs: ["mount-kenya"],
  },
  {
    slug: "maasai-culture-immersion",
    category: "cultural",
    image: "/images/destinations/maasai-culture.jpg",
    title: {
      en: "Maasai Culture Immersion",
      cs: "Ponoření do kultury Masajů",
      pl: "Zanurzenie w kulturze Masajów",
    },
    summary: {
      en: "Three days pairing Mara game drives with genuine time in a Maasai community — dance, beadwork and village life.",
      cs: "Tři dny spojující safari v Maře se skutečným časem stráveným v komunitě Masajů — tanec, korálky a život ve vesnici.",
      pl: "Trzy dni łączące safari w Marze z prawdziwym czasem spędzonym w społeczności Masajów — taniec, koraliki i życie wioski.",
    },
    description: {
      en: "A shorter trip focused on connection as much as wildlife: morning and evening game drives in the Mara, with a guided visit to a working manyatta (village) to learn traditions directly from Maasai hosts — arranged respectfully and in partnership with the community.",
      cs: "Kratší cesta zaměřená stejně na propojení s lidmi jako na divokou zvěř: ranní a večerní safari v Maře, s návštěvou fungující manyatty (vesnice) s průvodcem, kde se přímo od hostitelů z řad Masajů dozvíte o jejich tradicích — organizováno s respektem a ve spolupráci s komunitou.",
      pl: "Krótsza podróż skupiona w równym stopniu na relacjach z ludźmi, co na dzikiej przyrodzie: poranne i wieczorne safari w Marze, z wizytą z przewodnikiem w działającej manyatcie (wiosce), by poznać tradycje bezpośrednio od masajskich gospodarzy — zorganizowane z szacunkiem i we współpracy ze społecznością.",
    },
    itinerary: {
      en: [
        "Day 1: Arrive Mara, afternoon game drive",
        "Day 2: Morning game drive, guided Maasai village visit & workshop",
        "Day 3: Sunrise game drive, return to Nairobi",
      ],
      cs: [
        "Den 1: Příjezd do Mary, odpolední safari",
        "Den 2: Ranní safari, návštěva vesnice Masajů s průvodcem a workshop",
        "Den 3: Safari za úsvitu, návrat do Nairobi",
      ],
      pl: [
        "Dzień 1: Przyjazd do Mary, popołudniowe safari",
        "Dzień 2: Poranne safari, wizyta z przewodnikiem w wiosce Masajów i warsztaty",
        "Dzień 3: Safari o wschodzie słońca, powrót do Nairobi",
      ],
    },
    durationDays: 3,
    groupSize: "2–12",
    priceFromEUR: 460,
    priceUnit: "trip",
    destinationSlugs: ["maasai-mara", "maasai-culture"],
  },
  {
    slug: "nakuru-day-trip",
    category: "day-trip",
    image: "/images/destinations/lake-nakuru.jpg",
    title: {
      en: "Lake Nakuru Day Trip",
      cs: "Jednodenní výlet k jezeru Nakuru",
      pl: "Jednodniowa wycieczka nad jezioro Nakuru",
    },
    summary: {
      en: "A full-day escape from Nairobi to see flamingos, rhino and giraffe without an overnight commitment.",
      cs: "Celodenní únik z Nairobi za plameňáky, nosorožci a žirafami bez nutnosti nocování.",
      pl: "Całodniowa wycieczka z Nairobi, by zobaczyć flamingi, nosorożce i żyrafy bez konieczności noclegu.",
    },
    description: {
      en: "Ideal for travellers short on time: an early departure from Nairobi, a full day of game drives around Lake Nakuru's rhino sanctuary and lakeshore, then return in the evening — no overnight bag required.",
      cs: "Ideální pro cestovatele s omezeným časem: brzký odjezd z Nairobi, celodenní safari kolem chráněné oblasti pro nosorožce a břehu jezera Nakuru, poté návrat večer — bez nutnosti balit si věci na noc.",
      pl: "Idealne dla podróżnych z ograniczonym czasem: wczesny wyjazd z Nairobi, całodniowe safari wokół sanktuarium nosorożców i brzegu jeziora Nakuru, a następnie powrót wieczorem — bez konieczności pakowania na nocleg.",
    },
    itinerary: {
      en: [
        "Early morning: depart Nairobi",
        "Mid-morning–afternoon: game drives around Lake Nakuru",
        "Evening: return to Nairobi",
      ],
      cs: [
        "Brzy ráno: odjezd z Nairobi",
        "Dopoledne–odpoledne: safari kolem jezera Nakuru",
        "Večer: návrat do Nairobi",
      ],
      pl: [
        "Wczesny ranek: wyjazd z Nairobi",
        "Późny ranek–popołudnie: safari wokół jeziora Nakuru",
        "Wieczór: powrót do Nairobi",
      ],
    },
    durationDays: 1,
    groupSize: "1–15",
    priceFromEUR: 140,
    priceUnit: "trip",
    destinationSlugs: ["lake-nakuru"],
  },
  {
    slug: "private-honeymoon-safari",
    category: "honeymoon",
    image: "/images/destinations/amboseli.jpg",
    title: {
      en: "Private Honeymoon Safari",
      cs: "Soukromé svatební safari",
      pl: "Prywatne safari poślubne",
    },
    summary: {
      en: "A fully private six-day journey through the Mara, Amboseli and the coast, in premium tented camps and lodges.",
      cs: "Zcela soukromá šestidenní cesta přes Maru, Amboseli a pobřeží, v prémiových stanových kempech a lodge.",
      pl: "W pełni prywatna sześciodniowa podróż przez Marę, Amboseli i wybrzeże, w luksusowych obozach namiotowych i lodge.",
    },
    description: {
      en: "Just the two of you, a private vehicle and guide throughout — premium tented camps in the Mara and Amboseli, sundowner game drives, and a coastal close to the trip on Diani's beaches. Fully customisable to your dates and preferences.",
      cs: "Jen vy dva, soukromé vozidlo a průvodce po celou dobu — prémiové stanové kempy v Maře a Amboseli, safari při západu slunce a závěr cesty na pobřeží plážemi Diani. Plně přizpůsobitelné vašim termínům a preferencím.",
      pl: "Tylko wy dwoje, prywatny pojazd i przewodnik przez cały czas — luksusowe obozy namiotowe w Marze i Amboseli, safari o zachodzie słońca oraz zakończenie podróży na wybrzeżu, na plażach Diani. W pełni dostosowywalne do Waszych terminów i preferencji.",
    },
    itinerary: {
      en: [
        "Day 1–2: Private Maasai Mara tented camp",
        "Day 3–4: Private Amboseli tented camp, Kilimanjaro views",
        "Day 5–6: Diani Beach, private beachfront stay",
      ],
      cs: [
        "Den 1–2: Soukromý stanový kemp v Masai Mara",
        "Den 3–4: Soukromý stanový kemp v Amboseli, výhledy na Kilimandžáro",
        "Den 5–6: Pláž Diani, soukromý pobyt u pláže",
      ],
      pl: [
        "Dzień 1–2: Prywatny obóz namiotowy w Masajskiej Marze",
        "Dzień 3–4: Prywatny obóz namiotowy w Amboseli, widoki na Kilimandżaro",
        "Dzień 5–6: Plaża Diani, prywatny pobyt przy plaży",
      ],
    },
    durationDays: 6,
    groupSize: "2 (private)",
    priceFromEUR: 570,
    priceUnit: "night",
    destinationSlugs: ["maasai-mara", "amboseli", "diani-beach"],
  },
];

export default tours;

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
