"use client";

import Image from "next/image";
import { SPONSORS, type Sponsor } from "@/config/sponsors";

interface SponsorStripProps {
  title?: string;
  eyebrow?: string;
  showHeading?: boolean;
  className?: string;
}

/**
 * Auto-scrolling marquee strip of confirmed event sponsors & partners.
 * Loops seamlessly and pauses on hover.
 */
export default function SponsorStrip({
  title = "Our Sponsors & Partners",
  eyebrow = "Supported By",
  showHeading = true,
  className = "",
}: SponsorStripProps) {
  // Triple the list for each half so it comfortably overflows wide viewports seamlessly
  const half = [...SPONSORS, ...SPONSORS, ...SPONSORS];
  const loop = [...half, ...half];

  return (
    <section className={`relative py-12 sm:py-16 overflow-hidden ${className}`}>
      {/* Background ambient glow */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-[70%] bg-neon/10 blur-[100px] rounded-full" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-7xl">
          {showHeading && (
            <div className="flex flex-col items-center text-center mb-8">
              <span className="chip mb-2">{eyebrow}</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                {title}
              </h3>
            </div>
          )}

          {/* Marquee ticker */}
          <div className="relative mask-fade-x overflow-hidden">
            <div className="flex w-max animate-marquee gap-3 sm:gap-4 hover:[animation-play-state:paused]">
              {loop.map((s, i) => (
                <SponsorTile key={`${s.name}-${i}`} sponsor={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SponsorTile({ sponsor }: { sponsor: Sponsor }) {
  const content = (
    <div
      className="group relative flex items-center gap-4 rounded-xl glass-strong border border-neon/15 px-5 py-3 min-w-[260px] sm:min-w-[280px] hover:shadow-neon hover:border-neon/40 transition-all"
      title={`${sponsor.name} — ${sponsor.tagline || sponsor.tier}`}
    >
      <div className="pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity bg-gradient-to-br from-neon-glow to-neon-violet" />

      {/* Logo container */}
      <div className="relative h-11 w-28 sm:w-32 shrink-0 flex items-center justify-center">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          sizes="(min-width: 640px) 140px, 120px"
          className="object-contain filter drop-shadow-[0_0_8px_rgba(192,132,252,0.3)] group-hover:drop-shadow-[0_0_14px_rgba(192,132,252,0.6)] group-hover:scale-105 transition-all"
        />
      </div>

      {/* Subtle vertical separator */}
      <div className="h-8 w-px bg-neon/20 shrink-0" />

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold truncate text-ink/90 group-hover:text-neon-glow transition-colors">
          {sponsor.name}
        </div>
        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neon-glow/80 mt-0.5">
          {sponsor.tier}
        </div>
      </div>
    </div>
  );

  if (sponsor.href) {
    return (
      <a
        href={sponsor.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-1 focus:ring-neon/50 rounded-xl"
      >
        {content}
      </a>
    );
  }

  return content;
}

