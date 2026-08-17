"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary-type";
import { NAV_LINKS } from "./nav-links";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel = (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-background transition-transform duration-300 ease-out lg:hidden",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      <nav className="flex h-full flex-col gap-6 px-6 pt-24 pb-8 overflow-y-auto">
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={`/${locale}/${link.path}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-lg font-medium text-foreground hover:bg-surface-muted"
              >
                {dict.nav[link.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <LocaleSwitcher locale={locale} />
          </div>
          <LinkButton href={`/${locale}/contact`} variant="primary" onClick={() => setOpen(false)}>
            {dict.nav.bookNow}
          </LinkButton>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-surface"
      >
        <span
          className={cn(
            "block h-0.5 w-5 bg-foreground transition-transform duration-200",
            open && "translate-y-2 rotate-45"
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-5 bg-foreground transition-opacity duration-200",
            open && "opacity-0"
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-5 bg-foreground transition-transform duration-200",
            open && "-translate-y-2 -rotate-45"
          )}
        />
      </button>

      {mounted && createPortal(panel, document.body)}
    </div>
  );
}
