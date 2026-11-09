"use client";

import Image from "next/image";
import { SPONSORS, type Sponsor } from "@/config/sponsors";

interface SponsorStripProps {
  className?: string;
}

/**
 * Compact, full-color logo marquee strip.
 */
export default function SponsorStrip({ className = "" }: SponsorStripProps) {
  // Multiply so it loops seamlessly on wide screens
  const half = [...SPONSORS, ...SPONSORS, ...SPONSORS];
  const loop = [...half, ...half];

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="relative mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-6 sm:gap-10 hover:[animation-play-state:paused]">
          {loop.map((s, i) => (
            <SponsorLogoTile key={`${s.name}-${i}`} sponsor={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SponsorLogoTile({ sponsor }: { sponsor: Sponsor }) {
  const content = (
    <div
      className="group relative flex items-center justify-center h-7 sm:h-8 w-24 sm:w-32 px-1 hover:scale-105 transition-transform duration-200"
      title={sponsor.name}
    >
      <div className="relative w-full h-full">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          sizes="(min-width: 640px) 130px, 100px"
          className="object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.6)] transition-all duration-200"
        />
      </div>
    </div>
  );

  if (sponsor.href) {
    return (
      <a
        href={sponsor.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block shrink-0 focus:outline-none"
      >
        {content}
      </a>
    );
  }

  return <div className="shrink-0">{content}</div>;
}
