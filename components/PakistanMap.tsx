"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero visual: the actual DevOps Days Islamabad 2026 logo / map artwork.
 * Black background already removed (see public/hero-logo-transparent.png),
 * so the artwork sits cleanly on the hero gradient with no halo wash.
 */
export default function PakistanMap({
  className = "",
  showLabel: _showLabel = true,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/hero-logo.webp"
            alt="DevOps Days Islamabad 2026"
            fill
            priority
            sizes="(min-width: 1024px) 860px, 100vw"
            className="object-contain scale-[1.45]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
