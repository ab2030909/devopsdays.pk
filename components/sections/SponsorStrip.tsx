"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { SPONSORS, type Sponsor } from "@/config/sponsors";

interface SponsorStripProps {
  className?: string;
}

/**
 * Compact, full-color logo marquee strip.
 * Clicking any logo opens an elegant mini-popup preview without redirecting.
 */
export default function SponsorStrip({ className = "" }: SponsorStripProps) {
  const [selected, setSelected] = useState<Sponsor | null>(null);

  // Multiply so it loops seamlessly on wide screens
  const half = [...SPONSORS, ...SPONSORS, ...SPONSORS];
  const loop = [...half, ...half];

  return (
    <>
      <div className={`relative w-full overflow-hidden ${className}`}>
        <div className="relative mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-6 sm:gap-10 hover:[animation-play-state:paused]">
            {loop.map((s, i) => (
              <SponsorLogoTile
                key={`${s.name}-${i}`}
                sponsor={s}
                onSelect={() => setSelected(s)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mini popup on click */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 12 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
              className="relative w-full max-w-sm rounded-2xl glass-strong border border-neon/30 p-6 shadow-neon-lg overflow-hidden text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full glass hover:bg-neon/20 text-ink/70 hover:text-white transition-all"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-neon-glow to-neon-violet" />

              {/* Logo display */}
              <div className="relative h-20 w-full flex items-center justify-center p-2 rounded-xl glass border border-neon/15 overflow-hidden mt-2">
                <Image
                  src={selected.logo}
                  alt={selected.name}
                  fill
                  sizes="260px"
                  className="object-contain filter drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]"
                />
              </div>

              {/* Info */}
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.18em] bg-neon/15 border border-neon/30 text-neon-glow">
                  <Sparkles size={11} />
                  {selected.tier}
                </span>
                <h4 className="mt-3 font-display text-base font-semibold text-white">
                  {selected.name}
                </h4>
                {selected.tagline && (
                  <p className="mt-1 text-xs text-ink/65">
                    {selected.tagline}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function SponsorLogoTile({
  sponsor,
  onSelect,
}: {
  sponsor: Sponsor;
  onSelect: () => void;
}) {
  const isIcci = sponsor.name.toLowerCase().includes("islamabad chamber") || sponsor.logo.includes("icci");
  const isCss = sponsor.logo.includes("css");

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex items-center justify-center px-1 hover:scale-105 active:scale-95 transition-transform duration-200 shrink-0 cursor-pointer focus:outline-none ${
        isIcci
          ? "h-9 sm:h-11 w-44 sm:w-56"
          : isCss
          ? "h-8 sm:h-9 w-32 sm:w-40"
          : "h-7 sm:h-8 w-24 sm:w-32"
      }`}
      title={`${sponsor.name} (${sponsor.tier})`}
    >
      <div className="relative w-full h-full">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          sizes={isIcci ? "(min-width: 640px) 230px, 180px" : "(min-width: 640px) 140px, 100px"}
          className="object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.6)] transition-all duration-200"
        />
      </div>
    </button>
  );
}
