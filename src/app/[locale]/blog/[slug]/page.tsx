import Image from "next/image";
import { notFound } from "next/navigation";
import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import posts, { getPost } from "@/data/blog";

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <div className="relative h-[35vh] min-h-[260px]">
        <Image
          src={post.image}
          alt={post.title[loc]}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-10 text-white">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold max-w-2xl">
            {post.title[loc]}
          </h1>
        </Container>
      </div>

      <Container className="py-12 max-w-2xl flex flex-col gap-5">
        {post.body[loc].map((p, i) => (
          <p key={i} className="text-lg text-text-secondary leading-relaxed">
            {p}
          </p>
        ))}
      </Container>
    </>
  );
}
