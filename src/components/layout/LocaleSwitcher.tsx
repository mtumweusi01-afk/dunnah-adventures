"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    window.localStorage.setItem("dunnah-locale", next);
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1 text-xs font-semibold">
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-current={l === locale}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            l === locale
              ? "bg-brand-primary text-brand-primary-foreground"
              : "text-text-secondary hover:bg-surface-muted"
          )}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
