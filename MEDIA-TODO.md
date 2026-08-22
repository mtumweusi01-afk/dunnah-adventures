# Media & content checklist

Things to swap in as they become available. Nothing here blocks the site
from working today — it's all placeholder-but-functional.

## Branding

- [x] **Logo** — real logo in place at `public/images/logo.png` (cleaned up
      from the supplied source: trimmed and background made transparent),
      rendered via `next/image` in
      [src/components/layout/Logo.tsx](src/components/layout/Logo.tsx).
- [ ] **Hero image** — `public/images/hero.jpg` is still a Wikimedia Commons
      placeholder (see Photo credits below). A real photo (`hero-2.jpg`,
      a group shot at the Tsavo East gate) has been supplied and is in use
      on the About page and in the Tsavo gallery section, but the homepage
      hero background itself hasn't been swapped yet.
- [ ] **Colour palette** — currently a proposed earth-tone safari palette
      (terracotta / gold / green) in
      [src/app/globals.css](src/app/globals.css). Adjust to match the real
      logo once it arrives.

## Contact details (`src/lib/site.ts`)

- [x] Phone number — +254 707 099 579
- [x] WhatsApp number — same as phone
- [x] Email address — dunnahadventures@gmail.com
- [x] Instagram URL
- [x] Facebook URL
- [ ] TikTok URL
- [x] Office address — Malindi, Kenya

## Forms

- [x] **Web3Forms access key** — set in
      [src/lib/site.ts](src/lib/site.ts). Contact form submits directly.

## Pricing

- [x] **Prices removed from the site entirely.** No page shows a price,
      currency toggle, or cost tier anymore — every spot that used to show
      a number now shows an "inquire" widget with WhatsApp/Instagram/
      Facebook/Email icon buttons instead
      ([src/components/ui/InquireIcons.tsx](src/components/ui/InquireIcons.tsx)).
      The underlying `priceFromEUR` figures in
      [src/data/tours.ts](src/data/tours.ts) are still there but unused by
      any page — harmless to leave, or delete later if you're sure pricing
      won't come back. `src/data/pricing.ts` and the currency-switcher code
      (`lib/currency.tsx`, `PriceTag`, `CurrencyToggle`) were deleted
      outright since nothing referenced them anymore.

## Photos & video

- [x] **Gallery restructured** with real client photos/videos, organized by
      destination (Maasai Mara, Amboseli, Tsavo, Lake Nakuru) plus a
      guest-experience section — see
      [src/app/[locale]/gallery/page.tsx](<src/app/[locale]/gallery/page.tsx>).
      Real photos also swapped in as the Maasai Mara, Amboseli, Tsavo, and
      Lake Nakuru destination cover images in
      [src/data/destinations.ts](src/data/destinations.ts).
- [x] **Videos broken down per destination** (Maasai Mara, Amboseli, Tsavo,
      Maasai Culture each get their own video grid under their photos, plus
      a small Guest Experience video grid) instead of one flat list — 29
      videos total.
- [ ] **Diani Beach, Mount Kenya, and Maasai Culture** still use Wikimedia
      Commons placeholder photos — no confidently-matching real photo has
      been supplied for these yet. Same for the 3 original generic gallery
      placeholders (`savanna-sunset.jpg`, `safari-jeep.jpg`,
      `safari-lodge.jpg`). Until every Commons image is replaced,
      `/en/photo-credits/` and `src/data/photo-credits.ts` must stay (and
      the footer link to it).
- [!] **`tsavo-lion-hunt.jpg` / `tsavo-lion-hunt.mp4`** show a real lioness
      feeding on a zebra kill, with visible blood — included at the owner's
      explicit request after being flagged. Worth knowing this is on the
      public site if that's ever a question from a partner or reviewer.

## Tours catalog

- [x] **Fully rewritten with real tour content**, sourced from a related
      operator's site (mukasafaris.com) and rewritten in Dunnah's own
      voice — not copied verbatim. 23 tours total: 13 new multi-day
      safaris, the original Mount Kenya trek and Maasai culture tours kept
      as-is, and 8 new day trips (mostly Malindi/Mombasa-area excursions,
      replacing the old single Nakuru day trip which didn't fit a
      Malindi-based operator geographically). See
      [src/data/tours.ts](src/data/tours.ts).
- [x] **21 real tour photos** downloaded from the same source site and
      reprocessed (resized/compressed) into `public/images/tours/` — the
      owner confirmed rights to reuse this site's content and imagery.
- [ ] Same as above: the new tours' `cs`/`pl`/`sk`/`da`/`no` fields are
      AI-translated (matching the pattern for the rest of the site), not
      yet reviewed by a native speaker.
- [ ] Itineraries are rewritten summaries of the source site's stated
      itineraries — worth a factual double-check against your actual
      operational capabilities (lodges named, exact routes, etc.) before
      publishing pricing or contracts against them.

## Content review

- [x] **Czech and Polish UI strings reviewed** — an agent pass corrected
      several inaccurate/awkward phrases in `src/i18n/dictionaries/cs.ts`
      and `pl.ts`. Still recommend a native-speaker pass before heavy
      marketing spend in those markets.
- [ ] **Czech/Polish copy in the data files** (`src/data/tours.ts`,
      `destinations.ts`, `blog.ts`) hasn't had that same review pass yet —
      still as originally AI-translated.
- [ ] **Slovak, Danish, and Norwegian are new languages** added throughout
      `src/i18n/dictionaries/sk.ts` / `da.ts` / `no.ts` and every localized
      field in `src/data/*.ts`. All AI-translated for launch — same
      native-speaker review recommendation applies before marketing spend
      in those markets.
- [x] **English copy rewritten for voice** — UI strings, tours,
      destinations, and blog/pricing-note text no longer read as
      AI-generated (cut heavy em-dash use, repeated "X, not Y" phrasing,
      and templated sentence structures). The other 5 languages still
      reflect the earlier wording pending the same pass.
- [x] **About page story** (`src/i18n/dictionaries/*.ts` → `about.intro`) —
      real founding story in place across all 6 languages: founded 2019 in
      Malindi by Dunnah, inspired by his father's tourism company Mavusho.
- [ ] Licensing/KATO membership note (`about.licensingNote`) is empty for
      now (blank, not shown on the page) — fill in once available.
- [ ] Testimonials on the homepage are placeholders — replace with real
      guest reviews.

## Domain / hosting

- [x] DNS at Hostinger points to GitHub Pages and is live at
      `dunnahadventures.com`. GitHub Pages source is set to GitHub Actions;
      `deploy-pages.yml` is the only workflow (the wizard-generated
      duplicate was removed).
