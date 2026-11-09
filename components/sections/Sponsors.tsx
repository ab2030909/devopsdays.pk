"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Eye,
  Users2,
  Megaphone,
  Trophy,
  Briefcase,
  Sparkles,
  Download,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import SectionHeader from "../SectionHeader";
import { SPONSORS, type Sponsor } from "@/config/sponsors";

const benefits = [
  { icon: Eye, title: "Brand Visibility", desc: "On-stage, on-site, on-air, and across digital." },
  { icon: Briefcase, title: "Recruitment", desc: "Direct access to Pakistan's top engineering talent." },
  { icon: Users2, title: "Technical Audience", desc: "Engineers, architects, AI builders and platform teams." },
  { icon: Sparkles, title: "Product Showcasing", desc: "Demo to a focused, high-intent technical audience." },
  { icon: Megaphone, title: "Social Promotions", desc: "Co-marketing across our channels and partners." },
  { icon: Trophy, title: "Ecosystem Recognition", desc: "Position as a leader of national tech infrastructure." },
];

const tiers = [
  { name: "Platinum", accent: "from-neon-glow via-neon to-neon-violet", featured: true },
  { name: "Gold", accent: "from-yellow-200 via-amber-300 to-amber-500" },
  { name: "Silver", accent: "from-zinc-200 via-zinc-300 to-zinc-500" },
  { name: "Community", accent: "from-neon/60 via-neon/40 to-neon/20" },
  { name: "Startup Partner", accent: "from-cyan-300 via-cyan-400 to-cyan-600" },
  { name: "Venue Partner", accent: "from-fuchsia-300 via-fuchsia-400 to-fuchsia-600" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
        <div className="absolute -top-20 right-0 h-72 w-72 bg-neon/15 blur-[120px] rounded-full" />
      </div>
      <div className="container-px">
        {/* Confirmed Sponsors Showcase */}
        <div className="mx-auto max-w-7xl mb-24">
          <SectionHeader
            eyebrow="Backed By The Best"
            title={
              <>
                Our <span className="gradient-text">sponsors & partners.</span>
              </>
            }
            description="We are proud to collaborate with pioneering organizations supporting Pakistan's premier DevOps & Agentic AI conference."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPONSORS.map((s, i) => (
              <SponsorCard key={s.name} sponsor={s} index={i} />
            ))}
          </div>
        </div>

        <SectionHeader
          eyebrow="What We Offer"
          title={
            <>
              Sponsor <span className="gradient-text">benefits & tiers.</span>
            </>
          }
          description="Support Pakistan's growing engineering and AI ecosystem while connecting with developers, cloud engineers, startups, AI builders, and future technology leaders."
        />

        {/* Benefits */}
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="glass rounded-xl p-5 hover:shadow-neon transition-shadow group"
            >
              <div className="h-10 w-10 rounded-lg bg-neon/10 border border-neon/30 grid place-items-center text-neon-glow group-hover:scale-110 transition-transform">
                <b.icon className="h-4 w-4" />
              </div>
              <div className="mt-4 text-sm font-semibold">{b.title}</div>
              <div className="mt-1 text-xs text-ink/60">{b.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Tiers */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
              Sponsor Tiers
            </div>
            <div className="flex-1 divider-glow" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className={`relative rounded-2xl p-6 overflow-hidden glass-strong transition-all hover:shadow-neon-lg ${
                  t.featured ? "ring-1 ring-neon/50" : ""
                }`}
              >
                <div
                  className={`absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${t.accent}`}
                />
                <div className="flex items-center justify-between">
                  <div className={`text-xs font-mono uppercase tracking-[0.22em] bg-clip-text text-transparent bg-gradient-to-r ${t.accent}`}>
                    {t.name}
                  </div>
                  {t.featured && (
                    <span className="chip text-[10px]">Featured</span>
                  )}
                </div>
                <div className="mt-3 font-display text-2xl font-bold">
                  {t.name} Sponsor
                </div>
                <ul className="mt-5 space-y-2 text-sm text-ink/70">
                  <li className="flex gap-2">
                    <span className="text-neon-glow">▸</span> Logo placement & branding
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neon-glow">▸</span> On-stage & social mentions
                  </li>
                  <li className="flex gap-2">
                    <span className="text-neon-glow">▸</span> Talent & community access
                  </li>
                </ul>
                <a
                  href="#sponsor-apply"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-neon-glow hover:text-white transition-colors"
                >
                  Get full deliverables <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          <a href="#sponsor-apply" className="btn-primary group">
            Become a Sponsor
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="/deck" className="btn-secondary">
            <Download className="h-4 w-4" />
            View Sponsorship Deck
          </a>
        </div>
      </div>
    </section>
  );
}

function SponsorCard({ sponsor, index }: { sponsor: Sponsor; index: number }) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group relative h-full flex flex-col justify-between rounded-2xl glass-strong border border-neon/20 p-6 overflow-hidden transition-all hover:border-neon/50 hover:shadow-neon"
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity bg-gradient-to-br from-neon-glow via-neon to-neon-violet" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-neon-glow/50 to-transparent" />

      {/* Top tier badge */}
      <div className="flex items-center justify-between gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.18em] bg-neon/10 border border-neon/25 text-neon-glow">
          {sponsor.tier}
        </span>
        {sponsor.href && (
          <span className="text-ink/40 group-hover:text-neon-glow transition-colors">
            <ExternalLink className="h-3.5 w-3.5" />
          </span>
        )}
      </div>

      {/* Logo container */}
      <div className="relative h-24 sm:h-28 w-full flex items-center justify-center p-3 rounded-xl glass border border-neon/10 overflow-hidden group-hover:border-neon/30 transition-colors">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            fill
            sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 160px"
            className="object-contain filter drop-shadow-[0_0_10px_rgba(192,132,252,0.35)] group-hover:drop-shadow-[0_0_18px_rgba(192,132,252,0.65)] group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Sponsor info */}
      <div className="mt-5 text-center">
        <h3 className="font-display text-base font-semibold tracking-tight text-ink/95 group-hover:text-white transition-colors">
          {sponsor.name}
        </h3>
        {sponsor.tagline && (
          <p className="mt-1 text-xs text-ink/55 truncate">
            {sponsor.tagline}
          </p>
        )}
      </div>
    </motion.div>
  );

  if (sponsor.href) {
    return (
      <a
        href={sponsor.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-neon/40 rounded-2xl"
      >
        {card}
      </a>
    );
  }

  return card;
}
