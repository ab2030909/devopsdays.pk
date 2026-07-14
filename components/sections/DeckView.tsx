"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Printer, ArrowLeft, Calendar, MapPin, CheckCircle2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*                              DATA                                   */
/* ------------------------------------------------------------------ */

const heroStats = [
  { v: "300+", l: "Attendees" },
  { v: "10+", l: "Speakers" },
  { v: "50+", l: "Communities" },
  { v: "6",   l: "Tracks" },
];

const tracks = [
  "DevOps & Automation",
  "Agentic AI",
  "Cloud & Platform Engineering",
  "DevSecOps",
  "SRE & Observability",
  "MLOps & AI Infrastructure",
];

const benefits = [
  ["Brand Visibility",     "On-stage, on-air, media wall and across all digital channels"],
  ["Recruitment",          "Direct access to Islamabad's fastest-growing engineering talent"],
  ["Technical Audience",   "Engineers, architects, AI builders and platform teams"],
  ["Product Showcasing",   "Demo to a focused, high-intent technical audience"],
  ["Social Promotions",    "Co-marketing across our channels and 50+ partner communities"],
  ["Ecosystem Recognition","Position your brand as a leader of national tech infrastructure"],
];

const UNIVERSAL = [
  "Logo on the main media wall",
  "Dedicated standee at the venue",
  "Pre-event dedicated social-media post",
  "Post-event dedicated social-media post",
];

