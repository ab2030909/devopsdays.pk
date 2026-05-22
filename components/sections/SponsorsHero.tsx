"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Particles from "../Particles";
import GridBackground from "../GridBackground";

export default function SponsorsHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div aria-hidden className="absolute inset-0 -z-10">
        <GridBackground />
        <div className="absolute inset-0 bg-radial-glow opacity-90" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-neon/20 blur-[160px]" />
        <Particles className="absolute inset-0 opacity-70" count={50} />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip mx-auto"
          >
            <Sparkles className="h-3 w-3" />
            Sponsorship Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl"
          >
            <span className="block gradient-text">Sponsor</span>
            <span className="block neon-text text-neon-glow">
              DevOps Days <span className="text-white/95">Pakistan 2026</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg text-ink/70 max-w-2xl mx-auto"
          >
            Back Pakistan&apos;s premier community-led DevOps & Agentic AI
            conference. Connect with 300+ engineers, AI builders, cloud
            architects, startups and technology leaders in Islamabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#sponsor-apply" className="btn-primary group">
              Become a Sponsor
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="/deck" className="btn-secondary">
              <Download className="h-4 w-4" />
              View Sponsorship Deck
            </a>
          </motion.div>

          {/* quick stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
          >
            {[
              { v: "300+", l: "Attendees" },
              { v: "10+", l: "Speakers" },
              { v: "30+", l: "Communities" },
              { v: "6", l: "Tracks" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-4">
                <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                  {s.v}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-ink/55">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
