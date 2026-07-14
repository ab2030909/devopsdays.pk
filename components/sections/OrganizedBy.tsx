"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Globe, Twitter } from "lucide-react";

interface Organizer {
  name: string;
  logo: string;
  /** how much extra brightness/drop-shadow to apply on top of base styles */
  boost?: "none" | "high";
  /** visual scale multiplier — used to balance logos with different inner padding */
  scale?: number;
  links: { label: string; href: string; icon: React.ComponentType<{ className?: string }> }[];
}

const organizers: Organizer[] = [
  {
    name: "Cloud Native Islamabad",
    logo: "/cni-cropped.png",
    boost: "high",
    scale: 1,
    links: [
      { label: "Twitter", href: "https://x.com/CloudIslamabad", icon: Twitter },
      { label: "Instagram", href: "https://www.instagram.com/cloud_native_islamabad/", icon: Instagram },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/cloud-native-islamabad/", icon: Linkedin },
    ],
  },
  {
    name: "Cloud Native Security Pakistan",
    logo: "/cnsp.png",
    boost: "none",
    scale: 1,
    links: [
      { label: "Website", href: "https://cloudnativesecurity.pk/", icon: Globe },
      { label: "Instagram", href: "https://www.instagram.com/cnspakistan/", icon: Instagram },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/cloud-native-security-pakistan/", icon: Linkedin },
    ],
  },
];

export default function OrganizedBy() {
  return (
    <section
      id="organizers"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 divider-glow" />
        <div className="absolute inset-x-0 bottom-0 divider-glow" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[60%] bg-neon/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-neon" />
            <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-neon-glow">
              Organized By
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-neon" />
          </motion.div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {organizers.map((o, i) => (
              <OrganizerCard key={o.name} organizer={o} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OrganizerCard({
  organizer,
  index,
}: {
  organizer: Organizer;
  index: number;
}) {
  const filter =
    organizer.boost === "high"
      ? "brightness(1.6) contrast(1.1) drop-shadow(0 0 18px rgba(192,132,252,0.55))"
      : "drop-shadow(0 0 14px rgba(192,132,252,0.45))";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl glass-strong px-6 py-10 sm:py-12 transition-shadow hover:shadow-neon-lg"
    >
      {/* gradient halo on hover */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-60 w-60 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity bg-gradient-to-br from-neon-glow via-neon to-neon-violet" />
      {/* accent bar at top */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-neon-glow/70 to-transparent" />

      <div className="relative flex flex-col items-center text-center">
        {/* fixed-height logo box so both logos align identically across both cards */}
        <div className="relative h-32 sm:h-40 w-full max-w-[260px] flex items-center justify-center overflow-visible">
          <div
            className="relative w-full h-full"
            style={{ transform: `scale(${organizer.scale ?? 1})` }}
          >
            <Image
              src={organizer.logo}
              alt={organizer.name}
              fill
              sizes="(min-width: 640px) 260px, 220px"
              className="object-contain"
              style={{ filter }}
              priority={index === 0}
            />
          </div>
        </div>

        {/* socials */}
        <div className="mt-8 flex items-center gap-2.5">
          {organizer.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${organizer.name} — ${l.label}`}
              className="h-10 w-10 rounded-full glass grid place-items-center text-neon-glow hover:bg-neon/15 hover:shadow-neon transition-all"
            >
              <l.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
