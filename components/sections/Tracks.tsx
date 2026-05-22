"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  BotMessageSquare,
  Cloud,
  ShieldCheck,
  Activity,
  BrainCircuit,
} from "lucide-react";
import SectionHeader from "../SectionHeader";

const tracks = [
  {
    icon: Workflow,
    title: "DevOps & Automation",
    desc: "CI/CD pipelines, GitOps, IaC and deployment strategies at scale.",
    code: "kubectl rollout status",
  },
  {
    icon: BotMessageSquare,
    title: "Agentic AI",
    desc: "Autonomous agents, multi-agent orchestration and AI workflows.",
    code: "agent.run(task)",
  },
  {
    icon: Cloud,
    title: "Cloud & Platform Engineering",
    desc: "Internal developer platforms, multi-cloud and platform abstractions.",
    code: "platform.deploy()",
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps",
    desc: "Shift-left security, supply-chain hardening, policy as code.",
    code: "policy.enforce()",
  },
  {
    icon: Activity,
    title: "SRE & Observability",
    desc: "SLOs, telemetry pipelines, incident response and reliability.",
    code: "trace.span(req)",
  },
  {
    icon: BrainCircuit,
    title: "MLOps & AI Infrastructure",
    desc: "Model serving, GPU orchestration, vector DBs and inference at scale.",
    code: "model.serve(gpu)",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 grid-bg mask-fade-y opacity-30" />
      <div className="container-px relative">
        <SectionHeader
          eyebrow="Conference Tracks"
          title={
            <>
              Six tracks. One{" "}
              <span className="gradient-text">engineering future.</span>
            </>
          }
          description="Deep, technical content curated for engineers, architects, AI builders and platform teams."
        />

        <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden transition-all hover:shadow-neon-lg"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-neon/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-xl bg-neon/10 border border-neon/30 grid place-items-center text-neon-glow group-hover:scale-110 transition-transform">
                  <t.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/40">
                  Track {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                {t.desc}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-neon/20 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-neon-glow">
                <span className="text-ink/40">$</span>
                {t.code}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
