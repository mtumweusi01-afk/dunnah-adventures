import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/gallery/Lightbox";
import destinations from "@/data/destinations";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const DESTINATION_PHOTOS: Record<string, { src: string; alt: string }[]> = {
  "maasai-mara": [
    { src: "/images/gallery/mara-leopard.jpg", alt: "Leopard resting in the grass, Maasai Mara" },
    { src: "/images/gallery/mara-migration.jpg", alt: "Wildebeest migration herd, Maasai Mara" },
    { src: "/images/gallery/mara-cheetah.jpg", alt: "Cheetah portrait, Maasai Mara" },
    { src: "/images/gallery/mara-lion-roar.jpg", alt: "Male lion roaring, Maasai Mara" },
    { src: "/images/gallery/mara-zebra-foal.jpg", alt: "Zebra with jumping foal, Maasai Mara" },
    { src: "/images/gallery/mara-lion-standing.jpg", alt: "Lion standing over its resting pride, Maasai Mara" },
    { src: "/images/gallery/mara-buffalo.jpg", alt: "Cape buffalo close portrait, Maasai Mara" },
    { src: "/images/gallery/mara-giraffe-treetop.jpg", alt: "Giraffe browsing treetops, Maasai Mara" },
    { src: "/images/gallery/mara-lion-cubs.jpg", alt: "Lion pride with cubs resting, Maasai Mara" },
    { src: "/images/gallery/mara-cheetah-walking.jpg", alt: "Cheetah on the move, Maasai Mara" },
    { src: "/images/gallery/mara-giraffe-closeup.jpg", alt: "Giraffe close-up against the sky, Maasai Mara" },
    { src: "/images/gallery/mara-zebra-pair.jpg", alt: "Pair of zebras grazing, Maasai Mara" },
    { src: "/images/gallery/mara-hartebeest.jpg", alt: "Hartebeest on the plains, Maasai Mara" },
    { src: "/images/gallery/mara-lioness-portrait.jpg", alt: "Lioness portrait, Maasai Mara" },
    { src: "/images/gallery/mara-secretary-bird.jpg", alt: "Secretary bird in the grass, Maasai Mara" },
    { src: "/images/gallery/mara-border-marker.jpg", alt: "Tanzania border marker on the Mara-Serengeti boundary" },
  ],
  amboseli: [
    { src: "/images/gallery/amboseli-gate.jpg", alt: "Guide and travelers at the Amboseli National Park gate" },
    { src: "/images/gallery/amboseli-sunset.jpg", alt: "Sunset over the road into Amboseli" },
  ],
  tsavo: [
    { src: "/images/gallery/tsavo-big-tusker.jpg", alt: "Large tusker elephant on a red dirt road, Tsavo" },
    { src: "/images/gallery/tsavo-lion-rock.jpg", alt: "Young lion at the Lion Rock trail sign, Tsavo West" },
    { src: "/images/gallery/tsavo-sunset-waterhole.jpg", alt: "Sunset over a waterhole, Tsavo" },
    { src: "/images/hero-2.jpg", alt: "Guide and travelers at the Tsavo East gate" },
    { src: "/images/gallery/tsavo-rhino.jpg", alt: "Black rhino on the plains, Tsavo" },
    { src: "/images/gallery/tsavo-guide-giraffe.jpg", alt: "Guide spotting a giraffe from the safari vehicle, Tsavo" },
    { src: "/images/gallery/tsavo-salt-lick-lodge.jpg", alt: "Guests at Salt Lick Safari Lodge, Tsavo" },
    { src: "/images/gallery/tsavo-red-road.jpg", alt: "Guide by the safari vehicle on a red dirt road, Tsavo" },
    { src: "/images/gallery/tsavo-lion-hunt.jpg", alt: "Lioness with a zebra kill, Tsavo" },
  ],
  "lake-nakuru": [
    { src: "/images/gallery/nakuru-rhino.jpg", alt: "Black rhino in the bush, Lake Nakuru" },
    { src: "/images/gallery/nakuru-pelican.jpg", alt: "Pelican portrait, Lake Nakuru" },
    { src: "/images/gallery/nakuru-stork.jpg", alt: "Yellow-billed stork fishing, Lake Nakuru" },
  ],
};

