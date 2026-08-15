# Next.js 16 / React 19.2 — breaking changes cheat sheet

Scaffolded with **Next.js 16.2.10 / React 19.2.4**, newer than most
training data. Full docs live in `node_modules/next/dist/docs/`.

## Must-follow rules for this codebase

1. **`params` and `searchParams` are always async** in `page.tsx`,
   `layout.tsx`, `route.ts`, `default.tsx`, and metadata generators. Always
   `await` them.
2. **No `middleware.ts`** — it's renamed `proxy.ts` (not used in this
   project; static export doesn't support it anyway).
3. **`next/image`**: use `images.remotePatterns`, never `images.domains`
   (removed). This project sets `images.unoptimized: true` since GitHub
   Pages has no image optimization server.
4. **No `next lint`** — the `lint` script uses the ESLint CLI directly.
5. **Turbopack is the default** for `next dev` and `next build` — no
   `--turbopack` flags, no webpack config.
6. All pages are **statically generated (SSG)** — every dynamic route has
   `generateStaticParams` (locale × slug). No `getServerSideProps`-style
   logic; this is a static-export site with no server.
7. `useSearchParams()` (used in the contact form to preset the tour field)
   must be wrapped in `<Suspense>` — already done in
   `src/app/[locale]/contact/page.tsx`.

## Data-layer decision

No database. All content (tours, destinations, blog posts, pricing) is
hand-authored in `src/data/*.ts`, localized per-field via
`Record<Locale, string>`. UI chrome strings live in
`src/i18n/dictionaries/{en,cs,pl}.ts`. See `MEDIA-TODO.md` for what's
still placeholder content.
