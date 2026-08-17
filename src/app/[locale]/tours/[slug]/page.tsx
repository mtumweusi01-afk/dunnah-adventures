import Image from "next/image";
import { notFound } from "next/navigation";
import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { InquireIcons } from "@/components/ui/InquireIcons";
import { DestinationCard } from "@/components/ui/DestinationCard";
import tours, { getTour } from "@/data/tours";
import destinations from "@/data/destinations";
import { CATEGORY_LABELS } from "@/data/categories";

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) => tours.map((t) => ({ locale, slug: t.slug })));
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const tour = getTour(slug);
  if (!tour) notFound();

  const relatedDestinations = destinations.filter((d) =>
    tour.destinationSlugs.includes(d.slug)
  );

  return (
    <>
      <div className="relative h-[45vh] min-h-[320px]">
        <Image
          src={tour.image}
          alt={tour.title[loc]}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-10 text-white">
          <span className="w-fit rounded-full bg-brand-secondary text-brand-secondary-foreground text-xs font-semibold px-3 py-1 mb-3">
            {CATEGORY_LABELS[tour.category][loc]}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold max-w-2xl">
            {tour.title[loc]}
          </h1>
        </Container>
      </div>

      <Container className="py-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-8">
          <p className="text-lg text-text-secondary leading-relaxed">
            {tour.description[loc]}
          </p>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-4">
              {dict.tours.itineraryTitle}
            </h2>
            <ol className="flex flex-col gap-3">
              {tour.itinerary[loc].map((line, i) => (
                <li key={i} className="flex gap-3 text-text-secondary">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                  {line}
                </li>
              ))}
            </ol>
          </div>

          {relatedDestinations.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-4">
                {dict.destinations.title}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {relatedDestinations.map((d) => (
                  <DestinationCard key={d.slug} destination={d} locale={loc} />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-border bg-surface-muted p-6 flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">
              {dict.tours.inquireTitle}
            </p>
            <InquireIcons context={tour.title[loc]} />
          </div>

          <dl className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-text-muted">{dict.common.duration}</dt>
              <dd className="font-medium text-foreground">
                {tour.durationDays} {dict.common.days}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-text-muted">{dict.tours.includedTitle}</dt>
              <dd className="font-medium text-foreground">{tour.groupSize}</dd>
            </div>
          </dl>

          <LinkButton href={`/${loc}/contact?tour=${tour.slug}`} variant="primary" size="lg">
            {dict.tours.inquireAboutThis}
          </LinkButton>
        </aside>
      </Container>
    </>
  );
}
