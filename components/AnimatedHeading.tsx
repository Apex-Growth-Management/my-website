"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function AnimatedHeading({ text, className, as: Tag = "h2" }: AnimatedHeadingProps) {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
  };

  return (
    <Tag className={className}>
      <motion.span
        className="inline-block"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-label={text}
      >
        {letters.map((char, i) => (
          <motion.span key={i} variants={letter} className="inline-block" style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
