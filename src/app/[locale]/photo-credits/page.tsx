import { LOCALES } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
import photoCredits from "@/data/photo-credits";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function PhotoCreditsPage() {
  return (
    <Container className="py-16 sm:py-20 max-w-2xl">
      <h1 className="font-serif text-3xl font-semibold mb-3">Photo Credits</h1>
      <p className="text-text-secondary mb-8">
        Placeholder photography on this site is sourced from Wikimedia Commons under free
        licenses that require attribution. These will be replaced with Dunnah Adventures&apos;
        own photography over time.
      </p>
      <ul className="flex flex-col gap-4">
        {photoCredits.map((c) => (
          <li key={c.path} className="border-b border-border pb-4 text-sm">
            <p className="font-medium text-foreground">{c.title}</p>
            <p className="text-text-secondary">
              © {c.author} —{" "}
              <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
                {c.license}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
