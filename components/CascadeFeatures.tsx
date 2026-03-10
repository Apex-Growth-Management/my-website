"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const features = [
  {
    icon: "⚡",
    tag: "Performance",
    title: "Lightning Fast",
    desc: "Sub-second load times with Next.js and a global CDN. Google rewards fast sites with higher rankings — your competitors won't know what hit them.",
    stat: "< 1s",
    statLabel: "typical load time",
    color: "from-yellow-500/15 to-amber-600/8",
    border: "border-yellow-500/20",
    tagColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  },
  {
    icon: "🎨",
    tag: "Design",
    title: "100% Custom",
    desc: "No templates, no drag-and-drop builders, no compromises. Every pixel is crafted specifically for your brand to convert visitors into paying customers.",
    stat: "0",
    statLabel: "cookie-cutter templates used",
    color: "from-blue-500/15 to-cyan-600/8",
    border: "border-blue-500/20",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    icon: "📈",
    tag: "SEO",
    title: "Built to Rank",
    desc: "Schema markup, optimized metadata, Core Web Vitals, and local SEO signals baked in from line one. We build sites the way Google wants to see them.",
    stat: "Top 10",
    statLabel: "where we aim to get you",
    color: "from-green-500/15 to-emerald-600/8",
    border: "border-green-500/20",
    tagColor: "text-green-400 bg-green-400/10 border-green-400/20",
  },
  {
    icon: "🛠️",
    tag: "Support",
    title: "We Stay On",
    desc: "We're your web team — not a one-and-done agency. Need a change? Message us. Most updates are live within 24 hours, no tickets or queues.",
    stat: "24hr",
    statLabel: "typical turnaround for updates",
    color: "from-purple-500/15 to-violet-600/8",
    border: "border-purple-500/20",
    tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  },
];

// Each panel is its own component so useTransform isn't called in a loop
function FeaturePanel({
  feature,
  progress,
  index,
  total,
}: {
  feature: (typeof features)[0];
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const entryStart = index === 0 ? 0 : (index / total) * 0.85;
  const entryEnd = index === 0 ? 0.001 : Math.min(entryStart + 0.15, 1);

  const opacity = useTransform(
    progress,
    [entryStart, entryEnd],
    [index === 0 ? 1 : 0, 1]
  );
  const y = useTransform(
    progress,
    [entryStart, entryEnd],
    [index === 0 ? 0 : 50, 0]
  );

  return (
    <motion.div
      style={{ opacity, y, zIndex: index + 1 }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      <div
        className={`w-full max-w-2xl bg-gradient-to-br ${feature.color} border ${feature.border} rounded-2xl p-8 md:p-10 backdrop-blur-sm`}
      >
        <div
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-5 ${feature.tagColor}`}
        >
          {feature.tag}
        </div>

        <div className="flex items-start gap-5 mb-6">
          <div className="text-5xl shrink-0">{feature.icon}</div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              {feature.desc}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex items-baseline gap-3">
          <span className="text-3xl font-extrabold text-white font-mono">
            {feature.stat}
          </span>
          <span className="text-gray-500 text-sm">{feature.statLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Sub-component for progress bars — avoids hooks-in-loop
function ProgressBar({
  progress,
  index,
  total,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const scaleY = useTransform(
    progress,
    [
      index === 0 ? 0 : (index / total) * 0.85,
      Math.min(((index + 1) / total) * 0.85, 1),
    ],
    [index === 0 ? 1 : 0, 1]
  );
  return (
    <div className="w-1 rounded-full bg-white/15 overflow-hidden" style={{ height: 20 }}>
      <motion.div
        className="w-full rounded-full bg-blue-500"
        style={{ scaleY, transformOrigin: "top" }}
      />
    </div>
  );
}

export default function CascadeFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    // 200vh: enough for a satisfying cascade without being exhausting
    <div ref={ref} className="relative bg-gray-950" style={{ height: "200vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-60" />

        {/* Section label */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className="absolute top-16 left-0 right-0 text-center z-20 pointer-events-none"
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Why Choose Apex
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Sets Us Apart
          </h2>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/25 text-xs tracking-widest uppercase pointer-events-none"
        >
          Scroll to explore
        </motion.div>

        {/* Feature panels */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full" style={{ height: "70vh" }}>
            {features.map((feature, i) => (
              <FeaturePanel
                key={feature.title}
                feature={feature}
                progress={scrollYProgress}
                index={i}
                total={features.length}
              />
            ))}
          </div>
        </div>

        {/* Progress bars — sub-components, no hooks-in-loop */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-2">
          {features.map((f, i) => (
            <ProgressBar
              key={f.title}
              progress={scrollYProgress}
              index={i}
              total={features.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
