import Image from "next/image";
import Link from "next/link";
import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import posts from "@/data/blog";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);

  return (
    <Container className="py-16 sm:py-20">
      <span className="text-sm font-semibold text-brand-primary">{dict.blog.eyebrow}</span>
      <h1 className="font-serif text-4xl font-semibold mt-2 mb-3">{dict.blog.title}</h1>
      <p className="text-lg text-text-secondary max-w-2xl mb-10">{dict.blog.subtitle}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug}>
            <Link href={`/${loc}/blog/${post.slug}`} className="block">
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title[loc]}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h2 className="font-serif text-lg font-semibold text-foreground">
                  {post.title[loc]}
                </h2>
                <p className="text-sm text-text-secondary line-clamp-3">
                  {post.excerpt[loc]}
                </p>
                <span className="text-sm font-medium text-brand-primary pt-1">
                  {dict.common.readMore} →
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  );
}
