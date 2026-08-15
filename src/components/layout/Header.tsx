import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { NAV_LINKS } from "./nav-links";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { CurrencyToggle } from "./CurrencyToggle";
import { MobileNav } from "./MobileNav";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo href={`/${locale}`} />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={`/${locale}/${link.path}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              {dict.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
          <CurrencyToggle />
          <LinkButton href={`/${locale}/contact`} variant="primary" size="sm">
            {dict.nav.bookNow}
          </LinkButton>
        </div>

        <MobileNav locale={locale} dict={dict} />
      </Container>
    </header>
  );
}
