import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/gallery/Lightbox";
import destinations from "@/data/destinations";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const images = [
    { src: "/images/gallery/savanna-sunset.jpg", alt: "African savanna at sunset" },
    { src: "/images/gallery/safari-jeep.jpg", alt: "Convoy of safari jeeps on a dirt road" },
    { src: "/images/gallery/safari-lodge.jpg", alt: "Modern safari lodge exterior" },
    ...destinations.map((d) => ({ src: d.image, alt: d.title[loc] })),
  ];

  return (
    <Container className="py-16 sm:py-20">
      <span className="text-sm font-semibold text-brand-primary">{dict.gallery.eyebrow}</span>
      <h1 className="font-serif text-4xl font-semibold mt-2 mb-3">{dict.gallery.title}</h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-10">{dict.gallery.subtitle}</p>

      <Lightbox images={images} />

      <div className="mt-14 rounded-2xl border border-dashed border-border bg-surface-muted p-8 text-center">
        <h2 className="font-serif text-xl font-semibold mb-2">
          {dict.gallery.videosComingSoonTitle}
        </h2>
        <p className="text-text-secondary max-w-md mx-auto">{dict.gallery.videosComingSoonText}</p>
      </div>
    </Container>
  );
}
