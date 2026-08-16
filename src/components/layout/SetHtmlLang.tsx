"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

// Root <html lang> can't read the [locale] segment (it lives above the
// dynamic route), so this corrects it client-side after hydration.
export function SetHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.classList.forEach((c) => {
      if (c.startsWith("language-")) root.classList.remove(c);
    });
    root.classList.add(`language-${locale}`);
  }, [locale]);
  return null;
}
