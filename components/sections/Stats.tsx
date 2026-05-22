"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const stats = [
  { value: 300, suffix: "+", label: "Expected Attendees" },
  { value: 10, suffix: "+", label: "Speakers" },
  { value: 30, suffix: "+", label: "Communities" },
  { value: 6, suffix: "+", label: "Tracks" },
  { value: 1, suffix: "", label: "National DevOps Movement" },
];

export default function Stats() {
  return (
    <section className="relative py-20 sm:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 divider-glow" />
      <div className="container-px">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group relative glass rounded-2xl p-5 sm:p-6 overflow-hidden hover:shadow-neon transition-shadow"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-neon/10 blur-2xl group-hover:bg-neon/20 transition-colors" />
                <div className="relative">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-text">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-ink/55">
                    {s.label}
                  </div>
                </div>
                <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 divider-glow" />
    </section>
  );
}
