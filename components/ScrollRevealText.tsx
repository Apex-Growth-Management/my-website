"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function RevealWord({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const y = useTransform(progress, [start, end], [18, 0]);

  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {word}
    </motion.span>
  );
}

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export default function ScrollRevealText({
  text,
  className = "",
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className={`flex flex-wrap justify-center gap-x-[0.3em] gap-y-1 ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <RevealWord
            key={i}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </div>
  );
}
