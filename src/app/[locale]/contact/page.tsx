import { Suspense } from "react";
import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CONTACT, whatsappLink } from "@/lib/site";
import tours from "@/data/tours";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <Container className="py-16 sm:py-20 grid gap-12 lg:grid-cols-[3fr_2fr]">
      <div>
        <span className="text-sm font-semibold text-brand-primary">{dict.contact.eyebrow}</span>
        <h1 className="font-serif text-4xl font-semibold mt-2 mb-3">{dict.contact.title}</h1>
        <p className="text-lg text-text-secondary max-w-xl mb-8">{dict.contact.subtitle}</p>

        <Suspense>
          <InquiryForm dict={dict} locale={loc} tours={tours} />
        </Suspense>
      </div>

      <aside className="rounded-2xl border border-border bg-surface-muted p-8 h-fit flex flex-col gap-6">
        <h2 className="font-serif text-xl font-semibold">{dict.contact.directTitle}</h2>

        <div className="flex flex-col gap-3">
          <a
            href={whatsappLink("Hi Dunnah Adventures, I'd like to know more about a Kenya safari.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-surface border border-border p-4 hover:border-brand-primary transition-colors"
          >
            <span className="font-medium">{dict.contact.whatsappCta}</span>
          </a>
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-3 rounded-xl bg-surface border border-border p-4 hover:border-brand-primary transition-colors"
          >
            <span className="font-medium">{dict.contact.callCta}</span>
            <span className="ml-auto text-sm text-text-muted">{CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-3 rounded-xl bg-surface border border-border p-4 hover:border-brand-primary transition-colors"
          >
            <span className="font-medium">{dict.contact.emailCta}</span>
            <span className="ml-auto text-sm text-text-muted">{CONTACT.email}</span>
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-text-muted mb-2">{dict.contact.followUs}</h3>
          <div className="flex gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-primary hover:underline"
            >
              Instagram
            </a>
            <a
              href={CONTACT.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-primary hover:underline"
            >
              TikTok
            </a>
          </div>
        </div>
      </aside>
    </Container>
  );
}
