"use client";

import { useEffect } from "react";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/i18n/config";

// Static export has no server-side locale detection (no proxy/middleware),
// so the unprefixed root redirects client-side: stored preference first,
// then browser language, else the default locale.
export default function RootRedirect() {
  useEffect(() => {
    const stored = window.localStorage.getItem("dunnah-locale");
    if (stored && LOCALES.includes(stored as Locale)) {
      window.location.replace(`/${stored}/`);
      return;
    }
    const browser = navigator.language.slice(0, 2);
    const match = LOCALES.includes(browser as Locale) ? browser : DEFAULT_LOCALE;
    window.location.replace(`/${match}/`);
  }, []);

  return null;
}
