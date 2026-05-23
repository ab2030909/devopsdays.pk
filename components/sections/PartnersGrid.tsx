"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Edit this list to manage community partners.
 *  - `logo` is optional. If set, drop the file under public/partners/<file>.
 *  - If `logo` is missing, the card falls back to the partner's initials so
 *    you can populate names first and add logos later.
 */
export interface CommunityPartner {
  name: string;
  /** path relative to /public, e.g. "/partners/cni.png" */
  logo?: string;
  /** optional external link */
  href?: string;
  /** short tagline shown under name */
  tagline?: string;
}

export const COMMUNITY_PARTNERS: CommunityPartner[] = [
  { name: "The Computer Science Society", logo: "/community/The Computer Science Society Logo.webp" },
  { name: "Artificial Intelligence Society", logo: "/community/Artificial Intelligence Society.webp" },
  { name: "AWS Cloud Clubs PIEAS", logo: "/community/AWS Cloud Clubs PIEAS.webp" },
  { name: "AWS Cloud Clubs QAU", logo: "/community/AWS Cloud Clubs QAU.webp" },
  { name: "AWS SBG NUTECH", logo: "/community/AWS SBG NUTECH.webp" },
  { name: "AWS SBG UOH", logo: "/community/AWS SBG UOH.webp" },
  { name: "BBAI", logo: "/community/BBAI.webp" },
  { name: "CAUSE Society", logo: "/community/CAUSE Society.webp" },
  { name: "Confiniti QAU Chapter", logo: "/community/Confiniti QAU Chapter.webp" },
  { name: "Digital Finance & Trade Society IIUI", logo: "/community/Digital Finance & Trade Society IIUI.webp" },
  { name: "GDGoC IIUI", logo: "/community/GDGoC IIUI.webp" },
  { name: "Islamians Youth Club — IIUI", logo: "/community/Islamians Youth Club - IIUI.webp" },
  { name: "IT Computing Society", logo: "/community/IT Computing Society.webp" },
  { name: "MLSA Quaid-i-Azam University", logo: "/community/MLSA Quaid-i-Azam University.webp" },
  { name: "MLSA UET Peshawar", logo: "/community/MLSA UET Peshawar.webp" },
  { name: "SENSE — IIUI", logo: "/community/SENSE-IIUI.webp" },
  { name: "SSCIT", logo: "/community/SSCIT.webp" },
  { name: "YOTA", logo: "/community/YOTA.webp" },
];

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 3)
    .join("")
    .toUpperCase();

export default function PartnersGrid() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-px">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
            {COMMUNITY_PARTNERS.map((p, i) => (
              <PartnerCard key={p.name + i} partner={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  partner,
  index,
}: {
  partner: CommunityPartner;
  index: number;
}) {
  const inner = (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: (index % 12) * 0.04 }}
      whileHover={{ y: -3 }}
      className="group relative h-full overflow-hidden rounded-2xl glass-strong p-5 transition-shadow hover:shadow-neon"
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-15 group-hover:opacity-40 transition-opacity bg-gradient-to-br from-neon-glow via-neon to-neon-violet" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-neon-glow/55 to-transparent" />

      <div className="relative flex flex-col items-center text-center">
        {/* logo / fallback crest */}
        <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-xl glass border border-neon/20 grid place-items-center overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20" />
          {partner.logo ? (
            <div className="relative w-[78%] h-[78%]">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="120px"
                className="object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 12px rgba(192,132,252,0.45))",
                }}
              />
            </div>
          ) : (
            <div className="relative font-display font-bold text-2xl text-neon-glow tracking-wider">
              {initialsOf(partner.name)}
            </div>
          )}
          {[
            "top-1.5 left-1.5 border-t border-l",
            "top-1.5 right-1.5 border-t border-r",
            "bottom-1.5 left-1.5 border-b border-l",
            "bottom-1.5 right-1.5 border-b border-r",
          ].map((p) => (
            <span
              key={p}
              className={`pointer-events-none absolute h-2 w-2 border-neon/50 ${p}`}
            />
          ))}
        </div>

        {/* name */}
        <h3 className="mt-4 font-display text-sm sm:text-base font-semibold tracking-tight">
          {partner.name}
        </h3>
        {partner.tagline && (
          <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-ink/50">
            {partner.tagline}
          </div>
        )}
      </div>
    </motion.article>
  );

  return partner.href ? (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus:outline-none focus:ring-2 focus:ring-neon/50 rounded-2xl"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}
