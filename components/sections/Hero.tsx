"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Sparkles } from "lucide-react";
import GridBackground from "../GridBackground";
import Particles from "../Particles";
import PakistanMap from "../PakistanMap";
import CountdownTerminal from "../CountdownTerminal";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 sm:pt-28 lg:pt-24 pb-12"
    >
      {/* layered backgrounds */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <GridBackground />
        <div className="absolute inset-0 bg-radial-glow opacity-90" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-neon/20 blur-[160px]" />
        <Particles className="absolute inset-0 opacity-80" count={70} />

        {/* corner gradients */}
        <div className="absolute top-0 right-0 h-72 w-72 bg-neon/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-0 h-72 w-72 bg-neon-violet/15 blur-3xl rounded-full" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* text */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="chip mb-6"
            >
              <Sparkles className="h-3 w-3" />
              National DevOps & Agentic AI Conference
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.5rem]"
            >
              <span className="block gradient-text">DEVOPS DAYS</span>
              <span className="block neon-text text-neon-glow">
                PAKISTAN <span className="text-white/95">2026</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 lg:mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/70"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-neon-glow" />
                Islamabad, Pakistan
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-neon/30" />
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-neon-glow" />
                26 September 2026
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-neon/30" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-neon-glow/80">
                v.2026 · build.000
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-7 lg:mt-6 flex flex-wrap items-center gap-3"
            >
              <a href="/sponsors" className="btn-primary group">
                Become a Sponsor
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="/partners" className="btn-secondary">
                Become Community Partner
              </a>
              <a href="#waitlist" className="btn-secondary">
                Join Waitlist
              </a>
            </motion.div>

            {/* live countdown to Sept 26, 2026 */}
            <CountdownTerminal />
          </div>

          {/* map / visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:mt-20 xl:mt-28 2xl:mt-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square w-full max-w-[860px] mx-auto"
            >
              <PakistanMap className="absolute inset-0" />
            </motion.div>
          </div>
        </div>

        {/* marquee strip */}
        <div className="relative mt-10 sm:mt-14 lg:mt-10 mask-fade-x">
          <div className="flex w-max animate-marquee gap-12 text-xs font-mono uppercase tracking-[0.3em] text-ink/40">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                {[
                  "DevOps",
                  "Cloud Native",
                  "Platform Engineering",
                  "Agentic AI",
                  "DevSecOps",
                  "SRE",
                  "MLOps",
                  "Kubernetes",
                  "Observability",
                  "GitOps",
                  "Service Mesh",
                  "AI Infrastructure",
                ].map((w) => (
                  <span key={w} className="flex items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-neon" />
                    {w}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
