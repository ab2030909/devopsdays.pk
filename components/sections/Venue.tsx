"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import Fireworks from "../Fireworks";

export default function Venue() {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const heavyMotion = !reduce && !isMobile;

  // mouse-driven parallax tilt
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 14 });
  const sy = useSpring(my, { stiffness: 120, damping: 14 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [6, -6]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-4, 4]);
  const tx = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const ty = useTransform(sy, [-0.5, 0.5], [-6, 6]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heavyMotion) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="venue" className="relative py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-y opacity-25" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-80 w-[80%] bg-neon/15 blur-[140px] rounded-full" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          {/* left â€” copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="chip"
            >
              Venue
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="gradient-text">Islamabad,</span> Pakistan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-ink/75 text-base sm:text-lg leading-relaxed"
            >
              Islamabad stands at the centre of Pakistan&apos;s growing
              technology ecosystem, making it the ideal destination for the
              country&apos;s flagship DevOps and Agentic AI conference.
            </motion.p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 text-neon-glow">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-mono uppercase tracking-[0.18em]">
                    Location
                  </span>
                </div>
                <div className="mt-2 text-sm">Islamabad, Pakistan</div>
                <div className="text-xs text-ink/55">Capital territory</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 text-neon-glow">
                  <Building2 className="h-4 w-4" />
                  <span className="text-xs font-mono uppercase tracking-[0.18em]">
                    Status
                  </span>
                </div>
                <div className="mt-2 text-sm">Venue To Be Announced</div>
                <div className="text-xs text-ink/55">September 2026</div>
              </div>
            </div>
          </div>

          {/* right â€” neon skyline image with motion + filters */}
          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/2] w-full select-none"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center",
            }}
          >
            {/* glow halo behind */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(168,85,247,0.45) 0%, rgba(147,51,234,0.18) 40%, transparent 70%)",
              }}
              animate={
                reduce
                  ? undefined
                  : {
                      opacity: [0.55, 0.85, 0.55],
                      scale: [1, 1.04, 1],
                    }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* tilted/floating image stack */}
            <motion.div
              className="absolute inset-0"
              style={{ rotateX, rotateY, x: tx, y: ty, transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                {/* the skyline image */}
                <Image
                  src="/skyline.webp"
                  alt="Islamabad skyline â€” Faisal Mosque, Pindi Stadium, Pakistan Monument"
                  fill
                  priority
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 0 30px rgba(168,85,247,0.55)) drop-shadow(0 0 60px rgba(192,132,252,0.35)) saturate(1.15) contrast(1.05)",
                  }}
                />

                {/* breathing neon pulse over the image */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ mixBlendMode: "screen" }}
                  animate={
                    reduce
                      ? undefined
                      : { opacity: [0.0, 0.18, 0.0] }
                  }
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 60%, rgba(232,213,255,0.5), transparent 60%)",
                    }}
                  />
                </motion.div>

                {/* twinkling stars / particles drifting up */}
                {heavyMotion && <Twinkles />}

                {/* stadium floodlight flares â€” three blooms over the central building */}
                {!reduce && (
                  <>
                    <Floodlight x="38%" y="42%" delay={0} />
                    <Floodlight x="60%" y="42%" delay={1.4} />
                  </>
                )}

                {/* horizontal scan line sweeping vertically */}
                {!reduce && (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-glow/80 to-transparent"
                    initial={{ top: "5%" }}
                    animate={{ top: ["5%", "95%", "5%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ filter: "blur(0.6px)" }}
                  />
                )}

                {/* faint vertical scan column for extra depth */}
                {!reduce && (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-glow/45 to-transparent"
                    animate={{ left: ["10%", "90%", "10%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </motion.div>
            </motion.div>

            {/* drifting clouds above the skyline */}
            {!reduce && <Clouds />}

            {/* fireworks above the buildings — always on, just paused
                automatically by IntersectionObserver when off-screen */}
            {!reduce && (
              <Fireworks className="absolute inset-x-0 top-0 h-[70%] w-full z-[5]" />
            )}

            {/* corner brackets (HUD frame) */}
            <div className="pointer-events-none absolute inset-0 z-10">
              {[
                "top-2 left-2 border-t border-l",
                "top-2 right-2 border-t border-r",
                "bottom-2 left-2 border-b border-l",
                "bottom-2 right-2 border-b border-r",
              ].map((p) => (
                <span
                  key={p}
                  className={`absolute h-5 w-5 border-neon/55 ${p}`}
                />
              ))}
            </div>

            {/* HUD chips */}
            <div className="absolute top-3 left-3 glass rounded-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-neon-glow z-10 inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              33.68Â° N Â· 73.05Â° E
            </div>
            <div className="absolute bottom-3 right-3 glass rounded-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-neon-glow z-10">
              ISB Â· CAPITAL TERRITORY
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** A few twinkling dots animated drifting upward for atmosphere. */
function Twinkles() {
  const stars = Array.from({ length: 14 }).map((_, i) => ({
    x: 4 + Math.random() * 92,
    delay: Math.random() * 4,
    dur: 2.5 + Math.random() * 3,
    size: Math.random() < 0.7 ? 2 : 3,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-neon-glow"
          style={{
            left: `${s.x}%`,
            bottom: 0,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px rgba(192,132,252,0.9)",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -200, opacity: [0, 1, 0] }}
          transition={{
            duration: s.dur,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

/** A pulsing flare over the stadium floodlight position. */
function Floodlight({
  x,
  y,
  delay,
}: {
  x: string;
  y: string;
  delay: number;
}) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: x,
        top: y,
        background:
          "radial-gradient(circle, rgba(232,213,255,0.9) 0%, rgba(192,132,252,0.4) 40%, transparent 70%)",
        mixBlendMode: "screen",
      }}
      animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.85, 1.2, 0.85] }}
      transition={{
        duration: 2.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/** Slow-drifting purple cloud silhouettes layered over the upper sky. */
function Clouds() {
  const clouds = [
    { top: "8%", size: 130, speed: 90, opacity: 0.32, delay: 0, dir: 1 },
    { top: "18%", size: 100, speed: 130, opacity: 0.22, delay: 4, dir: -1 as const },
    { top: "28%", size: 160, speed: 110, opacity: 0.28, delay: 2, dir: 1 },
    { top: "12%", size: 80, speed: 150, opacity: 0.18, delay: 6, dir: -1 as const },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: c.top,
            width: c.size,
            height: c.size * 0.45,
            opacity: c.opacity,
            mixBlendMode: "screen",
          }}
          initial={{ x: c.dir > 0 ? "-30%" : "120%" }}
          animate={{ x: c.dir > 0 ? "120%" : "-30%" }}
          transition={{
            duration: c.speed,
            repeat: Infinity,
            ease: "linear",
            delay: c.delay,
          }}
        >
          <CloudShape />
        </motion.div>
      ))}
    </div>
  );
}

function CloudShape() {
  return (
    <svg
      viewBox="0 0 200 90"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="cloudG" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(232,213,255,0.85)" />
          <stop offset="60%" stopColor="rgba(168,85,247,0.35)" />
          <stop offset="100%" stopColor="rgba(168,85,247,0)" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="55" rx="50" ry="22" fill="url(#cloudG)" />
      <ellipse cx="100" cy="42" rx="55" ry="26" fill="url(#cloudG)" />
      <ellipse cx="140" cy="55" rx="48" ry="22" fill="url(#cloudG)" />
      <ellipse cx="120" cy="65" rx="36" ry="14" fill="url(#cloudG)" opacity="0.7" />
    </svg>
  );
}

