import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LOCALES } from "@/i18n/config";
import tours from "@/data/tours";
import destinations from "@/data/destinations";
import posts from "@/data/blog";

export const dynamic = "force-static";

const STATIC_ROUTES = ["", "about/", "tours/", "destinations/", "gallery/", "blog/", "contact/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const path of STATIC_ROUTES) {
      entries.push({ url: `${SITE_URL}/${locale}/${path}` });
    }
    for (const tour of tours) {
      entries.push({ url: `${SITE_URL}/${locale}/tours/${tour.slug}/` });
    }
    for (const destination of destinations) {
      entries.push({ url: `${SITE_URL}/${locale}/destinations/${destination.slug}/` });
    }
    for (const post of posts) {
      entries.push({ url: `${SITE_URL}/${locale}/blog/${post.slug}/` });
    }
  }

  return entries;
}
