"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, BotMessageSquare } from "lucide-react";
import InfraVisual from "../InfraVisual";

const pillars = [
  {
    icon: Cpu,
    title: "Engineering Culture",
    desc: "DevOps, SRE, DevSecOps & platform engineering at national scale.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    desc: "Kubernetes, service mesh, observability and modern infrastructure.",
  },
  {
    icon: BotMessageSquare,
    title: "Agentic AI",
    desc: "AI agents, MLOps and AI infrastructure powering the next decade.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="chip"
            >
              About the Conference
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              A national platform for{" "}
              <span className="gradient-text">engineering & AI</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-ink/75 text-base sm:text-lg leading-relaxed"
            >
              DevOps Days Pakistan 2026 is a national community-led conference
              focused on DevOps culture, cloud-native systems, platform
              engineering, AI-powered automation, Site Reliability Engineering,
              DevSecOps, and Agentic AI.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-4 text-ink/65 leading-relaxed"
            >
              Hosted in Islamabad, the conference unites Pakistan&apos;s growing
              ecosystem of engineers, startups, AI builders, cloud
              professionals, developers, and technology communities under one
              platform — featuring technical sessions, engineering discussions,
              ecosystem collaboration, and modern infrastructure innovation.
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="glass rounded-xl p-4 hover:shadow-neon transition-shadow"
                >
                  <div className="h-9 w-9 rounded-lg bg-neon/10 border border-neon/30 grid place-items-center text-neon-glow">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-3 text-sm font-semibold">{p.title}</div>
                  <div className="mt-1 text-xs text-ink/60">{p.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <InfraVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
