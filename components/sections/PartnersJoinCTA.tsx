"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

export default function PartnersJoinCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 divider-glow" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[80%] bg-neon/10 blur-[140px] rounded-full" />
      </div>

      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12 text-center"
        >
          {/* bg accents */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-neon-glow via-neon to-neon-violet" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-cyan-400/40 via-neon-glow/40 to-fuchsia-400/40" />
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-neon-glow to-transparent" />

          <div className="relative">
            <div className="mx-auto h-12 w-12 rounded-xl bg-neon/10 border border-neon/30 grid place-items-center text-neon-glow">
              <Users className="h-5 w-5" />
            </div>

            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Join as a{" "}
              <span className="gradient-text">Community Partner</span>
            </h2>
            <p className="mt-4 text-ink/70 max-w-2xl mx-auto">
              Run your chapter&apos;s session, get a partner badge across our
              channels, and bring your community to the front row of
              Pakistan&apos;s biggest DevOps & Agentic AI gathering.
            </p>

            <div className="mt-8 flex justify-center">
              <a href="#partner-apply" className="btn-primary group">
                Apply as Community Partner
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
