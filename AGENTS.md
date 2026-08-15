# This is NOT the Next.js you know

This project runs Next.js 16.2.10 / React 19.2.4, which has real breaking
changes vs. most training data. Read `node_modules/next/dist/docs/` before
making framework-level changes, and see `NEXTJS-16-NOTES.md` for the
must-follow rules already applied throughout this codebase.

This is a fully static site (`output: "export"` in `next.config.ts`) —
no server, no API routes, no database. All content lives in
`src/data/*.ts` and `src/i18n/dictionaries/*.ts`. See `MEDIA-TODO.md` for
what's still a placeholder pending real assets from the site owner.
