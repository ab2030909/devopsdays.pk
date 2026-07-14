# DevOps Days Islamabad 2026

Pakistan's premier community-led DevOps & Agentic AI conference website.

**Islamabad · 19 September 2026**



---

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with a custom neon theme
- Framer Motion for animations
- lucide-react for icons
- Pure SVG / canvas visuals â€” no heavy 3D libs

---

## Getting started

You'll need **Node.js 18+** (20 LTS recommended) and **npm 9+**.

```bash
git clone https://github.com/ab2030909/devopsdays.pk.git
cd devopsdays.pk
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint + type-check
```

---

## Routes

| Path         | Page                                                        |
| ------------ | ----------------------------------------------------------- |
| `/`          | Home â€” hero, organizers, stats, about, tracks, venue, why attend, speakers, FAQ |
| `/sponsors`  | Sponsorship benefits and tier list                          |
| `/partners`  | Community partners grid + apply CTA                         |

---

## Project structure

```
app/                              Next.js routes
â”œâ”€â”€ layout.tsx                    Root layout, fonts, metadata
â”œâ”€â”€ page.tsx                      Home page composition
â”œâ”€â”€ globals.css                   Theme tokens + utilities
â”œâ”€â”€ sponsors/page.tsx
â”œâ”€â”€ partners/page.tsx
â”œâ”€â”€ robots.ts
â””â”€â”€ sitemap.ts

components/
â”œâ”€â”€ Navbar.tsx                    Route-aware sticky nav
â”œâ”€â”€ Logo.tsx                      Inline SVG mark
â”œâ”€â”€ PakistanMap.tsx               Hero artwork wrapper
â”œâ”€â”€ pakistanPaths.ts              Auto-generated province paths
â”œâ”€â”€ CountdownTerminal.tsx         Live countdown to 19 Sept 2026
â”œâ”€â”€ InfraVisual.tsx               Animated DevOps "control center"
â”œâ”€â”€ Particles.tsx                 Linked-dot canvas
â”œâ”€â”€ GridBackground.tsx
â”œâ”€â”€ Fireworks.tsx                 Canvas fireworks (venue panel)
â”œâ”€â”€ AnimatedCounter.tsx
â”œâ”€â”€ SectionHeader.tsx
â””â”€â”€ sections/
    â”œâ”€â”€ Hero.tsx
    â”œâ”€â”€ OrganizedBy.tsx
    â”œâ”€â”€ Stats.tsx
    â”œâ”€â”€ About.tsx
    â”œâ”€â”€ Tracks.tsx
    â”œâ”€â”€ WhyAttend.tsx
    â”œâ”€â”€ Speakers.tsx
    â”œâ”€â”€ Sponsors.tsx
    â”œâ”€â”€ SponsorsHero.tsx
    â”œâ”€â”€ PartnersHero.tsx
    â”œâ”€â”€ PartnersGrid.tsx          Edit COMMUNITY_PARTNERS here
    â”œâ”€â”€ PartnersJoinCTA.tsx
    â”œâ”€â”€ Venue.tsx                 Skyline + clouds + fireworks + floodlights
    â”œâ”€â”€ FAQ.tsx
    â””â”€â”€ Footer.tsx

public/                           Static assets
scripts/                          One-shot helper scripts (see below)
tailwind.config.ts
next.config.js
tsconfig.json
package.json
```

---

## Editing content

All copy and data lives in plain TypeScript at the top of each section
component. No CMS, no JSON glue.

| What                         | Where                                                |
| ---------------------------- | ---------------------------------------------------- |
| Hero heading + meta          | `components/sections/Hero.tsx`                       |
| Countdown target date        | `components/CountdownTerminal.tsx` â€” `TARGET` const  |
| Organizers (CNI / CNSP)      | `components/sections/OrganizedBy.tsx` â€” `organizers` |
| Stats numbers                | `components/sections/Stats.tsx` â€” `stats`            |
| About copy + pillars         | `components/sections/About.tsx`                      |
| Conference tracks            | `components/sections/Tracks.tsx` â€” `tracks`          |
| Why Attend audiences         | `components/sections/WhyAttend.tsx` â€” `audiences`    |
| Sponsor benefits + tiers     | `components/sections/Sponsors.tsx`                   |
| Community partners list      | `components/sections/PartnersGrid.tsx` â€” `COMMUNITY_PARTNERS` |
| FAQ Q&A                      | `components/sections/FAQ.tsx` â€” `faqs`               |
| Footer links + socials       | `components/sections/Footer.tsx`                     |

