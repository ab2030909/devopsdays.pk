"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Printer,
  ArrowLeft,
  Calendar,
  MapPin,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const heroStats = [
  { v: "300+", l: "Attendees" },
  { v: "10+", l: "Speakers" },
  { v: "30+", l: "Communities" },
  { v: "6", l: "Tracks" },
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
  ["Brand visibility", "On-stage, on-site, on-air, and across digital"],
  ["Recruitment", "Direct access to Pakistan's top engineering talent"],
  ["Technical audience", "Engineers, architects, AI builders & platform teams"],
  ["Product showcasing", "Demo to a focused, high-intent technical audience"],
  ["Social promotions", "Co-marketing across our channels and partners"],
  ["Ecosystem recognition", "Position as a leader of national tech infrastructure"],
];

const tiers = [
  {
    name: "Platinum",
    accent: "from-neon-glow via-neon to-neon-violet",
    pkr: "PKR 1,500,000",
    usd: "≈ USD 5,400",
    slots: "1 slot",
    perks: [
      "Title sponsor — name in the conference billing",
      "20-min keynote on the main stage",
      "Premium booth in the highest-traffic zone",
      "Logo on every digital and print asset",
      "Logo on conference t-shirts (front)",
      "4 dedicated social posts + 2 reels",
      "Newsletter feature (pre & post event)",
      "Lead capture: full attendee opt-in list",
      "Custom activation (workshop / hackathon / lounge)",
      "8 attendee passes",
    ],
  },
  {
    name: "Gold",
    accent: "from-yellow-200 via-amber-300 to-amber-500",
    pkr: "PKR 800,000",
    usd: "≈ USD 2,900",
    slots: "3 slots",
    perks: [
      "10-min talk on a track stage",
      "Standard booth in the main expo",
      "Logo on stage backdrop & website",
      "Logo on conference t-shirts (sleeve)",
      "2 dedicated social posts",
      "Newsletter mention",
      "Lead capture from booth scans",
      "5 attendee passes",
    ],
  },
  {
    name: "Silver",
    accent: "from-zinc-200 via-zinc-300 to-zinc-500",
    pkr: "PKR 400,000",
    usd: "≈ USD 1,450",
    slots: "5 slots",
    perks: [
      "Booth in the silver zone",
      "Logo on website + sponsors slide",
      "1 dedicated social post",
      "Recruitment booth privileges",
      "3 attendee passes",
    ],
  },
  {
    name: "Community Sponsor",
    accent: "from-neon/60 via-neon/40 to-neon/20",
    pkr: "PKR 100,000",
    usd: "≈ USD 360",
    perks: [
      "Logo on community sponsors page",
      "Mention in opening keynote",
      "Optional swag in attendee bag",
      "2 attendee passes",
    ],
  },
  {
    name: "Startup Partner",
    accent: "from-cyan-300 via-cyan-400 to-cyan-600",
    pkr: "PKR 150,000",
    usd: "≈ USD 540",
    slots: "Early-stage only · < 5 yrs old",
    perks: [
      "Pitch slot in the startup showcase",
      "Demo table in the startup zone",
      "Logo on website",
      "Pre-event newsletter spotlight",
      "2 attendee passes",
    ],
  },
  {
    name: "Venue / In-kind Partner",
    accent: "from-fuchsia-300 via-fuchsia-400 to-fuchsia-600",
    pkr: "Bespoke",
    usd: "—",
    perks: [
      "For venue, AV, catering, hosting or cloud-credits providers",
      "Deliverables negotiated per scope",
      "Custom co-branding & on-site recognition",
    ],
  },
];

const addons = [
  ["Lounge / chillout zone branding", "PKR 200,000", "USD 720"],
  ["Coffee / break station branding", "PKR 150,000", "USD 540"],
  ["Lanyard branding (exclusive)", "PKR 250,000", "USD 900"],
  ["Attendee bag insert", "PKR 75,000", "USD 270"],
  ["Workshop slot (90 min)", "PKR 200,000", "USD 720"],
  ["Hackathon co-host", "PKR 350,000", "USD 1,260"],
  ["After-party co-host", "PKR 500,000", "USD 1,800"],
  ["Live-stream sponsor (exclusive)", "PKR 300,000", "USD 1,080"],
  ["Recruitment booth upgrade", "PKR 100,000", "USD 360"],
];

const timeline = [
  ["Sponsor onboarding opens", "Now"],
  ["Early-bird sponsor cut-off", "30 April 2026"],
  ["Sponsor logo lock-in for print", "31 July 2026"],
  ["Speaker line-up announcement", "August 2026"],
  ["Conference day", "26 September 2026"],
  ["Post-event sponsor report", "October 2026"],
];

