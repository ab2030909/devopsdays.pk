"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Cloud,
  GitBranch,
  Activity,
  Lock,
  BotMessageSquare,
  Server,
  Zap,
} from "lucide-react";

/**
 * Animated DevOps "control center" panel for the About section.
 *
 * Visuals:
 *  - Window-chrome header (terminal-style)
 *  - Live KPI tiles (cpu, deploys, incidents, latency) with ticking values
 *  - Streaming pipeline visualisation: Plan → Build → Test → Deploy → Monitor
 *    each stage lighting up in sequence with a moving pulse along the rail
 *  - Tech-stack chips with hover glow
 *  - Live "log feed" auto-scrolling lines
 *  - Floating particle accents
 *
 * No static node graph — everything moves, everything is themed.
 */

const STAGES = [
  { icon: GitBranch, label: "Plan" },
  { icon: Cpu, label: "Build" },
  { icon: Lock, label: "Test" },
  { icon: Cloud, label: "Deploy" },
  { icon: Activity, label: "Monitor" },
] as const;

const STACK = [
  { icon: Server, label: "Kubernetes" },
  { icon: BotMessageSquare, label: "Agentic AI" },
  { icon: Cloud, label: "Multi-Cloud" },
  { icon: Zap, label: "GitOps" },
];

const LOG_TEMPLATE = [
  { tag: "BUILD", color: "text-emerald-300", msg: "image:devopspk/api@sha256:9a8…  pushed (12.4 MB)" },
  { tag: "DEPLOY", color: "text-neon-glow", msg: "rolling out v2026.9.19 → 3 replicas ready" },
  { tag: "AGENT", color: "text-cyan-300", msg: "agent.scheduler tuned · -32% queue depth" },
  { tag: "OBS", color: "text-amber-300", msg: "p99 latency 187ms → 142ms ✓" },
  { tag: "K8S", color: "text-emerald-300", msg: "cluster prod-isb · 18/18 nodes Ready" },
  { tag: "AI", color: "text-cyan-300", msg: "model serving · gpu util 67% · cache hit 0.91" },
  { tag: "SEC", color: "text-rose-300", msg: "policy.allow=true · supply-chain verified" },
  { tag: "GITOPS", color: "text-neon-glow", msg: "argo sync infra/prod · drift = 0" },
];

export default function InfraVisual({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [logs, setLogs] = useState<typeof LOG_TEMPLATE>([]);
  const [kpis, setKpis] = useState({ cpu: 42, dep: 128, lat: 142, inc: 0 });

  // pipeline stage progression
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((s) => (s + 1) % STAGES.length),
      1400
    );
    return () => clearInterval(id);
  }, [reduce]);

  // log feed
  useEffect(() => {
    let i = 0;
    setLogs(LOG_TEMPLATE.slice(0, 4));
    if (reduce) return;
    const id = setInterval(() => {
      i = (i + 1) % LOG_TEMPLATE.length;
      setLogs((prev) => [...prev.slice(-3), LOG_TEMPLATE[i]]);
    }, 2000);
    return () => clearInterval(id);
  }, [reduce]);

  // ticking KPIs
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setKpis((k) => ({
        cpu: Math.max(28, Math.min(78, k.cpu + (Math.random() - 0.5) * 6)),
        dep: k.dep + (Math.random() < 0.3 ? 1 : 0),
        lat: Math.max(110, Math.min(180, k.lat + (Math.random() - 0.5) * 8)),
        inc: Math.max(0, k.inc + (Math.random() < 0.05 ? 1 : 0)),
      }));
    }, 1200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* window chrome */}
      <div className="glass-strong rounded-t-2xl px-3 sm:px-4 py-2.5 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono">
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-ink/45 truncate">
          <span className="hidden sm:inline">~/devopsdays-pk · </span>
          control-center
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-neon-glow shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          live
        </span>
      </div>

      {/* body */}
      <div className="glass-strong border-t-0 rounded-b-2xl p-3 sm:p-5 space-y-4 sm:space-y-5 overflow-hidden">
        {/* KPI tiles — 2x2 on phone, 4 across on >=sm */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <Kpi label="CPU" value={`${Math.round(kpis.cpu)}%`} accent="text-emerald-300" />
          <Kpi label="DEPLOYS" value={kpis.dep.toString()} accent="text-neon-glow" />
          <Kpi label="P99 ms" value={Math.round(kpis.lat).toString()} accent="text-cyan-300" />
          <Kpi label="INCIDENTS" value={kpis.inc.toString()} accent="text-rose-300" />
        </div>

        {/* pipeline rail */}
        <div className="relative">
          <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/45 mb-3">
            pipeline · sync
          </div>
          <div className="relative">
            {/* rail */}
            <div className="absolute inset-x-3 top-[18px] sm:top-[20px] h-px bg-neon/25" />
            {/* moving glow */}
            {!reduce && (
              <motion.div
                className="absolute top-[18px] sm:top-[20px] -translate-y-1/2 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-neon-glow to-transparent"
                animate={{ left: ["-10%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ filter: "blur(0.5px)" }}
              />
            )}
            <div className="relative flex justify-between">
              {STAGES.map((s, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 z-10 min-w-0"
                  >
                    <motion.div
                      animate={{
                        boxShadow: isActive
                          ? "0 0 16px rgba(192,132,252,0.85), 0 0 32px rgba(168,85,247,0.45)"
                          : "0 0 0 rgba(0,0,0,0)",
                      }}
                      transition={{ duration: 0.4 }}
                      className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full grid place-items-center transition-colors ${
                        isActive
                          ? "bg-neon/25 border border-neon-glow text-white"
                          : "bg-neon/5 border border-neon/30 text-neon-glow/80"
                      }`}
                    >
                      <s.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </motion.div>
                    <div
                      className={`text-[8.5px] sm:text-[10px] font-mono uppercase tracking-[0.14em] sm:tracking-[0.18em] ${
                        isActive ? "text-neon-glow" : "text-ink/50"
                      }`}
                    >
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* stack chips */}
        <div className="flex flex-wrap gap-1.5">
          {STACK.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-neon/25 bg-neon/[0.06] px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em] text-ink/70 hover:bg-neon/15 hover:text-ink hover:border-neon/45 transition-colors"
            >
              <s.icon className="h-3 w-3 text-neon-glow" />
              {s.label}
            </span>
          ))}
        </div>

        {/* log feed */}
        <div className="rounded-lg bg-black/40 border border-neon/15 p-3 font-mono text-[10px] sm:text-[10.5px] leading-relaxed h-[110px] overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-glow/60 to-transparent" />
          <div className="space-y-1.5">
            {logs.map((l, i) => (
              <motion.div
                key={`${l.tag}-${i}-${l.msg.length}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-2"
              >
                <span className="text-ink/35 shrink-0">$</span>
                <span className={`shrink-0 ${l.color}`}>[{l.tag}]</span>
                <span className="text-ink/65 truncate">{l.msg}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="relative rounded-lg border border-neon/20 bg-neon/[0.04] px-2 sm:px-2.5 py-2 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-glow/60 to-transparent" />
      <div className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em] text-ink/45 truncate">
        {label}
      </div>
      <motion.div
        key={value}
        initial={{ y: -4, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className={`mt-0.5 font-display font-bold text-base sm:text-xl tabular-nums ${accent}`}
      >
        {value}
      </motion.div>
    </div>
  );
}
