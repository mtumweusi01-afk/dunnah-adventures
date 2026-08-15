import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { DestinationCard } from "@/components/ui/DestinationCard";
import destinations from "@/data/destinations";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function DestinationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <Container className="py-16 sm:py-20">
      <span className="text-sm font-semibold text-brand-primary">
        {dict.destinations.eyebrow}
      </span>
      <h1 className="font-serif text-4xl font-semibold mt-2 mb-3">{dict.destinations.title}</h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-10">{dict.destinations.subtitle}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <DestinationCard key={d.slug} destination={d} locale={loc} />
        ))}
      </div>
    </Container>
  );
}
