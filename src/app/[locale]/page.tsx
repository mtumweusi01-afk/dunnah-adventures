import Image from "next/image";
import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { TourCard } from "@/components/ui/TourCard";
import { InquireIcons } from "@/components/ui/InquireIcons";
import { DestinationCard } from "@/components/ui/DestinationCard";
import tours from "@/data/tours";
import destinations from "@/data/destinations";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  const featuredTours = tours.slice(0, 3);
  const featuredDestinations = destinations.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <Container className="flex min-h-[70vh] flex-col justify-end gap-5 py-16 text-white">
          <span className="w-fit rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-semibold">
            {dict.home.heroEyebrow}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold max-w-2xl leading-[1.05]">
            {dict.home.heroTitle}
          </h1>
          <p className="max-w-xl text-lg text-white/90">{dict.home.heroSubtitle}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <LinkButton href={`/${loc}/contact`} variant="accent" size="lg">
              {dict.home.heroCtaPrimary}
            </LinkButton>
            <LinkButton
              href={`/${loc}/tours`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              {dict.home.heroCtaSecondary}
            </LinkButton>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-3 mb-12">
            <h2 className="font-serif text-3xl font-semibold">{dict.home.highlightsTitle}</h2>
            <p className="text-text-secondary">{dict.home.highlightsSubtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.home.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-border bg-surface p-6 flex flex-col gap-2"
              >
                <h3 className="font-semibold text-foreground">{h.title}</h3>
                <p className="text-sm text-text-secondary">{h.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured tours */}
      <section className="py-16 sm:py-20 bg-surface-muted">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div className="flex flex-col gap-2 max-w-xl">
              <h2 className="font-serif text-3xl font-semibold">{dict.home.tourTypesTitle}</h2>
              <p className="text-text-secondary">{dict.home.tourTypesSubtitle}</p>
            </div>
            <LinkButton href={`/${loc}/tours`} variant="ghost">
              {dict.common.viewAll} →
            </LinkButton>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} locale={loc} dict={dict} />
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 flex flex-wrap items-center justify-between gap-4">
            <p className="font-medium text-foreground">{dict.tours.inquireTitle}</p>
            <InquireIcons />
          </div>
        </Container>
      </section>

      {/* Featured destinations */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div className="flex flex-col gap-2 max-w-xl">
              <h2 className="font-serif text-3xl font-semibold">{dict.home.destinationsTitle}</h2>
              <p className="text-text-secondary">{dict.home.destinationsSubtitle}</p>
            </div>
            <LinkButton href={`/${loc}/destinations`} variant="ghost">
              {dict.common.viewAll} →
            </LinkButton>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} locale={loc} />
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-brand-secondary text-brand-secondary-foreground">
        <Container>
          <h2 className="font-serif text-3xl font-semibold text-center mb-10">
            {dict.home.testimonialsTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {dict.home.testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="rounded-2xl bg-white/10 p-6 flex flex-col gap-4 backdrop-blur"
              >
                <p className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <cite className="not-italic text-sm text-white/70">{t.author}</cite>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-5 text-center max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold">{dict.home.ctaTitle}</h2>
          <p className="text-text-secondary text-lg">{dict.home.ctaSubtitle}</p>
          <LinkButton href={`/${loc}/contact`} variant="primary" size="lg">
            {dict.home.ctaButton}
          </LinkButton>
        </Container>
      </section>
    </>
  );
}
