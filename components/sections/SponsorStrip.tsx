"use client";

import Image from "next/image";
import { SPONSORS, type Sponsor } from "@/config/sponsors";

interface SponsorStripProps {
  className?: string;
}

/**
 * Compact, full-color logo marquee strip.
 * Clicking any logo opens their official website in a new tab.
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
  const isIcci = sponsor.name.toLowerCase().includes("islamabad chamber") || sponsor.logo.includes("icci");
  const isCss = sponsor.logo.includes("css");
  const isAdal = sponsor.logo.includes("adal");
  const isChap = sponsor.logo.includes("chap");
  const isKorneez = sponsor.logo.includes("korneez");

  const content = (
    <div
      className={`group relative flex items-center justify-center px-2 hover:scale-105 active:scale-95 transition-transform duration-200 shrink-0 cursor-pointer focus:outline-none ${
        isIcci
          ? "h-11 sm:h-14 w-52 sm:w-64"
          : isChap
          ? "h-12 sm:h-14 w-36 sm:w-48"
          : isCss
          ? "h-11 sm:h-13 w-36 sm:w-48"
          : isKorneez
          ? "h-9 sm:h-11 w-28 sm:w-36"
          : isAdal
          ? "h-8 sm:h-9.5 w-28 sm:w-36"
          : "h-8 sm:h-10 w-28 sm:w-36"
      }`}
      title={`${sponsor.name} (${sponsor.tier})`}
    >
      <div className="relative w-full h-full">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          sizes={isIcci ? "(min-width: 640px) 260px, 210px" : "(min-width: 640px) 190px, 140px"}
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
