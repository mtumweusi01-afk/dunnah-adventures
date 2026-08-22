import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionary-type";
import type { Locale } from "@/i18n/config";
import { Card } from "@/components/ui/Card";
import { CATEGORY_LABELS } from "@/data/categories";

export function TourCard({
  tour,
  locale,
  dict,
}: {
  tour: Tour;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Card>
      <Link href={`/${locale}/tours/${tour.slug}`} className="block">
        <div className="relative aspect-[4/3]">
          <Image
            src={tour.image}
            alt={tour.title[locale]}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute top-3 left-3 rounded-full bg-brand-secondary text-brand-secondary-foreground text-xs font-semibold px-3 py-1">
            {CATEGORY_LABELS[tour.category][locale]}
          </span>
        </div>
        <div className="p-5 flex flex-col gap-2">
          <h3 className="font-serif text-lg font-semibold text-foreground">
            {tour.title[locale]}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2">{tour.summary[locale]}</p>
          <div className="flex items-center justify-between pt-2 text-sm text-text-muted">
            <span>
              {tour.durationDays} {dict.common.days}
            </span>
            <span>{tour.groupSize}</span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
