"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMMUNITY_PARTNERS } from "./PartnersGrid";

/**
 * Auto-scrolling marquee strip of all community-partner logos.
 * Placed on the home page just above the Venue section.
 */
export default function CommunityStrip() {
  // Duplicate the array so the marquee animation loops seamlessly.
  const loop = [...COMMUNITY_PARTNERS, ...COMMUNITY_PARTNERS];

  return (
    <section className="relative py-14 sm:py-20 overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 divider-glow" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 divider-glow" />
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[60%] bg-neon/10 blur-[120px] rounded-full"
      />

      <div className="container-px">
        <div className="mx-auto max-w-7xl">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6 mb-8"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon-glow">
                Community Partners
              </span>
              <span className="chip text-[10px]">
                {COMMUNITY_PARTNERS.length}+
              </span>
            </div>
            <p className="text-sm text-ink/60 max-w-2xl">
              Pakistan&apos;s student chapters, cloud groups and open-source
              communities powering DevOps Days Pakistan 2026.
            </p>
            <Link
              href="/partners"
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-neon-glow hover:text-white transition-colors"
            >
              View all
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* marquee */}
          <div className="relative mask-fade-x overflow-hidden">
            <div className="flex w-max animate-marquee gap-3 sm:gap-4">
              {loop.map((p, i) => (
                <PartnerTile key={`${p.name}-${i}`} name={p.name} logo={p.logo!} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerTile({ name, logo }: { name: string; logo: string }) {
  return (
    <div
      className="group relative flex items-center gap-3 rounded-xl glass px-4 py-3 min-w-[210px] hover:shadow-neon transition-shadow"
      title={name}
    >
      {/* logo */}
      <div className="relative h-10 w-10 shrink-0">
        <Image
          src={logo}
          alt={name}
          fill
          sizes="40px"
          className="object-contain"
        />
      </div>
      {/* name */}
      <div className="min-w-0">
        <div className="text-xs sm:text-sm font-medium truncate max-w-[150px] text-ink/85">
          {name}
        </div>
        <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-neon-glow/70">
          Community Partner
        </div>
      </div>
    </div>
  );
}
