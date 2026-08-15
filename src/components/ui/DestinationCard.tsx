import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { Card } from "@/components/ui/Card";

export function DestinationCard({
  destination,
  locale,
}: {
  destination: Destination;
  locale: Locale;
}) {
  return (
    <Card>
      <Link href={`/${locale}/destinations/${destination.slug}`} className="block">
        <div className="relative aspect-[4/3]">
          <Image
            src={destination.image}
            alt={destination.title[locale]}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-5 flex flex-col gap-2">
          <h3 className="font-serif text-lg font-semibold text-foreground">
            {destination.title[locale]}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2">
            {destination.summary[locale]}
          </p>
        </div>
      </Link>
    </Card>
  );
}
