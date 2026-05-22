# DevOps Days Pakistan 2026

Pakistan's premier community-led DevOps & Agentic AI conference website.

**Islamabad · 26 September 2026**

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom neon theme)
- Framer Motion (animations)
- lucide-react (icons)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Routes

- `/` — home (hero, organizers, stats, about, tracks, venue, why attend, speakers, FAQ)
- `/sponsors` — sponsorship benefits & tiers
- `/partners` — community partners grid

## Deploy on Vercel

1. Push this repo to GitHub.
2. Visit https://vercel.com/new and import the repo.
3. Framework preset auto-detects as **Next.js**. Defaults are fine — no env vars required for the basic site.
4. Click **Deploy**.

Optional environment variable (set in Vercel project settings):

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Edit content

- Stats (home page): `components/sections/Stats.tsx`
- Tracks: `components/sections/Tracks.tsx`
- FAQ: `components/sections/FAQ.tsx`
- Sponsors benefits & tiers: `components/sections/Sponsors.tsx`
- Community partners list: `components/sections/PartnersGrid.tsx` (`COMMUNITY_PARTNERS` array)
- Organizer logos: `public/cni.png`, `public/cnsp.png`
- Skyline image: `public/skyline.png` (then run `scripts/remove-black-bg.ps1` to refresh transparent variant)
- Hero logo image: `public/hero-logo.png`

## Asset attribution

- Pakistan map outline data in `components/pakistanPaths.ts` is generated from
  [hqakhtar/PakistanMap](https://github.com/hqakhtar/PakistanMap) (MIT) via
  `scripts/build-pk-political.mjs`.