export default function DeckView() {
  return (
    <main className="relative pb-24 print:pb-0">
      {/* top toolbar — hidden when printing */}
      <div className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-neon/15 print:hidden">
        <div className="container-px py-3 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ink/60 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="btn-primary text-xs"
            >
              <Printer className="h-4 w-4" />
              Save as PDF
            </button>
          </div>
        </div>
      </div>

      <article className="container-px mt-8 print:mt-0">
        <div className="mx-auto max-w-4xl space-y-20 print:space-y-12">
          {/* ==================================================== */}
          {/* COVER PAGE — full bleed feel, force own print page    */}
          {/* ==================================================== */}
          <section className="deck-page relative text-center pt-6 pb-10 print:pt-0">
            <CoverBackdrop />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative chip mx-auto"
            >
              Sponsorship Deck · 2026
            </motion.div>

            {/* hero logo — same artwork the home page uses */}
            <div className="relative mx-auto mt-8 mb-6 w-full max-w-md aspect-square">
              <Image
                src="/hero-logo.webp"
                alt="DevOps Days Pakistan 2026"
                fill
                priority
                sizes="(min-width: 768px) 480px, 90vw"
                className="object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 30px rgba(168,85,247,0.55)) drop-shadow(0 0 60px rgba(192,132,252,0.35))",
                }}
              />
            </div>

            <h1 className="relative font-display text-3xl sm:text-5xl font-bold tracking-tight">
              <span className="block gradient-text">DEVOPS DAYS</span>
              <span className="block neon-text text-neon-glow">
                PAKISTAN <span className="text-white/95">2026</span>
              </span>
            </h1>
            <p className="relative mt-5 text-ink/70 max-w-2xl mx-auto">
              Pakistan&apos;s premier community-led DevOps & Agentic AI
              conference. One day. The whole national engineering ecosystem in
              one room.
            </p>
            <div className="relative mt-5 inline-flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-neon-glow" />
                Islamabad, Pakistan
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-neon-glow" />
                26 September 2026
              </span>
            </div>

            <div className="relative mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {heroStats.map((s) => (
                <div key={s.l} className="glass rounded-xl p-4">
                  <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                    {s.v}
                  </div>
                  <div className="mt-1 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-ink/55">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* organizer crest strip */}
            <div className="relative mt-10 inline-flex items-center gap-4 sm:gap-6 glass rounded-full px-5 py-2.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-neon-glow/85">
                Organized By
              </span>
              <span className="h-5 w-px bg-neon/30" />
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm">
                <Cloud className="h-4 w-4 text-neon-glow" />
                Cloud Native Islamabad
              </span>
              <span className="hidden sm:inline-block h-5 w-px bg-neon/30" />
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm">
                <ShieldCheck className="h-4 w-4 text-neon-glow" />
                Cloud Native Security Pakistan
              </span>
            </div>
          </section>

          <DeckDivider label="01 · Opportunity" />

          {/* ==================================================== */}
          {/* OPPORTUNITY                                            */}
          {/* ==================================================== */}
          <Section title="The Opportunity" eyebrow="Why now">
            <p>
              Pakistan is at an inflection point.{" "}
              <strong>240+ million people</strong>, over{" "}
              <strong>60% under the age of 30</strong>, software exports past{" "}
              <strong>$3.2B</strong>, and a rapidly maturing engineering &amp;
              AI community across <strong>300+ active local groups</strong>.
            </p>
            <p>
              DevOps Days Pakistan 2026 is the single national stage where this
              fast-growing engineering, AI and infrastructure ecosystem comes
              together for one day in the country&apos;s capital. We&apos;re
              inviting select sponsors to back the moment.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mt-5">
              <Stat large="240M+" label="People in Pakistan" />
              <Stat large="60%+" label="Population under 30" />
              <Stat large="$3.2B" label="Software exports FY24" />
            </div>
          </Section>

          {/* ==================================================== */}
          {/* ABOUT                                                  */}
          {/* ==================================================== */}
          <Section title="About the Conference" eyebrow="02 · The event">
            <p>
              A national community-led conference focused on{" "}
              <strong>
                DevOps culture, cloud-native systems, platform engineering,
                AI-powered automation, SRE, DevSecOps, and Agentic AI
              </strong>
              . Hosted in Islamabad, organised by{" "}
              <strong>Cloud Native Islamabad</strong> and{" "}
              <strong>Cloud Native Security Pakistan</strong>.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 mt-4 text-sm">
              {[
                "Technical sessions & lightning talks",
                "Engineering panel discussions",
                "Hands-on workshops",
                "Sponsor showcases & product demos",
                "Community partner activations",
                "Networking & ecosystem collaboration",
              ].map((line) => (
                <li
                  key={line}
                  className="glass rounded-md px-3 py-2 text-ink/80"
                >
                  ▸ {line}
                </li>
              ))}
            </ul>
          </Section>

          {/* ==================================================== */}
          {/* AUDIENCE                                               */}
          {/* ==================================================== */}
          <Section title="Who's in the Room" eyebrow="03 · Audience">
            <p className="text-sm text-ink/60 mb-4">
              Approximate share of the 300+ expected attendees.
            </p>
            <div className="space-y-2.5">
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
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-ink/80">{label}</span>
                    <span className="font-mono tabular-nums text-neon-glow">
                      {pct}%
                    </span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-neon/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-neon-violet via-neon to-neon-glow"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ==================================================== */}
          {/* TRACKS                                                 */}
          {/* ==================================================== */}
          <Section title="Conference Tracks" eyebrow="04 · Programme">
            <ol className="grid sm:grid-cols-2 gap-3">
              {tracks.map((t, i) => (
                <li
                  key={t}
                  className="glass rounded-xl p-4 flex items-center gap-3"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-neon-glow shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/85 font-medium">{t}</span>
                </li>
              ))}
            </ol>
          </Section>

          <DeckDivider label="05 · Why Sponsor" />

          {/* ==================================================== */}
          {/* BENEFITS                                               */}
          {/* ==================================================== */}
          <Section title="Why Sponsor" eyebrow="What you get">
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map(([t, d]) => (
                <div key={t} className="glass rounded-xl p-4">
                  <div className="font-semibold">{t}</div>
                  <div className="mt-1 text-sm text-ink/65">{d}</div>
                </div>
              ))}
            </div>
          </Section>

          <DeckDivider label="06 · Tiers" />

          {/* ==================================================== */}
          {/* TIERS                                                  */}
          {/* ==================================================== */}
          <Section title="Sponsorship Tiers" eyebrow="Pick your level">
            <p className="text-xs text-ink/45 mb-5">
              All amounts are placeholders — replace with your final pricing.
            </p>
            <div className="space-y-4 print:space-y-3">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className="relative overflow-hidden rounded-2xl glass-strong p-5 sm:p-6 break-inside-avoid"
                >
                  <div
                    className={`pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl opacity-25 bg-gradient-to-br ${t.accent}`}
                  />
                  <div className="relative flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3
                      className={`font-display text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${t.accent}`}
                    >
                      {t.name}
                    </h3>
                    <span className="text-sm sm:text-base font-mono text-ink/85">
                      {t.pkr}
                    </span>
                    <span className="text-xs sm:text-sm text-ink/55">
                      {t.usd}
                    </span>
                    {t.slots && (
                      <span className="ml-auto text-[10px] font-mono uppercase tracking-[0.2em] text-neon-glow/85">
                        {t.slots}
                      </span>
                    )}
                  </div>
                  <ul className="relative mt-4 grid sm:grid-cols-2 gap-1.5 text-sm text-ink/80">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-neon-glow shrink-0">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* ==================================================== */}
          {/* ADD-ONS                                                */}
          {/* ==================================================== */}
          <Section title="Add-ons & Activations" eyebrow="07 · Stack on top">
            <p className="text-sm text-ink/65 mb-3">
              Stack any of these on top of a base tier.
            </p>
            <div className="overflow-hidden rounded-xl border border-neon/15">
              <table className="w-full text-sm">
                <thead className="bg-neon/[0.05]">
                  <tr className="text-left">
                    <th className="py-2 px-3 font-mono uppercase tracking-[0.18em] text-[11px] text-neon-glow/85">
                      Add-on
                    </th>
                    <th className="py-2 px-3 font-mono uppercase tracking-[0.18em] text-[11px] text-neon-glow/85">
                      PKR
                    </th>
                    <th className="py-2 px-3 font-mono uppercase tracking-[0.18em] text-[11px] text-neon-glow/85">
                      USD
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neon/10">
                  {addons.map(([n, p, u]) => (
                    <tr key={n}>
                      <td className="py-2 px-3 text-ink/80">{n}</td>
                      <td className="py-2 px-3 font-mono tabular-nums text-ink/85">
                        {p}
                      </td>
                      <td className="py-2 px-3 font-mono tabular-nums text-neon-glow">
                        {u}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ==================================================== */}
          {/* REACH                                                  */}
          {/* ==================================================== */}
          <Section title="Marketing & Reach" eyebrow="08 · Amplification">
            <p>Sponsors are amplified across:</p>
            <ul className="grid sm:grid-cols-2 gap-2 mt-3 text-sm">
              {[
                "Website — devopsdays.pk",
                "LinkedIn pre-event campaign + day-of coverage",
                "X / Twitter daily reels & spotlights",
                "Instagram partner takeovers + reels",
                "YouTube — talk recordings retain sponsor branding",
                "Newsletter — pre and post-event editions",
                "Community partner channels (30+ groups cross-post)",
              ].map((line) => (
                <li
                  key={line}
                  className="glass rounded-md px-3 py-2 text-ink/80"
                >
                  ▸ {line}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              <Stat large="50K+" label="Total impressions" />
              <Stat large="6 weeks" label="Campaign window" />
              <Stat large="30+" label="Cross-posting communities" />
            </div>
          </Section>

          {/* ==================================================== */}
          {/* TIMELINE                                               */}
          {/* ==================================================== */}
          <Section title="Timeline" eyebrow="09 · Roadmap">
            <div className="overflow-hidden rounded-xl border border-neon/15">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-neon/10">
                  {timeline.map(([m, d]) => (
                    <tr key={m}>
                      <td className="py-2.5 px-3 text-ink/80">{m}</td>
                      <td className="py-2.5 px-3 font-mono tabular-nums text-neon-glow text-right">
                        {d}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ==================================================== */}
          {/* HOW TO                                                 */}
          {/* ==================================================== */}
          <Section title="How to Become a Sponsor" eyebrow="10 · Next steps">
            <ol className="space-y-3">
              {[
                "Reply to this deck indicating your tier of interest.",
                "We send the partnership agreement within 48 hours.",
                "You sign + pay 50% deposit. Remainder due 30 days before event.",
                "Onboarding kit shared: brand-asset checklist, schedule, contacts.",
                "Your team flies in. We deliver. Pakistan's DevOps moment happens.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-display text-2xl font-bold gradient-text leading-none w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/85 text-sm sm:text-base">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Section>

          {/* ==================================================== */}
          {/* CLOSING SLIDE                                          */}
          {/* ==================================================== */}
          <section className="deck-page relative text-center pt-6 pb-12">
            <CoverBackdrop />
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">
                Let&apos;s build it{" "}
                <span className="gradient-text">together.</span>
              </h2>
              <p className="mt-5 text-ink/70 max-w-xl mx-auto text-sm sm:text-base">
                Reach out and we&apos;ll send the full partnership agreement
                within 48 hours.
              </p>
              <a
                href="mailto:hello@devopsdays.pk"
                className="mt-8 inline-flex btn-primary text-sm"
              >
                hello@devopsdays.pk
              </a>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {heroStats.map((s) => (
                  <div key={s.l} className="glass rounded-xl p-4">
                    <div className="font-display text-2xl font-bold gradient-text">
                      {s.v}
                    </div>
                    <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-ink/55">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-[10px] font-mono uppercase tracking-[0.32em] text-ink/40">
                Building · Automating · Scaling Pakistan&apos;s Future
              </div>
              <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neon-glow/60">
                devopsdays.pk · DDP-26
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

/* ----------------------------------------------------------------- */
/*                            sub-components                          */
/* ----------------------------------------------------------------- */

function Section({
  number: _number,
  title,
  eyebrow,
  children,
}: {
  number?: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="break-inside-avoid">
      {eyebrow && (
        <div className="mb-3">
          <span className="chip">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-ink/80 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function DeckDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-neon" />
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-neon-glow whitespace-nowrap">
        {label ?? "DDP-26"}
      </span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-neon" />
    </div>
  );
}

function Stat({ large, label }: { large: string; label: string }) {
  return (
    <div className="glass rounded-xl p-4 text-center">
      <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
        {large}
      </div>
      <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.22em] text-ink/55">
        {label}
      </div>
    </div>
  );
}

/** Decorative backdrop used on cover and closing pages. */
function CoverBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 print:opacity-50">
      <div className="absolute inset-0 grid-bg opacity-25 mask-fade-y" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[80%] bg-neon/15 blur-[140px] rounded-full" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-72 w-[60%] bg-neon-violet/15 blur-[120px] rounded-full" />
    </div>
  );
}
