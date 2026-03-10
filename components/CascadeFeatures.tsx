"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Zap, Layers, TrendingUp, Headphones } from "lucide-react";

const features = [
  {
    Icon: Zap,
    tag: "Performance",
    title: "Lightning Fast",
    desc: "Sub-second load times with Next.js and a global CDN. Google rewards fast sites with higher rankings — your competitors won't know what hit them.",
    stat: "< 1s",
    statLabel: "typical load time",
    iconBg: "bg-yellow-500/15 border-yellow-500/25",
    iconColor: "text-yellow-400",
    tagColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    accentBar: "bg-yellow-500/40",
  },
  {
    Icon: Layers,
    tag: "Design",
    title: "100% Custom",
    desc: "No templates, no drag-and-drop builders, no compromises. Every pixel is crafted specifically for your brand to convert visitors into paying customers.",
    stat: "0",
    statLabel: "cookie-cutter templates used",
    iconBg: "bg-blue-500/15 border-blue-500/25",
    iconColor: "text-blue-400",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    accentBar: "bg-blue-500/40",
  },
  {
    Icon: TrendingUp,
    tag: "SEO",
    title: "Built to Rank",
    desc: "Schema markup, optimized metadata, Core Web Vitals, and local SEO signals baked in from line one. We build sites the way Google wants to see them.",
    stat: "Top 10",
    statLabel: "where we aim to get you",
    iconBg: "bg-green-500/15 border-green-500/25",
    iconColor: "text-green-400",
    tagColor: "text-green-400 bg-green-400/10 border-green-400/20",
    accentBar: "bg-green-500/40",
  },
  {
    Icon: Headphones,
    tag: "Support",
    title: "We Stay On",
    desc: "We're your web team — not a one-and-done agency. Need a change? Message us. Most updates are live within 24 hours, no tickets or queues.",
    stat: "24hr",
    statLabel: "typical turnaround for updates",
    iconBg: "bg-purple-500/15 border-purple-500/25",
    iconColor: "text-purple-400",
    tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    accentBar: "bg-purple-500/40",
  },
];

// Each panel fades in then fades out as the next one arrives — no stacking
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
  const step = 1 / total; // 0.25
  const fade = 0.07;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Entry window
  const eS = isFirst ? 0 : index * step - fade;
  const eE = isFirst ? 0.001 : index * step + fade;

  // Exit window (start of next feature's entry)
  const xS = (index + 1) * step - fade;
  const xE = (index + 1) * step + fade;

  // Build multi-keypoint opacity: fade in → hold → fade out
  const opacityInput = isFirst
    ? isLast ? [0, 1] : [0, xS, xE]
    : isLast
    ? [eS, eE, 1]
    : [eS, eE, xS, xE];

  const opacityOutput = isFirst
    ? isLast ? [1, 1] : [1, 1, 0]
    : isLast
    ? [0, 1, 1]
    : [0, 1, 1, 0];

  const opacity = useTransform(progress, opacityInput, opacityOutput);
  const y = useTransform(progress, [eS, eE], [isFirst ? 0 : 28, 0]);

  const { Icon } = feature;

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-2xl bg-gray-900 border border-white/8 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
        {/* Top accent bar */}
        <div className={`h-1 w-full ${feature.accentBar}`} />

        <div className="p-8 md:p-10">
          {/* Icon + tag row */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${feature.iconBg}`}>
              <Icon className={`w-5 h-5 ${feature.iconColor}`} />
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${feature.tagColor}`}>
              {feature.tag}
            </span>
          </div>

          {/* Title + description */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            {feature.desc}
          </p>

          {/* Stat */}
          <div className="flex items-baseline gap-3 border-t border-white/8 pt-6">
            <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
              {feature.stat}
            </span>
            <span className="text-gray-500 text-sm">{feature.statLabel}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Sub-component for progress indicator — no hooks in loop
function ProgressPip({
  progress,
  index,
  total,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const step = 1 / total;
  const active = useTransform(
    progress,
    [index * step, index * step + 0.01],
    [0.3, 1]
  );
  return (
    <motion.div
      style={{ opacity: active }}
      className="w-1.5 h-1.5 rounded-full bg-white"
    />
  );
}

export default function CascadeFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.09], [1, 0]);

  return (
    <div ref={ref} className="relative bg-gray-950" style={{ height: "200vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-50" />

        {/* Section header */}
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

        {/* Feature panels — crossfade, not stack */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full" style={{ height: "72vh" }}>
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

        {/* Progress pips */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-2.5">
          {features.map((f, i) => (
            <ProgressPip
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
