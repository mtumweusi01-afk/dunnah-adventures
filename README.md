# Dunnah Adventures

Marketing website for Dunnah Adventures, a Kenya-based tours & safaris
operator. Built with Next.js 16 (App Router), static-exported and deployed
to GitHub Pages at [dunnahadventures.com](https://dunnahadventures.com).

## Stack

- Next.js 16 / React 19, TypeScript, Tailwind CSS 4
- Static export (`output: "export"`) — no server, no database
- Content in `src/data/*.ts` (tours, destinations, blog, pricing)
- i18n: English, Czech, Polish, Slovak, Danish, Norwegian (`src/i18n/`),
  routed via `/[locale]/...`
- Currency toggle: EUR / USD / KES, live rates via frankfurter.app with a
  hardcoded fallback

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs static site to ./out
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which
builds and publishes to GitHub Pages automatically.

See `MEDIA-TODO.md` for the checklist of placeholder content (logo, hero
image, contact details, pricing, translations) still pending real assets
from the site owner.
