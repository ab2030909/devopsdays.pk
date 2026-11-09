"use client";

import Image from "next/image";
import { SPONSORS, type Sponsor } from "@/config/sponsors";

interface SponsorStripProps {
  className?: string;
}

/**
 * Clean, logo-only auto-scrolling marquee strip of sponsors.
 * No text labels, tiers, or headings.
 */
export default function SponsorStrip({ className = "" }: SponsorStripProps) {
  // Multiply the list so it loops seamlessly on wide screens
  const half = [...SPONSORS, ...SPONSORS, ...SPONSORS];
  const loop = [...half, ...half];

  return (
    <div className={`relative w-full overflow-hidden py-4 sm:py-5 ${className}`}>
      <div className="relative mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8 sm:gap-14 hover:[animation-play-state:paused]">
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
      className="group relative flex items-center justify-center h-12 sm:h-14 w-32 sm:w-44 px-2 opacity-75 hover:opacity-100 transition-all duration-300"
      title={sponsor.name}
    >
      <div className="relative w-full h-full">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          sizes="(min-width: 640px) 180px, 130px"
          className="object-contain filter grayscale contrast-125 brightness-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.65)] group-hover:scale-110 transition-all duration-300"
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