const tiers = [
  {
    name: "Platinum",
    accent: "from-neon-glow via-neon to-neon-violet",
    badge: "bg-neon-glow/20 text-neon-glow",
    usd: "USD 1800",
    pkr: "≈ PKR 500,000",
    slots: "1 slot",
    exclusive: true,
    perks: [
      "Title sponsor name in the conference billing",
      "Exclusive Powered By placement everywhere.",
      "Co-branded backdrop on stage",
      "Logo on every digital and print asset",
      "Logo on conference t-shirts (front)",
      "4 dedicated social posts + 2 reels",
      "Newsletter feature, pre & post event",
      "Lead capture: full attendee opt-in list",
      "Custom activation (workshop / hackathon / lounge)",
      "Recruitment & talent-introduction privileges",
      "12 attendee passes",
    ],
  },
  {
    name: "Gold",
    accent: "from-yellow-200 via-amber-300 to-amber-500",
    badge: "bg-amber-400/20 text-amber-300",
    usd: "USD 1,100",
    pkr: "≈ PKR 300,000",
    slots: "2 slots",
    perks: [
      
      "Logo on stage backdrop & website",
      "Logo on conference t-shirts (sleeve)",
      "2 dedicated social posts",
      "Newsletter mention",
      "Lead capture from opt-in scans",
      "Recruitment & talent-introduction privileges",
      "10 attendee passes",
    ],
  },
  {
    name: "Silver",
    accent: "from-zinc-200 via-zinc-300 to-zinc-500",
    badge: "bg-zinc-400/20 text-zinc-300",
    usd: "USD 700",
    pkr: "≈ PKR 200,000",
    slots: "4 slots",
    perks: [
      "Logo on website + sponsors slide",
      "2 dedicated social post",
      "Mention in opening keynote",
      "Recruitment & talent-introduction privileges",
      "7 attendee passes",
    ],
  },
  {
    name: "Bronze",
    accent: "from-amber-500 via-orange-600 to-rose-700",
    badge: "bg-orange-500/20 text-orange-300",
    usd: "USD 500",
    pkr: "≈ PKR 140,000",
    perks: [
      "Logo on website",
      "Mention in the opening keynote",
      "Optional swag in attendee bag",
      "1 dedicated social post",
      "5 attendee passes",
    ],
  },
  {
    name: "Ecosystem",
    accent: "from-cyan-300 via-cyan-400 to-cyan-600",
    badge: "bg-cyan-400/20 text-cyan-300",
    usd: "USD 250",
    pkr: "≈ PKR 70,000",
    perks: [
      "Logo on community sponsors page",
      "Mention in the opening sponsor reel",
      "1 dedicated social post",
      "3 attendee pass",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*                           MAIN COMPONENT                            */
/* ------------------------------------------------------------------ */

export default function DeckView() {
  return (
    <main className="relative pb-24 print:pb-0">

      {/* toolbar — hidden on print */}
      <div className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-neon/15 print:hidden">
        <div className="container-px py-3 flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ink/60 hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
          <span className="ml-3 text-[11px] font-mono uppercase tracking-[0.28em] text-neon-glow hidden sm:block">
            DevOps Days Islamabad 2026 · Sponsorship Deck
          </span>
          <button onClick={() => window.print()} className="ml-auto btn-primary text-xs">
            <Printer className="h-4 w-4" /> Save as PDF
          </button>
        </div>
      </div>

      <article className="container-px mt-8 print:mt-0">
        <div className="mx-auto max-w-4xl space-y-20 print:space-y-12">

          {/* ====================================================
              COVER
          ==================================================== */}
          <section className="deck-page relative text-center pt-8 pb-12 print:pt-0">
            <CoverBackdrop />

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              className="relative chip mx-auto mb-6">
              Sponsorship Deck · 2026
            </motion.div>

            {/* logo — smaller on print to save vertical space */}
            <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] aspect-square print:max-w-[280px]">
              <Image
                src="/hero-logo.webp"
                alt="DevOps Days Islamabad 2026"
                fill priority
                sizes="(min-width: 640px) 440px, 90vw"
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 40px rgba(168,85,247,0.6)) drop-shadow(0 0 80px rgba(192,132,252,0.4))" }}
              />
            </div>

            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight">
              <span className="block gradient-text">DEVOPS DAYS</span>
              <span className="block neon-text text-neon-glow">
                ISLAMABAD <span className="text-white/95">2026</span>
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="relative mt-4 text-ink/65 max-w-xl mx-auto text-sm sm:text-base">
              Islamabad's premier community-led DevOps & Agentic AI conference.
              One day. Every engineer, AI builder and cloud architect in the room.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="relative mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink/65">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-neon-glow" /> Islamabad, Pakistan
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-neon-glow" /> 19 September 2026
              </span>
            </motion.div>

            {/* stat strip */}
            <div className="relative mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {heroStats.map((s) => <StatCard key={s.l} large={s.v} label={s.l} />)}
            </div>

            {/* organizer logos — kept in the same break-avoid block so
                they never split across pages when printing */}
            <div className="relative mt-10 break-inside-avoid">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-glow/80 mb-4">
                Organized By
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <OrgLogo src="/cni-cropped.png" alt="Cloud Native Islamabad" boost />
                <span className="hidden sm:block h-12 w-px bg-neon/25" />
                <OrgLogo src="/cnsp.png" alt="Cloud Native Security Pakistan" />
              </div>
            </div>
          </section>

          <DeckDivider label="01 · Opportunity" />

          {/* ====================================================
              01 — OPPORTUNITY
          ==================================================== */}
          <Section eyebrow="Why now" title="The Opportunity">
            <p>
              Islamabad is the fastest-growing technology hub in Pakistan — and Pakistan is at
              an inflection point. <strong>240+ million people</strong>, over{" "}
              <strong>60% under the age of 30</strong>, software exports past{" "}
              <strong>$3.2B in FY24</strong>, and a rapidly maturing engineering
              and AI community built on <strong>300+ active local groups</strong>.
            </p>
            <p>
              DevOps Days Islamabad 2026 is the single stage where this ecosystem comes
              together for one day. We&apos;re inviting select sponsors to claim
              their seat at the front.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              <StatCard large="240M+" label="People in Pakistan" />
              <StatCard large="60%+" label="Population under 30" />
              <StatCard large="$3.2B" label="Software exports FY24" />
            </div>
          </Section>

          {/* ====================================================
              02 — ABOUT
          ==================================================== */}
          <Section eyebrow="02 · The event" title="About the Conference">
            <p>
              A national community-led conference focused on{" "}
              <strong>DevOps, cloud-native systems, platform engineering,
              AI-powered automation, SRE, DevSecOps and Agentic AI</strong>.
              Hosted in Islamabad, co-organised by{" "}
              <strong>Cloud Native Islamabad</strong> and{" "}
              <strong>Cloud Native Security Pakistan</strong>.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mt-3 text-sm">
              {[
                "Technical sessions & lightning talks",
                "Engineering panel discussions",
                "Hands-on workshops",
                "Sponsor product showcases",
                "Community partner activations",
                "Networking & ecosystem collaboration",
              ].map((line) => (
                <div key={line} className="glass rounded-lg px-3 py-2 flex items-center gap-2 text-ink/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-neon-glow shrink-0" />
                  {line}
                </div>
              ))}
            </div>
          </Section>

          {/* ====================================================
              03 — AUDIENCE
          ==================================================== */}
          <Section eyebrow="03 · Audience" title="Who&apos;s in the Room">
            <p className="text-sm text-ink/60">
              Approximate share of the 300+ expected attendees.
            </p>
            <div className="space-y-3 mt-4">
              {[
                ["Engineers & developers", 45],
                ["Cloud architects & SREs", 15],
                ["AI / ML practitioners", 12],
                ["Platform engineers", 10],
                ["Founders & startup teams", 8],
                ["Students from top engineering universities", 7],
                ["Community organizers", 3],
              ].map(([label, pct]) => (
                <div key={label as string}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-ink/80">{label}</span>
                    <span className="font-mono tabular-nums text-neon-glow">{pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-neon/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-neon-violet via-neon to-neon-glow"
                      style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ====================================================
              04 — TRACKS
          ==================================================== */}
          <Section eyebrow="04 · Programme" title="Conference Tracks">
            <div className="grid sm:grid-cols-2 gap-3">
              {tracks.map((t, i) => (
                <div key={t} className="glass rounded-xl p-4 flex items-center gap-3">
                  <span className="font-mono text-xs tracking-[0.22em] text-neon-glow shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-ink/85">{t}</span>
                </div>
              ))}
            </div>
          </Section>

          <DeckDivider label="05 · Why Sponsor" />

          {/* ====================================================
              05 — BENEFITS
          ==================================================== */}
          <Section eyebrow="What you get" title="Why Sponsor">
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map(([t, d]) => (
                <div key={t as string} className="glass rounded-xl p-4">
                  <div className="font-semibold text-ink">{t}</div>
                  <div className="mt-1 text-sm text-ink/60">{d}</div>
                </div>
              ))}
            </div>
          </Section>

          <DeckDivider label="06 · Tiers" />

          {/* ====================================================
              06 — TIERS
          ==================================================== */}
          <Section eyebrow="Choose your level" title="Sponsorship Tiers">
            {/* universal perks banner */}
            <div className="glass-strong rounded-2xl p-5 mb-6">
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-neon-glow mb-3">
                Included with every tier
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {UNIVERSAL.map((u) => (
                  <div key={u} className="flex items-center gap-2 text-sm text-ink/80">
                    <CheckCircle2 className="h-4 w-4 text-neon-glow shrink-0" />
                    {u}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {tiers.map((t) => (
                <div key={t.name}
                  className="relative overflow-hidden rounded-2xl glass-strong p-5 sm:p-6 break-inside-avoid">
                  <div className={`pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${t.accent}`} />

                  {/* header row */}
                  <div className="relative flex flex-wrap items-center gap-3 mb-4">
                    <h3 className={`font-display text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${t.accent}`}>
                      {t.name}
                    </h3>
                    {t.slots && (
                      <span className={`text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded-full ${t.badge}`}>
                        {t.slots}
                      </span>
                    )}
                    {t.exclusive && (
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full">
                        Exclusive
                      </span>
                    )}
                    <div className="ml-auto text-right">
                      <div className="font-display font-bold text-lg sm:text-xl text-ink">{t.usd}</div>
                      <div className="text-xs text-ink/50">{t.pkr}</div>
                    </div>
                  </div>

                  {/* perks */}
                  <ul className="relative grid sm:grid-cols-2 gap-1.5 text-sm text-ink/75">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-neon-glow shrink-0 mt-0.5">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* ====================================================
              07 — REACH
          ==================================================== */}
          <Section eyebrow="07 · Amplification" title="Marketing & Reach">
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                "Website — devopsdays.pk",
                "LinkedIn pre-event campaign + day-of coverage",
                "X / Twitter daily reels & spotlights",
                "Instagram partner takeovers + reels",
                "Newsletter — pre and post-event editions",
                "50+ community partner channels cross-posting",
              ].map((line) => (
                <div key={line} className="glass rounded-lg px-3 py-2 flex items-center gap-2 text-ink/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-neon-glow shrink-0" />
                  {line}
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mt-5">
              <StatCard large="50K+" label="Estimated impressions" />
              <StatCard large="6 wks" label="Campaign window" />
              <StatCard large="50+" label="Partner communities" />
            </div>
          </Section>

          {/* ====================================================
              08 — HOW TO
          ==================================================== */}
          <Section eyebrow="08 · Next steps" title="How to Become a Sponsor">
            <div className="space-y-4">
              {[
                ["Reply to this deck", "Tell us which tier interests you — we respond within 24 hours."],
                ["Sign & deposit", "We send the agreement. You sign and pay a 50% deposit to lock your slot."],
                ["Onboarding kit", "Receive your brand-asset checklist, schedule and team contacts."],
                ["Day of the event", "Your brand is live. 300+ engineers in the room. We deliver."],
              ].map(([title, desc], i) => (
                <div key={title as string} className="flex gap-4 items-start">
                  <span className="font-display text-3xl font-bold gradient-text leading-none w-12 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-semibold text-ink/90">{title}</div>
                    <div className="text-sm text-ink/60">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ====================================================
              CLOSING
          ==================================================== */}
          <section className="deck-page relative text-center pt-8 pb-16">
            <CoverBackdrop />
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
                Let&apos;s build it{" "}
                <span className="gradient-text">together.</span>
              </h2>
              <p className="mt-5 text-ink/65 max-w-xl mx-auto">
                Reach out — we&apos;ll send the full partnership agreement within 48 hours.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="mailto:islamabad@devopsdays.org" className="btn-primary">
                  islamabad@devopsdays.org
                </a>
                <a href="tel:+923151537220" className="btn-secondary">
                  +92 315 1537220
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {heroStats.map((s) => <StatCard key={s.l} large={s.v} label={s.l} />)}
              </div>

              <p className="mt-10 text-[10px] font-mono uppercase tracking-[0.3em] text-ink/35">
                Building · Automating · Scaling Pakistan&apos;s Future
              </p>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-neon-glow/55">
                devopsdays.pk · DDP-26 · Islamabad 2026
              </p>

              <div className="mt-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-glow/80 mb-4">
                  Organized By
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <OrgLogo src="/cni-cropped.png" alt="Cloud Native Islamabad" boost />
                  <span className="hidden sm:block h-12 w-px bg-neon/25" />
                  <OrgLogo src="/cnsp.png" alt="Cloud Native Security Pakistan" />
                </div>
              </div>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*                          SUB-COMPONENTS                             */
/* ------------------------------------------------------------------ */

function Section({ eyebrow, title, children }: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="break-inside-avoid">
      {eyebrow && <div className="mb-3"><span className="chip">{eyebrow}</span></div>}
      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="mt-5 space-y-3 text-ink/80 leading-relaxed">{children}</div>
    </section>
  );
}

function DeckDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-neon" />
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-neon-glow whitespace-nowrap">
        {label ?? "DDP-26"}
      </span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-neon" />
    </div>
  );
}

function StatCard({ large, label }: { large: string; label: string }) {
  return (
    <div className="glass rounded-xl p-4 text-center">
      <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">{large}</div>
      <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.22em] text-ink/50">{label}</div>
    </div>
  );
}

function OrgLogo({ src, alt, boost = false }: { src: string; alt: string; boost?: boolean }) {
  return (
    <div className="relative h-20 sm:h-24 w-44 sm:w-56 flex items-center justify-center">
      <Image src={src} alt={alt} fill sizes="(min-width: 640px) 224px, 176px"
        className="object-contain"
        style={{ filter: boost
          ? "brightness(1.5) contrast(1.05) drop-shadow(0 0 14px rgba(192,132,252,0.45))"
          : "drop-shadow(0 0 12px rgba(192,132,252,0.35))"
        }}
      />
    </div>
  );
}

function CoverBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 print:opacity-40">
      <div className="absolute inset-0 grid-bg opacity-20 mask-fade-y" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[80%] bg-neon/15 blur-[140px] rounded-full" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-72 w-[60%] bg-neon-violet/15 blur-[120px] rounded-full" />
    </div>
  );
}