const DESTINATION_VIDEOS: Record<string, { src: string; poster: string; alt: string }[]> = {
  "maasai-mara": [
    { src: "/videos/mara-wildebeest-migration.mp4", poster: "/images/video-posters/mara-wildebeest-migration.jpg", alt: "Wildebeest migration herd, Maasai Mara" },
    { src: "/videos/mara-leopard.mp4", poster: "/images/video-posters/mara-leopard.jpg", alt: "Leopard close-up, Maasai Mara" },
    { src: "/videos/mara-lion-resting.mp4", poster: "/images/video-posters/mara-lion-resting.jpg", alt: "Male lion resting, Maasai Mara" },
    { src: "/videos/mara-zebras-golden-hour.mp4", poster: "/images/video-posters/mara-zebras-golden-hour.jpg", alt: "Zebras grazing at golden hour, Maasai Mara" },
    { src: "/videos/mara-lioness-cub.mp4", poster: "/images/video-posters/mara-lioness-cub.jpg", alt: "Lioness with cub, Maasai Mara" },
    { src: "/videos/mara-giraffe.mp4", poster: "/images/video-posters/mara-giraffe.jpg", alt: "Giraffe, Maasai Mara" },
    { src: "/videos/mara-lioness-shade.mp4", poster: "/images/video-posters/mara-lioness-shade.jpg", alt: "Lioness resting in the shade, Maasai Mara" },
    { src: "/videos/mara-impala-herd.mp4", poster: "/images/video-posters/mara-impala-herd.jpg", alt: "Impala herd, Maasai Mara" },
    { src: "/videos/mara-lioness-walking.mp4", poster: "/images/video-posters/mara-lioness-walking.jpg", alt: "Lioness walking, Maasai Mara" },
  ],
  amboseli: [
    { src: "/videos/amboseli-kilimanjaro-view.mp4", poster: "/images/video-posters/amboseli-kilimanjaro-view.jpg", alt: "View of Mount Kilimanjaro" },
    { src: "/videos/amboseli-elephant-closeup.mp4", poster: "/images/video-posters/amboseli-elephant-closeup.jpg", alt: "Elephant close-up, Amboseli" },
    { src: "/videos/amboseli-elephant-walking.mp4", poster: "/images/video-posters/amboseli-elephant-walking.jpg", alt: "Elephant walking toward camera, Amboseli" },
    { src: "/videos/amboseli-elephant-feeding.mp4", poster: "/images/video-posters/amboseli-elephant-feeding.jpg", alt: "Elephant feeding, Amboseli" },
    { src: "/videos/amboseli-zebras-crossing.mp4", poster: "/images/video-posters/amboseli-zebras-crossing.jpg", alt: "Zebras crossing the road, Amboseli" },
    { src: "/videos/amboseli-elephant-grazing.mp4", poster: "/images/video-posters/amboseli-elephant-grazing.jpg", alt: "Elephant grazing with mountain backdrop, Amboseli" },
    { src: "/videos/amboseli-elephant-mountain.mp4", poster: "/images/video-posters/amboseli-elephant-mountain.jpg", alt: "Elephant walking with Kilimanjaro in view, Amboseli" },
    { src: "/videos/amboseli-elephant-goldenhour.mp4", poster: "/images/video-posters/amboseli-elephant-goldenhour.jpg", alt: "Elephant walking at golden hour, Amboseli" },
  ],
  tsavo: [
    { src: "/videos/tsavo-elephant-waterhole.mp4", poster: "/images/video-posters/tsavo-elephant-waterhole.jpg", alt: "Elephant herd at a waterhole, Tsavo" },
    { src: "/videos/tsavo-elephant-portrait.mp4", poster: "/images/video-posters/tsavo-elephant-portrait.jpg", alt: "Elephant portrait, Tsavo" },
    { src: "/videos/tsavo-elephant-sunset.mp4", poster: "/images/video-posters/tsavo-elephant-sunset.jpg", alt: "Elephant crossing at sunset, Tsavo" },
    { src: "/videos/tsavo-elephant-crossing.mp4", poster: "/images/video-posters/tsavo-elephant-crossing.jpg", alt: "Elephant crossing a dirt road, Tsavo" },
    { src: "/videos/tsavo-lioness-walking.mp4", poster: "/images/video-posters/tsavo-lioness-walking.jpg", alt: "Lioness walking, Tsavo" },
    { src: "/videos/tsavo-lioness-closeup.mp4", poster: "/images/video-posters/tsavo-lioness-closeup.jpg", alt: "Lioness close-up portrait, Tsavo" },
    { src: "/videos/tsavo-lionesses-pair.mp4", poster: "/images/video-posters/tsavo-lionesses-pair.jpg", alt: "Two lionesses in the grass, Tsavo" },
    { src: "/videos/tsavo-lioness-road.mp4", poster: "/images/video-posters/tsavo-lioness-road.jpg", alt: "Lioness resting on a dirt road, Tsavo" },
    { src: "/videos/tsavo-lion-hunt.mp4", poster: "/images/video-posters/tsavo-lion-hunt.jpg", alt: "Lioness with a zebra kill, Tsavo" },
  ],
  "maasai-culture": [
    { src: "/videos/maasai-village-visit.mp4", poster: "/images/video-posters/maasai-village-visit.jpg", alt: "Visiting a Maasai village" },
  ],
};

