import Link from "next/link";

// Placeholder wordmark logo — replace with the real Dunnah Adventures logo
// file (see MEDIA-TODO.md) by swapping this component's contents for an
// <Image src="/images/logo.svg" ... /> once supplied.
export function Logo({ href }: { href: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 shrink-0">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <circle cx="17" cy="17" r="17" className="fill-brand-primary" />
        <path
          d="M9 22 L14 12 L17 18 L20 13 L25 22 Z"
          className="fill-brand-accent"
        />
      </svg>
      <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
        Dunnah Adventures
      </span>
    </Link>
  );
}
