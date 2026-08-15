import Image from "next/image";
import { notFound } from "next/navigation";
import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { TourCard } from "@/components/ui/TourCard";
import destinations, { getDestination } from "@/data/destinations";
import tours from "@/data/tours";

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) => destinations.map((d) => ({ locale, slug: d.slug })));
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const destination = getDestination(slug);
  if (!destination) notFound();

  const relatedTours = tours.filter((t) => t.destinationSlugs.includes(destination.slug));

  return (
    <>
      <div className="relative h-[45vh] min-h-[320px]">
        <Image
          src={destination.image}
          alt={destination.title[loc]}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-10 text-white">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold max-w-2xl">
            {destination.title[loc]}
          </h1>
        </Container>
      </div>

      <Container className="py-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-8">
          <p className="text-lg text-text-secondary leading-relaxed">
            {destination.summary[loc]}
          </p>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-4">
              {dict.destinations.highlightsTitle}
            </h2>
            <ul className="flex flex-col gap-3">
              {destination.highlights[loc].map((h, i) => (
                <li key={i} className="flex gap-3 text-text-secondary">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {relatedTours.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-4">{dict.tours.title}</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {relatedTours.map((t) => (
                  <TourCard key={t.slug} tour={t} locale={loc} dict={dict} />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-border bg-surface-muted p-6 flex flex-col gap-4">
          <div>
            <h2 className="text-sm font-semibold text-text-muted mb-1">
              {dict.destinations.bestTimeTitle}
            </h2>
            <p className="text-foreground">{destination.bestTime[loc]}</p>
          </div>
          <LinkButton href={`/${loc}/contact`} variant="primary" size="lg">
            {dict.common.inquireNow}
          </LinkButton>
        </aside>
      </Container>
    </>
  );
}