const EXPERIENCE_PHOTOS = [
  { src: "/images/gallery/experience-couple-viewpoint.jpg", alt: "Guests at a rocky viewpoint over the plains" },
  { src: "/images/gallery/experience-group-viewpoint.jpg", alt: "Group at a rocky viewpoint over the plains" },
  { src: "/images/gallery/experience-vehicle-selfie.jpg", alt: "Guests and guide in the safari vehicle" },
  { src: "/images/gallery/experience-boat-sunset.jpg", alt: "Guests on a boat safari at sunset" },
  { src: "/images/gallery/experience-land-cruiser-group.jpg", alt: "Guests and guide beside the Land Cruiser at golden hour" },
  { src: "/images/gallery/experience-selfie-rock.jpg", alt: "Guide and guests at a rocky viewpoint" },
  { src: "/images/gallery/experience-vehicle-thumbsup.jpg", alt: "Guests by the safari vehicle" },
  { src: "/images/gallery/experience-rocky-viewpoint-group.jpg", alt: "Guests on a guided viewpoint excursion" },
  { src: "/images/gallery/savanna-sunset.jpg", alt: "African savanna at sunset" },
  { src: "/images/gallery/safari-jeep.jpg", alt: "Convoy of safari jeeps on a dirt road" },
  { src: "/images/gallery/safari-lodge.jpg", alt: "Modern safari lodge exterior" },
];

const EXPERIENCE_VIDEOS = [
  { src: "/videos/experience-boat-sunset.mp4", poster: "/images/video-posters/experience-boat-sunset.jpg", alt: "Boat safari at sunset" },
  { src: "/videos/experience-vehicle-boarding.mp4", poster: "/images/video-posters/experience-vehicle-boarding.jpg", alt: "Guests boarding the safari vehicle" },
];

function VideoGrid({ videos, label }: { videos: { src: string; poster: string; alt: string }[]; label: string }) {
  return (
    <div className="mt-5">
      <p className="text-sm font-semibold text-text-muted mb-3">{label}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <video
            key={v.src}
            controls
            preload="none"
            poster={v.poster}
            aria-label={v.alt}
            className="w-full aspect-video rounded-xl border border-border bg-black object-cover"
          >
            <source src={v.src} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <Container className="py-16 sm:py-20">
      <span className="text-sm font-semibold text-brand-primary">{dict.gallery.eyebrow}</span>
      <h1 className="font-serif text-4xl font-semibold mt-2 mb-3">{dict.gallery.title}</h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-10">{dict.gallery.subtitle}</p>

      {destinations.map((d) => {
        const photos = DESTINATION_PHOTOS[d.slug] ?? [{ src: d.image, alt: d.title[loc] }];
        const videos = DESTINATION_VIDEOS[d.slug];
        return (
          <section key={d.slug} className="mb-14">
            <h2 className="font-serif text-2xl font-semibold mb-5">{d.title[loc]}</h2>
            <Lightbox images={photos} />
            {videos && videos.length > 0 && (
              <VideoGrid videos={videos} label={dict.gallery.videosLabel} />
            )}
          </section>
        );
      })}

      <section>
        <h2 className="font-serif text-2xl font-semibold mb-5">{dict.gallery.experienceTitle}</h2>
        <Lightbox images={EXPERIENCE_PHOTOS} />
        <VideoGrid videos={EXPERIENCE_VIDEOS} label={dict.gallery.videosLabel} />
      </section>
    </Container>
  );
}
