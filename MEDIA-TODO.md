# Media & content checklist

Things to swap in as they become available. Nothing here blocks the site
from working today — it's all placeholder-but-functional.

## Branding

- [x] **Logo** — real logo in place at `public/images/logo.png` (cleaned up
      from the supplied source: trimmed and background made transparent),
      rendered via `next/image` in
      [src/components/layout/Logo.tsx](src/components/layout/Logo.tsx).
- [ ] **Hero image** — replace `public/images/hero.jpg` (currently a
      Wikimedia Commons placeholder, see Photo credits below) with the
      supplied hero photo. Keep the same filename or update the reference in
      [src/app/[locale]/page.tsx](<src/app/[locale]/page.tsx>).
- [ ] **Colour palette** — currently a proposed earth-tone safari palette
      (terracotta / gold / green) in
      [src/app/globals.css](src/app/globals.css). Adjust to match the real
      logo once it arrives.

## Contact details (`src/lib/site.ts`)

- [x] Phone number — +254 707 099 579
- [x] WhatsApp number — same as phone
- [x] Email address — dunnahadventures@gmail.com
- [ ] Instagram URL
- [ ] TikTok URL
- [ ] Office address

## Forms

- [x] **Web3Forms access key** — set in
      [src/lib/site.ts](src/lib/site.ts). Contact form submits directly.

## Pricing

- [ ] All prices in [src/data/tours.ts](src/data/tours.ts) and
      [src/data/pricing.ts](src/data/pricing.ts) are **indicative
      placeholders** seeded from public competitor research (SafariBookings,
      SafariFind, AJ Kenya Safaris, Porini/Gamewatchers, Kenya Luxury
      Safari — 2025/2026 rates). Replace with your real rate card.

## Photos & video

- [ ] All destination/gallery photos are temporary Wikimedia Commons images
      (CC BY-SA / CC BY licensed — attribution lives at
      `/en/photo-credits/` and must stay until every photo is replaced).
      Replace files under `public/images/destinations/` and
      `public/images/gallery/` with your own photography, and once none of
      the Commons images remain, the `/photo-credits/` page and
      `src/data/photo-credits.ts` can be deleted along with its footer link.
- [x] Video: `public/videos/hero.mp4` is in use as the homepage hero
      background (desktop/tablet) and as a player on the Gallery page. Swap
      in more clips as they arrive from Google Drive.

## Content review

- [ ] **Czech and Polish copy is AI-translated** for launch (see
      `src/i18n/dictionaries/cs.ts` and `pl.ts`, and the localized fields in
      `src/data/tours.ts`, `destinations.ts`, `blog.ts`). Recommend a native
      speaker review pass before heavy marketing spend in those markets.
- [ ] About page story (`src/i18n/dictionaries/*.ts` → `about.intro`) is a
      placeholder — replace with the real founding story.
- [ ] Licensing/KATO membership note (`about.licensingNote`) is empty —
      fill in once available.
- [ ] Testimonials on the homepage are placeholders — replace with real
      guest reviews.

## Domain / hosting

- [ ] Add DNS records at Hostinger for `dunnahadventures.com` pointing to
      GitHub Pages (see the deploy notes from setup, or GitHub's own
      [custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)):
      four `A` records to `185.199.108.153`, `185.199.109.153`,
      `185.199.110.153`, `185.199.111.153`, plus a `CNAME` for `www` →
      `mtumweusi01-afk.github.io`.
