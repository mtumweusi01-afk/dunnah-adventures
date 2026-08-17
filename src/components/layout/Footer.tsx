import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "./nav-links";
import { Logo } from "./Logo";
import { CONTACT } from "@/lib/site";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Logo href={`/${locale}`} />
          <p className="text-sm text-text-secondary max-w-xs">{dict.footer.tagline}</p>
          <div className="flex gap-3 pt-1">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary hover:text-brand-primary"
            >
              Instagram
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary hover:text-brand-primary"
            >
              Facebook
            </a>
            <a
              href={CONTACT.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary hover:text-brand-primary"
            >
              TikTok
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            {dict.footer.quickLinksTitle}
          </h3>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={`/${locale}/${link.path}`}
                  className="text-sm text-text-secondary hover:text-brand-primary"
                >
                  {dict.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            {dict.footer.contactTitle}
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-text-secondary">
            <li>{CONTACT.address}</li>
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-brand-primary">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-primary">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            {dict.nav.tours}
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-text-secondary">
            <li>
              <Link href={`/${locale}/tours`} className="hover:text-brand-primary">
                {dict.common.exploreTours}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/destinations`} className="hover:text-brand-primary">
                {dict.common.exploreDestinations}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-5">
        <Container className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted">
          <span>
            © {year} Dunnah Adventures. {dict.footer.rightsReserved}
          </span>
          <Link href={`/${locale}/photo-credits`} className="hover:text-brand-primary underline">
            Photo credits
          </Link>
        </Container>
      </div>
    </footer>
  );
}
