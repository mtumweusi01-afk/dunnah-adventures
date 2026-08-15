import type { Destination } from "./types";

const destinations: Destination[] = [
  {
    slug: "maasai-mara",
    image: "/images/destinations/maasai-mara.jpg",
    title: { en: "Maasai Mara", cs: "Masai Mara", pl: "Masajska Mara" },
    summary: {
      en: "Kenya's most famous reserve — endless plains, big cats and the Great Migration.",
      cs: "Nejslavnější keňská rezervace — nekonečné pláně, velké kočky a Velká migrace.",
      pl: "Najsłynniejszy kenijski rezerwat — bezkresne równiny, wielkie koty i Wielka Migracja.",
    },
    highlights: {
      en: [
        "Great Wildebeest Migration (Jul–Oct)",
        "Dense lion and cheetah populations",
        "Hot air balloon safaris at sunrise",
        "Maasai community visits nearby",
      ],
      cs: [
        "Velká migrace pakoňů (červenec–říjen)",
        "Vysoká hustota lvů a gepardů",
        "Let balónem za úsvitu",
        "Návštěvy komunity Masajů v okolí",
      ],
      pl: [
        "Wielka Migracja Antylop Gnu (lipiec–październik)",
        "Duża populacja lwów i gepardów",
        "Loty balonem o wschodzie słońca",
        "Wizyty w pobliskich wioskach Masajów",
      ],
    },
    bestTime: {
      en: "July–October for the migration; good game viewing year-round.",
      cs: "Červenec–říjen kvůli migraci; dobré pozorování zvěře po celý rok.",
      pl: "Lipiec–październik ze względu na migrację; dobre warunki do obserwacji zwierząt cały rok.",
    },
  },
  {
    slug: "amboseli",
    image: "/images/destinations/amboseli.jpg",
    title: { en: "Amboseli National Park", cs: "Národní park Amboseli", pl: "Park Narodowy Amboseli" },
    summary: {
      en: "Free-ranging elephant herds framed by the snow-capped peak of Kilimanjaro.",
      cs: "Volně žijící stáda slonů na pozadí zasněženého vrcholu Kilimandžára.",
      pl: "Swobodnie wędrujące stada słoni na tle ośnieżonego szczytu Kilimandżaro.",
    },
    highlights: {
      en: [
        "Iconic Kilimanjaro backdrop views",
        "Large elephant herds up close",
        "Swamp ecosystems with rich birdlife",
        "Maasai cultural encounters",
      ],
      cs: [
        "Ikonické výhledy na Kilimandžáro",
        "Velká stáda slonů zblízka",
        "Bažinaté ekosystémy s bohatým ptactvem",
        "Setkání s kulturou Masajů",
      ],
      pl: [
        "Kultowe widoki na Kilimandżaro",
        "Duże stada słoni z bliska",
        "Ekosystemy bagienne z bogatą awifauną",
        "Spotkania z kulturą Masajów",
      ],
    },
    bestTime: {
      en: "June–October and January–February for clearest Kilimanjaro views.",
      cs: "Červen–říjen a leden–únor pro nejjasnější výhledy na Kilimandžáro.",
      pl: "Czerwiec–październik oraz styczeń–luty dla najlepszej widoczności Kilimandżaro.",
    },
  },
  {
    slug: "tsavo",
    image: "/images/destinations/tsavo.jpg",
    title: { en: "Tsavo East & West", cs: "Tsavo Východ a Západ", pl: "Tsavo Wschodnie i Zachodnie" },
    summary: {
      en: "Kenya's largest park system, famous for red-dust elephants and rugged wilderness.",
      cs: "Největší keňský park, proslulý slony zbarvenými do červena a drsnou divočinou.",
      pl: "Największy system parków w Kenii, słynący ze słoni pokrytych czerwonym pyłem i dzikiej przyrody.",
    },
    highlights: {
      en: [
        "\"Red elephants\" dusted by iron-rich soil",
        "Mzima Springs' hippos and crystal water",
        "Vast, less-crowded wilderness",
        "Lugard Falls and the Galana River",
      ],
      cs: [
        "„Červení sloni“ pokrytí prachem bohatým na železo",
        "Prameny Mzima s hrochy a křišťálovou vodou",
        "Rozlehlá, méně navštěvovaná divočina",
        "Vodopády Lugard a řeka Galana",
      ],
      pl: [
        "„Czerwone słonie” pokryte pyłem bogatym w żelazo",
        "Źródła Mzima z hipopotamami i krystaliczną wodą",
        "Rozległa, mniej zatłoczona dzicz",
        "Wodospady Lugard i rzeka Galana",
      ],
    },
    bestTime: {
      en: "June–October (dry season) for the best game viewing.",
      cs: "Červen–říjen (období sucha) pro nejlepší pozorování zvěře.",
      pl: "Czerwiec–październik (pora sucha) dla najlepszych obserwacji zwierząt.",
    },
  },
  {
    slug: "lake-nakuru",
    image: "/images/destinations/lake-nakuru.jpg",
    title: { en: "Lake Nakuru", cs: "Jezero Nakuru", pl: "Jezioro Nakuru" },
    summary: {
      en: "A soda lake famous for flamingo flocks and a dedicated rhino sanctuary.",
      cs: "Sodné jezero proslulé hejny plameňáků a chráněnou oblastí pro nosorožce.",
      pl: "Jezioro sodowe słynące ze stad flamingów i dedykowanego sanktuarium nosorożców.",
    },
    highlights: {
      en: [
        "Flamingo flocks (seasonal, varies with water levels)",
        "Black and white rhino sanctuary",
        "Rothschild's giraffe population",
        "Compact park, easy day trips",
      ],
      cs: [
        "Hejna plameňáků (sezónní, závisí na hladině vody)",
        "Chráněná oblast pro černé a bílé nosorožce",
        "Populace žirafy Rothschildovy",
        "Kompaktní park, snadné jednodenní výlety",
      ],
      pl: [
        "Stada flamingów (sezonowo, w zależności od poziomu wody)",
        "Sanktuarium nosorożców czarnych i białych",
        "Populacja żyrafy Rothschilda",
        "Kompaktowy park, łatwe wycieczki jednodniowe",
      ],
    },
    bestTime: {
      en: "Year-round; flamingo numbers vary with lake water levels.",
      cs: "Po celý rok; počet plameňáků se liší podle hladiny vody v jezeře.",
      pl: "Cały rok; liczba flamingów zależy od poziomu wody w jeziorze.",
    },
  },
  {
    slug: "diani-beach",
    image: "/images/destinations/diani-beach.jpg",
    title: { en: "Diani Beach", cs: "Pláž Diani", pl: "Plaża Diani" },
    summary: {
      en: "Powder-white sand and turquoise water on Kenya's south coast — the classic safari-and-beach finish.",
      cs: "Bílý jemný písek a tyrkysové moře na jižním pobřeží Keni — klasické zakončení safari u moře.",
      pl: "Biały, drobny piasek i turkusowa woda na południowym wybrzeżu Kenii — klasyczne zakończenie safari nad morzem.",
    },
    highlights: {
      en: [
        "Coral reef snorkelling and diving",
        "Dhow sunset cruises",
        "Swahili coastal cuisine",
        "Colobus monkey conservation area",
      ],
      cs: [
        "Šnorchlování a potápění u korálového útesu",
        "Plavby na dhow lodi při západu slunce",
        "Suahilská pobřežní kuchyně",
        "Chráněná oblast pro kolobusy",
      ],
      pl: [
        "Snorkeling i nurkowanie przy rafie koralowej",
        "Rejsy dhow o zachodzie słońca",
        "Suahilska kuchnia wybrzeża",
        "Obszar ochrony gereza kenijskiego (colobus)",
      ],
    },
    bestTime: {
      en: "December–March and July–October for the driest, sunniest weather.",
      cs: "Prosinec–březen a červenec–říjen pro nejsušší a nejslunečnější počasí.",
      pl: "Grudzień–marzec oraz lipiec–październik dla najsuchszej i najbardziej słonecznej pogody.",
    },
  },
  {
    slug: "mount-kenya",
    image: "/images/destinations/mount-kenya.jpg",
    title: { en: "Mount Kenya", cs: "Hora Keňa", pl: "Góra Kenia" },
    summary: {
      en: "Africa's second-highest peak — glacier-carved trails through five distinct climate zones.",
      cs: "Druhá nejvyšší hora Afriky — ledovcem tvarované stezky pěti odlišnými klimatickými pásmy.",
      pl: "Drugi najwyższy szczyt Afryki — wyrzeźbione przez lodowiec szlaki przez pięć odrębnych stref klimatycznych.",
    },
    highlights: {
      en: [
        "Point Lenana summit trek (non-technical)",
        "Sirimon, Naro Moru and Chogoria routes",
        "Alpine lakes and unique giant flora",
        "Fewer crowds than Kilimanjaro",
      ],
      cs: [
        "Výstup na vrchol Point Lenana (netechnický)",
        "Trasy Sirimon, Naro Moru a Chogoria",
        "Alpská jezera a unikátní obří flóra",
        "Méně turistů než na Kilimandžáru",
      ],
      pl: [
        "Trekking na szczyt Point Lenana (nietechniczny)",
        "Trasy Sirimon, Naro Moru i Chogoria",
        "Alpejskie jeziora i unikatowa, gigantyczna flora",
        "Mniej tłumów niż na Kilimandżaro",
      ],
    },
    bestTime: {
      en: "January–February and August–September (driest trekking windows).",
      cs: "Leden–únor a srpen–září (nejsušší období pro treking).",
      pl: "Styczeń–luty oraz sierpień–wrzesień (najsuchsze okresy na trekking).",
    },
  },
  {
    slug: "maasai-culture",
    image: "/images/destinations/maasai-culture.jpg",
    title: { en: "Maasai Culture & Villages", cs: "Kultura a vesnice Masajů", pl: "Kultura i wioski Masajów" },
    summary: {
      en: "Living Maasai communities near the Mara welcome visitors to share their traditions, songs and way of life.",
      cs: "Živé komunity Masajů poblíž Mary vítají návštěvníky, aby sdíleli své tradice, písně a způsob života.",
      pl: "Żywe społeczności Masajów w pobliżu Mary zapraszają odwiedzających, by dzielić się tradycjami, pieśniami i sposobem życia.",
    },
    highlights: {
      en: [
        "Traditional dance and jumping ceremonies",
        "Beadwork and craft demonstrations",
        "Guided village (manyatta) visits",
        "Community-run cultural centres",
      ],
      cs: [
        "Tradiční tance a skokové obřady",
        "Ukázky práce s korálky a řemesel",
        "Návštěvy vesnic (manyatta) s průvodcem",
        "Kulturní centra vedená komunitou",
      ],
      pl: [
        "Tradycyjne tańce i ceremonie skoków",
        "Pokazy pracy z koralikami i rzemiosła",
        "Zwiedzanie wiosek (manyatta) z przewodnikiem",
        "Centra kulturalne prowadzone przez społeczność",
      ],
    },
    bestTime: {
      en: "Year-round — usually combined with a Maasai Mara safari.",
      cs: "Po celý rok — obvykle v kombinaci se safari v Masai Mara.",
      pl: "Cały rok — zwykle łączone z safari w Masajskiej Marze.",
    },
  },
];

export default destinations;

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
