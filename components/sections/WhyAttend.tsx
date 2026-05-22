"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Building2,
  Rocket,
  Users,
  Cpu,
} from "lucide-react";
import SectionHeader from "../SectionHeader";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Get exposure to industry-grade DevOps, cloud and AI tooling early.",
  },
  {
    icon: Code2,
    title: "Engineers",
    desc: "Deep technical sessions on infrastructure, automation and reliability.",
  },
  {
    icon: Building2,
    title: "Companies",
    desc: "Connect with Pakistan's top engineering and AI talent pool.",
  },
  {
    icon: Rocket,
    title: "Startups",
    desc: "Showcase products, find collaborators and accelerate growth.",
  },
  {
    icon: Users,
    title: "Communities",
    desc: "Amplify chapters, run partner activations and grow membership.",
  },
  {
    icon: Cpu,
    title: "AI Builders",
    desc: "Talk Agentic AI, MLOps, evaluation and AI infra at scale.",
  },
];

export default function WhyAttend() {
  return (
    <section id="why-attend" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="Why Attend"
          title={
            <>
              Built for everyone shaping{" "}
              <span className="gradient-text">Pakistan&apos;s tech future.</span>
            </>
          }
          description="From engineers and AI builders to startups, students and community organisers — DevOps Days Pakistan 2026 is the room to be in."
        />

        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="group relative glass rounded-2xl p-6 transition-shadow hover:shadow-neon"
            >
              <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-neon/10 border border-neon/30 grid place-items-center text-neon-glow group-hover:bg-neon/20 transition-colors">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {a.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-ink/65 leading-relaxed">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
