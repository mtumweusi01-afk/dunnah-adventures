"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

// Root <html lang> can't read the [locale] segment (it lives above the
// dynamic route), so this corrects it client-side after hydration.
export function SetHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
