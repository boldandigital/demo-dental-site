# Demo Dental Site

Demo 3 in the **Bold & Digital scroll-narrative fleet**. A stub scaffold
forked from [`scroll-shared`](https://github.com/boldandigital/scroll-shared)
with a Sorridere Clinic brand layer, three new locale routes
(`/services`, `/team`, `/book`), placeholder copy, and lorem-style
content. No real dental copy, no head-tracking, no video — just the
brand swap and route shells so a designer / copy lead can drop in real
content later.

## What ships here

- **Next.js 16** App Router + **TypeScript strict**
- **Tailwind CSS 4** with the Sorridere Clinic palette (clinical blue
  `#0EA5E9`, warm gold `#F59E0B`, deep navy `#0F172A`) and CSS-variable
  dark mode
- **GSAP 3 + ScrollTrigger** registered globally, driven by the GSAP
  ticker
- **Lenis** smooth scroll wired into the ticker so ScrollTrigger stays
  in sync
- **next-intl v4** locale routing for **EN / NL / PT-BR**
- Inter for body, **Fraunces** as the display font (wired as
  `--font-fraunces`, exposed as `--font-display`)
- shadcn/ui initialized (only the Button primitive added — add more on demand)
- Accessibility-aware: `prefers-reduced-motion` disables Lenis

## Routes

| Path | Notes |
| --- | --- |
| `/[locale]` | Brand hero stub — H1 + tagline + magnetic CTA pointing at `/book` |
| `/[locale]/services` | `Services` section stub — 3 placeholder service cards |
| `/[locale]/team` | `Team` section stub — 2 placeholder profile cards (SVG avatar) |
| `/[locale]/book` | Booking page stub — title + subtitle + back-to-home CTA |

Middleware redirects `/` to the user's preferred locale (default `/en`).

## Components

| File | Purpose |
| --- | --- |
| `src/components/sections/Services.tsx` | Server component — 3-column service card grid from `clinic-constants.ts` |
| `src/components/sections/Team.tsx` | Server component — 2-column profile card grid from `clinic-constants.ts` |
| `src/components/ui/BookingCTA.tsx` | Client component — magnetic Link CTA, defaults to `href="#"` |
| `src/components/MagneticButton.tsx` | Inherited from scroll-shared — cursor-following button |
| `src/lib/clinic-constants.ts` | Placeholder clinic data (services list, team list, accent tokens) |
| `public/team/placeholder.svg` | SVG avatar placeholder used by every team card |

## Local dev

```bash
pnpm install        # or: npm install (if pnpm not available)
pnpm dev            # http://localhost:3000  → redirects to /en
pnpm build          # static prerender of all 12 (3 locales × 4 routes)
pnpm lint           # ESLint
```

Node ≥ 20 required. pnpm ≥ 9 (or npm ≥ 10).

## Deploy

Target: **`demo-dental.boldandigital.com`** (custom domain managed in the
Vercel project for `boldandigital/demo-dental-site`).

```bash
git push origin main    # triggers Vercel preview + production deploys
```

Once the custom domain is wired in the Vercel dashboard, the
`X-Robots-Tag: all` header from `next.config.ts` will let search
engines index the production URL.

## Architecture overview

Forked from `scroll-shared` to keep:

- **Shared infra:** `SmoothScrollProvider`, `SectionReveal`,
  `MagneticButton`, `DarkModeToggle`, `WhatsAppButton`, i18n routing
  & middleware.
- **Shared stack:** Next.js 16 (App Router, RSC, Turbopack default),
  React 19, GSAP 3 + ScrollTrigger (free version), Lenis 1.x,
  next-intl 4.x, shadcn/ui (base-nova preset, neutral base color,
  Lucide icons), Tailwind CSS 4, TypeScript 5 strict.

The brand layer (palette, display font, copy, route stubs) is the
per-vertical delta. Pull requests back to `scroll-shared` are only for
shared infra improvements.

## Styling tokens — Sorridere Clinic palette

| Token | Light | Dark | Used for |
| --- | --- | --- | --- |
| `--background` | `#FFFFFF` | `#0F172A` | Page background |
| `--foreground` | `#0F172A` | `#FFFFFF` | Primary text |
| `--primary` | `#0EA5E9` | `#0EA5E9` | CTA fill (clinical blue) |
| `--primary-foreground` | `#FFFFFF` | `#FFFFFF` | Text on primary |
| `--accent` | `#F59E0B` | `#F59E0B` | Accent (warm gold) |
| `--accent-foreground` | `#0F172A` | `#0F172A` | Text on accent |
| `--border` | `#E5E5E5` | `#1E293B` | Hairlines, dividers, button outlines |
| `--muted` | `#F4F6F8` | `#1E293B` | Subtle fills |
| `--muted-foreground` | `#64748B` | `#94A3B8` | Secondary text |
| `--surface` | `#FFFFFF` | `#0F172A` | Cards, popovers |
| `--card` | `#FFFFFF` | `#0F172A` | Card backgrounds |
| `--secondary` | `#F1F5F9` | `#1E293B` | Secondary fills |

Tailwind utilities like `bg-background`, `text-foreground`,
`border-border`, `text-muted-foreground`, `bg-primary`,
`text-primary-foreground`, `bg-accent`, `font-display` map directly
to these.

## Adding a new locale

1. Add the code to `src/i18n/routing.ts` → `locales: ["en", "nl", "pt-BR", "<new>"]`
2. Add `src/i18n/messages/<new>.json` (copy `en.json` and translate)
3. Restart the dev server
