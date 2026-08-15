import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.home.heroTitle,
    description: dict.home.heroSubtitle,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <>
      <SetHtmlLang locale={loc} />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header locale={loc} dict={dict} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={loc} dict={dict} />
      <WhatsAppButton locale={loc} />
    </>
  );
}
