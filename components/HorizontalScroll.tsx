"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const templates = [
  {
    name: "Arctic Air HVAC",
    industry: "HVAC / Home Services",
    accent: "red",
    screenshot: "/portfolio-hvac.jpg",
    demo: "https://hvac-template-taupe.vercel.app",
  },
  {
    name: "Ember & Oak Kitchen",
    industry: "Restaurant / Dining",
    accent: "amber",
    screenshot: "/portfolio-restaurant.jpg",
    demo: "https://restaurant-template-plum-sigma.vercel.app",
  },
  {
    name: "BlueLine Plumbing",
    industry: "Plumbing / Home Services",
    accent: "blue",
    screenshot: "/portfolio-plumber.jpg",
    demo: "https://plumber-template-neon.vercel.app",
  },
];

const accentColors: Record<string, string> = {
  red: "bg-red-500",
  amber: "bg-amber-500",
  blue: "bg-blue-500",
};

// Sub-component to avoid hooks-in-loop
function ProgressDot({
  scrollYProgress,
  index,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
}) {
  const total = templates.length;
  const scaleX = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0, 1]
  );
  return (
    <div
      className="h-1 rounded-full bg-white/25 overflow-hidden"
      style={{ width: 32 }}
    >
      <motion.div
        className="h-full bg-blue-500 rounded-full"
        style={{ scaleX, transformOrigin: "left" }}
      />
    </div>
  );
}

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.667%"]);

  return (
    <div ref={containerRef} className="relative bg-gray-950" style={{ height: "220vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Horizontal strip */}
        <motion.div className="flex" style={{ x, width: "300%", willChange: "transform" }}>
          {templates.map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-center px-8 md:px-20"
              style={{ width: "100vw" }}
            >
              <a
                href={t.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full max-w-2xl"
              >
                {/* Browser chrome */}
                <div className="rounded-xl overflow-hidden border border-white/10 group-hover:border-blue-500/40 transition-all duration-300 shadow-2xl shadow-black/60">
                  <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    <div className="flex-1 mx-3 bg-gray-700 rounded-full h-4 flex items-center justify-center">
                      <span className="text-gray-500 text-[9px] font-mono truncate px-2">
                        {t.demo.replace("https://", "")}
                      </span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden" style={{ height: "400px" }}>
                    <Image
                      src={t.screenshot}
                      alt={`${t.name} website`}
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${accentColors[t.accent]}`} />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-200">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{t.industry}</p>
                </div>
              </a>
            </div>
          ))}
        </motion.div>

        {/* Progress dots — sub-components avoid hooks-in-loop */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {templates.map((t, i) => (
            <ProgressDot key={t.name} scrollYProgress={scrollYProgress} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
