"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  to,
  suffix = "",
  duration = 1.6,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </motion.span>
  );
}
