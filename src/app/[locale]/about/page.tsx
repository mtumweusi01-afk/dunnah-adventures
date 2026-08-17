import Image from "next/image";
import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const { about } = dict;

  return (
    <Container className="py-16 sm:py-20 max-w-5xl">
      <span className="text-sm font-semibold text-brand-primary">{about.eyebrow}</span>
      <h1 className="font-serif text-4xl font-semibold mt-2 mb-8">{about.title}</h1>

      <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
        <div className="flex flex-col gap-4 text-lg text-text-secondary leading-relaxed lg:col-span-2">
          {about.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border lg:sticky lg:top-24">
          <Image
            src="/images/hero-2.jpg"
            alt="Dunnah at the Tsavo East National Park gate"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-surface-muted p-8">
        <h2 className="font-serif text-2xl font-semibold mb-3">{about.missionTitle}</h2>
        <p className="text-text-secondary leading-relaxed">{about.missionText}</p>
      </div>

      <h2 className="font-serif text-2xl font-semibold mt-12 mb-6">{about.whyTitle}</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {about.whyPoints.map((point) => (
          <div key={point.title} className="flex flex-col gap-2">
            <h3 className="font-semibold text-foreground">{point.title}</h3>
            <p className="text-sm text-text-secondary">{point.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-text-muted italic border-l-2 border-brand-accent pl-4">
        {about.licensingNote}
      </p>
    </Container>
  );
}
