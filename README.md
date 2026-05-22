<div align="center">

# DevOps Days Pakistan 2026

**Pakistan's premier community-led DevOps & Agentic AI conference**

Islamabad · 26 September 2026

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06b6d4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0080?logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/new)
[![License: MIT](https://img.shields.io/badge/License-MIT-A855F7.svg)](#license)

A futuristic, neon-purple dark-mode marketing site for the national DevOps,
Cloud, Platform Engineering and Agentic AI conference happening in Islamabad.

</div>

---

## ✨ Highlights

- **Cinematic hero** with a glowing Pakistan map / DevOps infinity logo,
  particle field, animated grid background, mouse-tracked tilt and a
  live countdown to **26 Sept 2026**
- **Animated Islamabad skyline** in the venue panel — Faisal Mosque,
  Pindi Stadium, and Pakistan Monument with stadium floodlights, drifting
  clouds and small fireworks bursting overhead
- **Animated Pakistan political map** (full Kashmir region) generated from
  GeoJSON with neon stroke draw-on and pulsing Islamabad pin
- **DevOps control-center** panel in the about section with a ticking KPI
  strip, sequencing pipeline rail, tech-stack chips and a streaming log feed
- **6 sponsor benefits** in a 3 × 2 grid + **6 sponsor tiers** (Platinum →
  Venue Partner) with hover halo accents
- **12-slot community partner grid** with optional logo / fallback initials
- **Animated FAQ accordion**, custom counters, marquee tech-keyword strip
- **Three routes**: `/`, `/sponsors`, `/partners`
- **SEO**: metadata, OpenGraph, Twitter cards, sitemap, robots
- **Accessibility**: respects `prefers-reduced-motion` everywhere
- **Performance**: pure SVG / canvas, no heavy 3D libs, lazy-evaluated stats

> Built with [**Kiro**](https://kiro.dev) — an AI-powered IDE that lets you
> design, plan, and ship apps end-to-end through conversation.

---

## 🧰 Tech Stack

| Area              | Tool                          |
| ----------------- | ----------------------------- |
| Framework         | **Next.js 14** (App Router)   |
| Language          | **TypeScript**                |
| Styling           | **Tailwind CSS** (custom neon theme) |
| Animations        | **Framer Motion**             |
| Icons             | **lucide-react**              |
| Map data          | GeoJSON → SVG (Mercator + Douglas-Peucker simplification) |
| Hosting           | **Vercel** (recommended)      |

---

## 🗂️ Routes

| Path         | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| `/`          | Hero, Organized By, Stats, About, Tracks, Venue, Why Attend, Speakers, FAQ |
| `/sponsors`  | Sponsor benefits, six-tier pricing, deck CTA                   |
| `/partners`  | 12-slot community partner grid + Apply CTA                     |

---

## 🚀 Quickstart

### Prerequisites

- **Node.js 18+** (20 LTS recommended)
- **npm 9+** (or pnpm / yarn — examples below use npm)

### Install & run

```bash
git clone https://github.com/ab2030909/devopsdays.pk.git
cd devopsdays.pk
npm install
npm run dev
```

Open **http://localhost:3000**.

### Build for production

```bash
npm run build
npm run start
```

### Lint / type-check

```bash
npm run lint
```

---

## 🌐 Deploy on Vercel

1. Push the repo to GitHub (already done if you cloned this one).
2. Visit https://vercel.com/new and **Import Git Repository**.
3. Pick `devopsdays.pk` — Vercel auto-detects **Next.js**, no config needed.
4. Click **Deploy**.

Optional environment variable:

```
NEXT_PUBLIC_SITE_URL=https://devopsdays.pk
```

Set it in **Project Settings → Environment Variables** if you serve from
a custom domain — used for OG/SEO metadata.

---

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Home page composition
│   ├── globals.css             # Theme tokens, glass / neon utilities
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── sponsors/page.tsx       # /sponsors route
│   └── partners/page.tsx       # /partners route
│
├── components/
│   ├── Navbar.tsx              # Route-aware sticky nav
│   ├── Logo.tsx                # Inline SVG mark
│   ├── PakistanMap.tsx         # Hero artwork wrapper (image + halo + scan line)
│   ├── pakistanPaths.ts        # Auto-generated province path data
│   ├── CountdownTerminal.tsx   # Live terminal-style countdown
│   ├── InfraVisual.tsx         # DevOps control-center panel
│   ├── Particles.tsx           # Linked dot canvas
│   ├── GridBackground.tsx
│   ├── Fireworks.tsx           # Canvas fireworks for venue panel
│   ├── AnimatedCounter.tsx
│   ├── SectionHeader.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── OrganizedBy.tsx
│       ├── Stats.tsx
│       ├── About.tsx
│       ├── Tracks.tsx
│       ├── WhyAttend.tsx
│       ├── Speakers.tsx
│       ├── Sponsors.tsx        # Used on /sponsors page
│       ├── SponsorsHero.tsx    # /sponsors hero
│       ├── PartnersHero.tsx    # /partners hero
│       ├── PartnersGrid.tsx    # 12-slot grid + COMMUNITY_PARTNERS array
│       ├── PartnersJoinCTA.tsx
│       ├── Venue.tsx           # Skyline + clouds + fireworks + floodlights
│       ├── FAQ.tsx
│       └── Footer.tsx
│
├── public/
│   ├── favicon.svg
│   ├── hero-logo-transparent.png
│   ├── skyline.png + skyline-transparent.png
│   ├── cni.png + cni-cropped.png
│   └── cnsp.png
│
├── scripts/
│   ├── build-pk-political.mjs  # Regenerates components/pakistanPaths.ts
│   ├── crop-png.mjs            # Crops a PNG to its non-transparent bbox
│   ├── inspect-pngs.mjs
│   ├── sample-png.mjs
│   └── remove-black-bg.ps1     # Drops black pixels from PNGs to alpha
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ✏️ Editing Content

Most copy and data lives in plain TypeScript arrays at the top of each
section component — no CMS yet, no JSON glue.

| What                         | Where                                                |
| ---------------------------- | ---------------------------------------------------- |
| Hero heading + meta          | `components/sections/Hero.tsx`                       |
| Countdown target date        | `components/CountdownTerminal.tsx` (`TARGET` const)  |
| Organizers (CNI / CNSP)      | `components/sections/OrganizedBy.tsx` (`organizers`) |
| Stats numbers                | `components/sections/Stats.tsx` (`stats`)            |
| About copy + pillars         | `components/sections/About.tsx`                      |
| Conference tracks            | `components/sections/Tracks.tsx` (`tracks`)          |
| Why Attend audiences         | `components/sections/WhyAttend.tsx` (`audiences`)    |
| Sponsor benefits + tiers     | `components/sections/Sponsors.tsx`                   |
| **Community partners list**  | `components/sections/PartnersGrid.tsx` (`COMMUNITY_PARTNERS`) |
| FAQ Q&A                      | `components/sections/FAQ.tsx` (`faqs`)               |
| Footer links / socials       | `components/sections/Footer.tsx`                     |

### Replace the hero artwork

Drop a new image at `public/hero-logo.png` (the visible image is
`hero-logo-transparent.png`; regenerate with the script below if you swap
the source).

```bash
powershell -ExecutionPolicy Bypass -File scripts/remove-black-bg.ps1 \
  -Source public/hero-logo.png \
  -Dest public/hero-logo-transparent.png
```

### Replace the venue skyline

```bash
powershell -ExecutionPolicy Bypass -File scripts/remove-black-bg.ps1 \
  -Source public/skyline.png \
  -Dest public/skyline-transparent.png
```

### Add a community partner with a logo

1. Drop the logo at `public/partners/<your-file>.png`
2. Edit the `COMMUNITY_PARTNERS` array in
   `components/sections/PartnersGrid.tsx`:

```ts
{
  name: "Your Community",
  logo: "/partners/your-file.png",
  tagline: "Cloud-native chapter",
  href: "https://example.com",
}
```

If `logo` is omitted, the card falls back to neon initials so you can
populate names first and add logos later.

### Regenerate the Pakistan map paths

The province outlines used in the animated map come from a one-shot
GeoJSON-to-SVG pipeline:

```bash
# Drop a GeoJSON with `pak` JS-wrapper or pure feature collection at:
#   %TEMP%\pk-political.geojson  (Windows)
node scripts/build-pk-political.mjs
```

This regenerates `components/pakistanPaths.ts` (~25 KB after Douglas-Peucker
simplification at 0.6 px tolerance).

---

## 🎨 Design System

The theme lives in `tailwind.config.ts` + `app/globals.css`.

```ts
neon:        "#A855F7"  // primary accent
neon-violet: "#9333EA"  // gradient stop
neon-glow:   "#C084FC"  // light accent / icons
neon-deep:   "#7E22CE"
background:  "#050505"
surface:     "#0A0A0A"
ink:         "#F5F5F5"
```

Re-usable utilities: `glass`, `glass-strong`, `neon-text`, `gradient-text`,
`grid-bg`, `mask-fade-y`, `mask-fade-x`, `divider-glow`, `chip`,
`btn-primary`, `btn-secondary`, `shadow-neon`, `shadow-neon-lg`,
`animate-marquee`, `animate-pulse-glow`, `animate-grid-move`,
`animate-shimmer`, `animate-scan-line`.

All animations are gated behind `prefers-reduced-motion: reduce`.

---

## ♿ Accessibility

- Semantic HTML headings hierarchy (`h1` per page, `h2` per section)
- `aria-label`s on every interactive icon button and decorative SVG marked
  `aria-hidden`
- Color contrast meets WCAG AA on text vs. dark surface
- Reduced-motion gating on every animation hook (Framer + canvas + CSS)
- Keyboard focusable links (`focus:ring-2 focus:ring-neon/50`)

> Note: Full WCAG validation requires manual testing with assistive
> technologies and expert review — this codebase aims for AA-level by
> default but isn't externally audited.

---

## 📄 License

MIT © DevOps Days Pakistan organizing committee.

### Asset attribution

- Pakistan administrative boundaries: derived from
  [hqakhtar/PakistanMap](https://github.com/hqakhtar/PakistanMap) (MIT).
- Icons: [lucide-react](https://lucide.dev) (ISC).
- Fonts: [Inter](https://fonts.google.com/specimen/Inter),
  [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk),
  [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
  (all open licenses, served via `next/font`).
- Skyline & hero artwork: provided by the organizers.

---

## 🛠️ Built with Kiro

This site was designed, built, and iterated end-to-end with
[**Kiro**](https://kiro.dev) — the AI-powered IDE that lets developers
focus on system design and decisions while shipping faster.

From the first scaffold to the deployed Vercel build, Kiro:

- Scaffolded the Next.js app and the Tailwind / motion theme
- Generated the animated Pakistan political map from public GeoJSON
- Built the live countdown, control-center panel, fireworks, and skyline
- Wired up routing, navigation, SEO metadata, and the Vercel-ready repo

If you want to remix this site for your own conference / community,
clone it and tell Kiro what to change.

---

<div align="center">

**Building • Automating • Scaling Pakistan&apos;s Future**

</div>
