import Image from "next/image";
import Link from "next/link";

export function Logo({ href }: { href: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 shrink-0">
      <Image
        src="/images/logo.png"
        alt="Dunnah Adventures"
        width={34}
        height={34}
        className="rounded-full"
      />
      <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
        Dunnah Adventures
      </span>
    </Link>
  );
}
