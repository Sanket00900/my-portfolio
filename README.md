# sanket-portfolio

Personal portfolio — Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.
One fast, statically generated page with light/dark themes, scroll animations and a full SEO layer.

## Run it

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

Production build: `npm run build && npm start`. Also: `npm run lint`, `npm run typecheck`.

Deploy anywhere that runs Next.js (Vercel is zero-config). Set `NEXT_PUBLIC_SITE_URL` to the real domain there.

## Make it yours

Everything you'd edit is in **`src/content/index.ts`** — every `[bracketed]` value is a placeholder.

| What | Where |
| --- | --- |
| Name, role, intro, socials, stats, skills | `profile` in `src/content/index.ts` |
| Section headlines & subtitles | `sections` |
| Projects (branch graph) | `projects` — `lane` 1–4 picks the branch colour; add `href` to link a case study |
| Jobs (branch graph) | `jobs` — `end: null` marks the current role (open branch) |
| Colleague testimonials | `testimonials` |
| Freelance gigs + client quotes | `gigs` |
| Off the clock | `life` |
| Photo | add `public/images/…` and set `profile.photo` |
| Résumé | add `public/resume.pdf` |
| Colours (light + dark) | CSS variables at the top of `src/app/globals.css` |
| Logo | `src/components/Logo.tsx` (+ `src/app/icon.svg`, `src/lib/logo-svg.ts`) |

## What's in it

**SEO**
- Metadata API: title template, description, canonical URL, Open Graph (`profile`), Twitter card, robots directives, Search Console verification via env.
- JSON-LD graph: `WebSite` + `ProfilePage` + `Person` (+ projects as `CreativeWork`) — `src/lib/structured-data.ts`.
- Generated `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicon (SVG), Apple icon and a 1200×630 social share image.
- `/llms.txt` — a plain-text summary for AI search engines and assistants.
- Server-rendered HTML for every word of content (no client-only text), one `<h1>`, semantic sections with labelled headings, skip link, self-hosted fonts (no layout shift), `next/image` for the photo.

**Motion**
- Native CSS scroll-driven animations (`animation-timeline: view()`) for reveals, branch lines drawing and commit dots; an IntersectionObserver fallback (`RevealObserver`) gives other browsers the same motion. Nothing is hidden without JavaScript.
- Theme switch: circular reveal from the toggle button via the View Transitions API, with a colour-flood fallback. Shortcut: **T**.
- Per-item nav hover animations (Off the clock gets its own motorbike-on-a-road animation), animated "Branch S" logo, pressable contact keycaps.
- Everything respects `prefers-reduced-motion`.

**Stack notes**
- React Compiler enabled (`reactCompiler: true`) — no manual memoisation.
- `next-themes` for system-aware theming without a flash of the wrong theme.
- No animation library: CSS + a few lines of client code keep the JS bundle tiny.

## Project structure

```
src/
  app/            layout, page, globals.css, SEO routes (sitemap, robots, manifest, OG image, llms.txt)
  components/
    header/       sticky glass header, scroll-spy, mobile menu
    sections/     Hero, Marquee, Work, Experience, Testimonials, Freelance, OffTheClock, Contact, Footer
    theme/        ThemeProvider, ThemeToggle
  content/        all copy + types
  lib/            site config, structured data, logo SVG
```

## Before launch

- [ ] Replace every `[placeholder]` in `src/content/index.ts` (and write your own section headlines)
- [ ] Add `public/resume.pdf` and your photo
- [ ] Set `NEXT_PUBLIC_SITE_URL` in production
- [ ] Submit `https://your-domain/sitemap.xml` in Google Search Console
- [ ] Check the share card with the LinkedIn Post Inspector and the structured data with Google's Rich Results Test
# my-portfolio
