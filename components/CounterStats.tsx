"use client";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function Counter({ prefix = "", value, suffix, label }: StatItem) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setDisplay(`${prefix}${Math.round(easeOutCubic(p) * value)}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, prefix, suffix]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-white tabular-nums tracking-tight mb-2">
        {display}
      </div>
      <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">{label}</div>
    </div>
  );
}

const stats: StatItem[] = [
  { value: 50, suffix: "+", label: "Projects Built" },
  { value: 30, suffix: "+", label: "Clients Served" },
  { value: 3, prefix: "< ", suffix: " Days", label: "Avg. Delivery" },
  { prefix: "$", value: 0, suffix: "", label: "Hidden Fees" },
];

export default function CounterStats() {
  return (
    <>
      {stats.map((s) => (
        <Counter key={s.label} {...s} />
      ))}
    </>
  );
}
