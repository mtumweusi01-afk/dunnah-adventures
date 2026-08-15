import type { Dictionary } from "@/i18n/dictionary-type";

export const NAV_LINKS: { key: keyof Dictionary["nav"]; path: string }[] = [
  { key: "home", path: "" },
  { key: "about", path: "about" },
  { key: "tours", path: "tours" },
  { key: "destinations", path: "destinations" },
  { key: "gallery", path: "gallery" },
  { key: "blog", path: "blog" },
  { key: "contact", path: "contact" },
];
