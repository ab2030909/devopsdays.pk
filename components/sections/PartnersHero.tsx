"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Particles from "../Particles";
import GridBackground from "../GridBackground";

export default function PartnersHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-36 sm:pb-16">
      <div aria-hidden className="absolute inset-0 -z-10">
        <GridBackground />
        <div className="absolute inset-0 bg-radial-glow opacity-90" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-neon/20 blur-[160px]" />
        <Particles className="absolute inset-0 opacity-70" count={45} />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip mx-auto"
          >
            <Sparkles className="h-3 w-3" />
            Community Partners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl"
          >
            <span className="block gradient-text">Powered by</span>
            <span className="block neon-text text-neon-glow">
              Pakistan&apos;s <span className="text-white/95">Communities</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg text-ink/70 max-w-2xl mx-auto"
          >
            Student chapters, cloud communities, developer groups, AI
            communities, cybersecurity chapters, and open-source organisations
            from across Pakistan.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