### Add a community partner

1. Drop the logo at `public/partners/<your-file>.png`.
2. Edit `COMMUNITY_PARTNERS` in `components/sections/PartnersGrid.tsx`:

   ```ts
   {
     name: "Your Community",
     logo: "/partners/your-file.png",
     tagline: "Cloud-native chapter",
     href: "https://example.com",
   }
   ```

   If `logo` is omitted, the card falls back to neon initials so you can
   add names first and logos later.

### Replace the hero artwork

Drop the new artwork at `public/hero-logo.png`, then regenerate the
transparent variant the site actually displays:

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

### Crop a logo to its content bounds

Useful when an upload has lots of empty transparent padding so it renders
too small inside its card.

```bash
node scripts/crop-png.mjs public/your-logo.png public/your-logo-cropped.png 16
```

The trailing `16` is the pixel padding to keep around the detected
non-transparent area.

### Regenerate the Pakistan map paths

The province outlines come from a one-shot GeoJSON-to-SVG pipeline:

```bash
# Drop a GeoJSON (raw or `var pak = {...}` JS-wrapper) at:
#   %TEMP%\pk-political.geojson    on Windows
node scripts/build-pk-political.mjs
```

This rewrites `components/pakistanPaths.ts`. Adjust the `TOL` constant
inside the script if you want a smoother or more detailed outline
(default is 0.6 px tolerance after Mercator projection to a 1000-px-wide
viewBox).

---

## Theme tokens

Defined in `tailwind.config.ts` and `app/globals.css`:

```
neon          #A855F7   primary accent
neon-violet   #9333EA   gradient stop
neon-glow     #C084FC   icons, light accents
neon-deep     #7E22CE
background    #050505
surface       #0A0A0A
ink           #F5F5F5
```

Re-usable utility classes:

`glass`, `glass-strong`, `neon-text`, `gradient-text`, `grid-bg`,
`mask-fade-y`, `mask-fade-x`, `divider-glow`, `chip`, `btn-primary`,
`btn-secondary`, `shadow-neon`, `shadow-neon-lg`,
`animate-marquee`, `animate-pulse-glow`, `animate-grid-move`,
`animate-shimmer`, `animate-scan-line`.

All animations respect `prefers-reduced-motion: reduce`.

---

## Accessibility

- Semantic heading hierarchy (`h1` per page, `h2` per section)
- Decorative SVGs marked `aria-hidden`, interactive icon buttons get `aria-label`
- AA-level contrast on text vs. dark surface
- Reduced-motion gating on every Framer hook, canvas loop, and CSS animation
- Keyboard-focusable links with a visible neon focus ring

Full WCAG validation requires manual testing with assistive tech and
expert review â€” this codebase aims for AA by default but isn't externally
audited.

---

## License

MIT.

### Asset attribution

- Pakistan administrative boundaries derived from
  [hqakhtar/PakistanMap](https://github.com/hqakhtar/PakistanMap) (MIT).
- Icons from [lucide-react](https://lucide.dev) (ISC).
- Fonts: Inter, Space Grotesk, JetBrains Mono â€” open licenses, served via
  `next/font`.
- Skyline and hero artwork: provided by the organizers.

---

## Built with Kiro

This site was designed, built, and iterated end-to-end with
[**Kiro**](https://kiro.dev) â€” the AI-powered IDE that lets developers
focus on system design and decisions while shipping faster. Kiro
scaffolded the Next.js app, generated the animated Pakistan political map
from public GeoJSON, built the live countdown, control-center panel,
fireworks and skyline, and wired up the routing and SEO.

---

**Building â€¢ Automating â€¢ Scaling Pakistan's Future**
