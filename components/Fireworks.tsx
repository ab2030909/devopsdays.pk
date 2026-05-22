"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * Lightweight canvas fireworks tuned for the venue panel:
 *  - rockets ascend from below the buildings
 *  - bursts open into 36-particle radial sprays in our neon palette
 *  - particles trail, fall with gravity, and fade
 *
 * Anchored to the `top` half of the container so bursts appear over
 * the skyline silhouettes.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
  size: number;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  hue: number;
}

const HUES = [275, 285, 295, 260, 250, 270]; // purple-violet-magenta range

export default function Fireworks({
  className = "",
  density = 1,
}: {
  className?: string;
  density?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  // Persist arrays across renders without forcing rerenders.
  const state = useMemo(
    () => ({
      rockets: [] as Rocket[],
      particles: [] as Particle[],
      lastLaunch: 0,
    }),
    []
  );

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let visible = true;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const launch = (now: number) => {
      // Random horizontal launch position; rocket targets the upper third.
      const x = w * (0.15 + Math.random() * 0.7);
      const targetY = h * (0.18 + Math.random() * 0.22);
      const startY = h * 0.95;
      const vy = -((startY - targetY) / 60); // travel time ~60 frames
      const vx = (Math.random() - 0.5) * 0.6;
      const hue = HUES[Math.floor(Math.random() * HUES.length)];
      state.rockets.push({ x, y: startY, vx, vy, targetY, hue });
      state.lastLaunch = now;
    };

    const burst = (cx: number, cy: number, hue: number) => {
      const count = 14 + Math.floor(Math.random() * 6); // was 32–46
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.1;
        const speed = 0.7 + Math.random() * 1.0; // was 1.5–3.7
        state.particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 45 + Math.floor(Math.random() * 25),
          hue: hue + (Math.random() - 0.5) * 12,
          size: 0.7 + Math.random() * 0.6, // was 1.5–3
        });
      }
      // tiny bright flash
      for (let i = 0; i < 5; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 0.2 + Math.random() * 0.4;
        state.particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(a) * s,
          vy: Math.sin(a) * s,
          life: 0,
          maxLife: 18,
          hue: 290,
          size: 1.2,
        });
      }
    };

    const tick = (now: number) => {
      if (!visible) {
        raf = requestAnimationFrame(tick);
        return;
      }
      // Subtle trailing fade — gives streaks
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      // Launch a new rocket every 1.6–2.6 s (less frequent, more elegant)
      if (now - state.lastLaunch > 1600 + Math.random() * 1000 / density) {
        launch(now);
      }

      // Update rockets
      for (let i = state.rockets.length - 1; i >= 0; i--) {
        const r = state.rockets[i];
        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.015;

        // trail dot
        ctx.fillStyle = `hsla(${r.hue}, 90%, 78%, 0.95)`;
        ctx.beginPath();
        ctx.arc(r.x, r.y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        if (r.y <= r.targetY || r.vy >= 0) {
          burst(r.x, r.y, r.hue);
          state.rockets.splice(i, 1);
        }
      }

      // Update particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.life++;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.vy += 0.04; // gravity
        p.x += p.vx;
        p.y += p.vy;

        const t = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - t);

        // soft glow (smaller halo)
        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2.2
        );
        grad.addColorStop(0, `hsla(${p.hue}, 95%, 78%, ${alpha * 0.85})`);
        grad.addColorStop(1, `hsla(${p.hue}, 95%, 60%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // core dot
        ctx.fillStyle = `hsla(${p.hue}, 100%, 92%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife) state.particles.splice(i, 1);
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible = e.isIntersecting;
      },
      { rootMargin: "50px" }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, [state, density]);

  return (
    <canvas
      ref={ref}
      className={`pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
