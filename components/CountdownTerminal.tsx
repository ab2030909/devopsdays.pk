"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-09-19T09:00:00+05:00").getTime();

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

const computeParts = (): Parts => {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds, done: false };
};

const pad = (n: number, w = 2) => String(n).padStart(w, "0");

interface UnitCardProps {
  value: string;
  label: string;
  pulse?: boolean;
}

function UnitCard({ value, label, pulse }: UnitCardProps) {
  return (
    <div className="relative group">
      {/* outer glow */}
      <div
        className="absolute -inset-px rounded-xl opacity-70 blur-md transition-opacity group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(192,132,252,0.55), rgba(168,85,247,0.15), rgba(192,132,252,0.55))",
        }}
      />
      <div className="relative glass-strong rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-center overflow-hidden">
        {/* inner scan line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-glow/70 to-transparent" />
        <motion.div
          key={value}
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="font-display tabular-nums font-bold leading-none neon-text text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-white"
        >
          {value}
        </motion.div>
        <div className="mt-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.28em] text-neon-glow/85">
          {label}
        </div>
        {pulse && (
          <span className="pointer-events-none absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        )}
      </div>
    </div>
  );
}

export default function CountdownTerminal() {
  const [mounted, setMounted] = useState(false);
  const [parts, setParts] = useState<Parts>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    done: false,
  });

  // hydration-safe: only start counting after mount, otherwise SSR vs CSR
  // would render different numbers and React would warn.
  useEffect(() => {
    setMounted(true);
    setParts(computeParts());
    const id = setInterval(() => setParts(computeParts()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="mt-7 lg:mt-5 max-w-2xl"
    >
      {/* header strip — keeps the terminal vibe but compact */}
      <div className="glass rounded-t-2xl px-4 py-2.5 flex items-center gap-1.5 text-[11px] font-mono">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-ink/45">~/devopsdays-pk</span>
        <span className="ml-auto inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-neon-glow">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          countdown.live
        </span>
      </div>

      {/* command line + countdown body */}
      <div className="glass-strong rounded-b-2xl border-t-0 px-4 sm:px-5 py-4 lg:py-3.5 space-y-3 lg:space-y-2.5 shadow-neon-lg">
        <div className="font-mono text-[11px] sm:text-xs text-ink/70">
          <span className="text-neon-glow">$</span> watch -n 1 ./countdown
          <span className="text-ink/40"> --target 2026-09-19</span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          <UnitCard
            value={mounted ? pad(parts.days, 3) : "---"}
            label="Days"
          />
          <UnitCard
            value={mounted ? pad(parts.hours, 2) : "--"}
            label="Hours"
          />
          <UnitCard
            value={mounted ? pad(parts.minutes, 2) : "--"}
            label="Minutes"
          />
          <UnitCard
            value={mounted ? pad(parts.seconds, 2) : "--"}
            label="Seconds"
            pulse
          />
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] sm:text-xs font-mono">
          <span className="chip text-[10px]">T-MINUS</span>
          <span className="text-ink/70">
            {parts.done ? (
              <>
                <span className="text-emerald-300">event.live()</span>
                <span className="text-ink/40"> // welcome to islamabad</span>
              </>
            ) : (
              <>
                <span className="text-neon-glow">19.sept.2026</span>
                <span className="text-ink/40"> · islamabad · 09:00 PKT</span>
              </>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
