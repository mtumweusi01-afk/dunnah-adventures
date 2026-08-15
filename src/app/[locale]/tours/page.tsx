import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { TourCard } from "@/components/ui/TourCard";
import tours from "@/data/tours";
import pricingTiers from "@/data/pricing";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function ToursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <Container className="py-16 sm:py-20">
      <span className="text-sm font-semibold text-brand-primary">{dict.tours.eyebrow}</span>
      <h1 className="font-serif text-4xl font-semibold mt-2 mb-3">{dict.tours.title}</h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-10">{dict.tours.subtitle}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {tours.map((tour) => (
          <TourCard key={tour.slug} tour={tour} locale={loc} dict={dict} />
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-surface-muted p-8">
        <h2 className="font-serif text-2xl font-semibold mb-1">{dict.tours.typicalCostsTitle}</h2>
        <p className="text-sm text-text-muted mb-6">{dict.common.indicativePricing}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div key={tier.key} className="rounded-xl bg-surface border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">{tier.label[loc]}</h3>
              <p className="text-2xl font-serif font-semibold text-brand-primary mb-1">
                €{tier.rangeEUR}
              </p>
              <p className="text-xs text-text-muted mb-3">{tier.unit[loc]}</p>
              <p className="text-sm text-text-secondary">{tier.note[loc]}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
