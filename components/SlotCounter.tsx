"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { prefix: "", value: 50, suffix: "+", label: "Projects Built" },
  { prefix: "", value: 30, suffix: "+", label: "Clients Served" },
  { prefix: "~", value: 3, suffix: " Days", label: "Average Delivery" },
  { prefix: "$", value: 0, suffix: "", label: "Hidden Fees" },
];

function SlotDigit({
  target,
  started,
  delay = 0,
}: {
  target: number;
  started: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) return;
    let cancelled = false;
    let count = 0;
    const total = 20;

    const tick = () => {
      if (cancelled) return;
      count++;
      if (count >= total) {
        setDisplay(target);
      } else {
        const rand =
          target > 0
            ? Math.floor(Math.random() * Math.max(target * 2, 10))
            : Math.floor(Math.random() * 10);
        setDisplay(rand);
        setTimeout(tick, 25 + count * 5);
      }
    };

    const startTimeout = setTimeout(tick, delay);
    return () => {
      cancelled = true;
      clearTimeout(startTimeout);
    };
  }, [started, target, delay]);

  return <>{display}</>;
}

export default function SlotCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full"
    >
      {stats.map((stat, i) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tabular-nums font-mono tracking-tight">
            {stat.prefix}
            <SlotDigit target={stat.value} started={started} delay={i * 100} />
            {stat.suffix}
          </div>
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
