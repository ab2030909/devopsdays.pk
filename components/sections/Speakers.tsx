"use client";

import { motion } from "framer-motion";
import { Mic, ArrowRight } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function Speakers() {
  const placeholders = Array.from({ length: 6 });

  return (
    <section id="speakers" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[60%] bg-neon/10 blur-[120px] rounded-full" />
      </div>
      <div className="container-px">
        <SectionHeader
          eyebrow="Speakers"
          title={
            <>
              Speakers <span className="gradient-text">to be announced.</span>
            </>
          }
          description="We are curating a lineup of DevOps engineers, cloud architects, AI practitioners, founders, platform engineers, cybersecurity professionals, and technology leaders from Pakistan and beyond."
        />

        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-5 overflow-hidden hover:shadow-neon transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="aspect-square w-full rounded-xl border border-dashed border-neon/30 bg-neon/[0.04] grid place-items-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative h-16 w-16 rounded-full bg-neon/10 border border-neon/40 grid place-items-center text-neon-glow"
                >
                  <Mic className="h-6 w-6" />
                </motion.div>
                <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neon-glow/80">
                  status: pending_announcement
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Speaker {i + 1}</div>
                  <div className="text-xs text-ink/50">To be announced</div>
                </div>
                <span className="chip text-[10px]">2026</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#speaker-apply" className="btn-primary group">
            Apply as Speaker
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
