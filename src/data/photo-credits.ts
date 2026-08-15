export type PhotoCredit = {
  path: string;
  title: string;
  author: string;
  license: string;
  sourceUrl: string;
};

// Placeholder photography sourced from Wikimedia Commons under free
// licenses that require attribution (CC BY-SA / CC BY). Replace these files
// with the owner's own photography when available (see MEDIA-TODO.md) —
// until then, this attribution must stay on the site to comply with the
// license terms.
const photoCredits: PhotoCredit[] = [
  {
    path: "/images/hero.jpg",
    title: "Wildebeest Jumping Into the Mara River",
    author: "Danijel Mihajlovic",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Wildebeest_Jumping_Into_the_Mara_River.jpg",
  },
  {
    path: "/images/destinations/maasai-mara.jpg",
    title: "Maasai Mara National Reserve Kenya",
    author: "Svein-Magne Tunli (tunliweb.no)",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Maasai_Mara_National_Reserve_Kenya.jpg",
  },
  {
    path: "/images/destinations/amboseli.jpg",
    title: "Elephants at Amboseli national park against Mount Kilimanjaro",
    author: "Amoghavarsha JS (amoghavarsha.com)",
    license: "CC BY-SA 3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Elephants_at_Amboseli_national_park_against_Mount_Kilimanjaro.jpg",
  },
  {
    path: "/images/destinations/tsavo.jpg",
    title: "An elephant at Tsavo national park, Kenya",
    author: "Brenda-mwangi",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:An_elephant_at_Tsavo_national_park,_Kenya.jpg",
  },
  {
    path: "/images/destinations/lake-nakuru.jpg",
    title: "Lake Nakuru National Park — Lesser Flamingo",
    author: "Thomas Fuhrmann",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Lake_Nakuru_National_Park_02_-_Lesser_Flamingo_(Phoeniconaias_minor).jpg",
  },
  {
    path: "/images/destinations/diani-beach.jpg",
    title: "Diani Beach overlooking the Indian Ocean",
    author: "JLukorito",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Diani_Beach_overlooking_the_Indian_Ocean.jpg",
  },
  {
    path: "/images/destinations/mount-kenya.jpg",
    title: "Mount Kenya — Volcanic Mountain in Central Kenya",
    author: "VickyOmondi",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Mount_Kenya_-_Volcanic_Mountain_in_Central_Kenya.jpg",
  },
  {
    path: "/images/destinations/maasai-culture.jpg",
    title: "Traditional Maasai Dance",
    author: "Wikipedia contributor",
    license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Traditional_Maasai_Dance.jpg",
  },
  {
    path: "/images/gallery/savanna-sunset.jpg",
    title: "Serengeti Sunset",
    author: "Anita Ritenour",
    license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Serengeti_Sunset.jpg",
  },
  {
    path: "/images/gallery/safari-jeep.jpg",
    title: "Safari vehicles watching lion couple in Maasai Mara, Kenya",
    author: "Daniel Case",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Safari_vehicles_watching_lion_couple_in_Maasai_Mara,_Kenya.jpg",
  },
  {
    path: "/images/gallery/safari-lodge.jpg",
    title: "Keekorok Lodge, Maasai Mara National Park",
    author: "Nikolai Maksimovich",
    license: "CC BY 3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Lodge_Keekorok.Maasai_Mara_National_Park_-_panoramio.jpg",
  },
];

export default photoCredits;
