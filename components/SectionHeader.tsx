"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="chip"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-ink/70 text-base sm:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
