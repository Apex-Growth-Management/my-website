"use client";

import { useState, useEffect } from "react";

const phrases = [
  "a Better Website.",
  "Higher Google Rankings.",
  "More Customers Online.",
  "Real Business Growth.",
];

export default function TypewriterText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = phrases[phraseIdx];
    if (!deleting) {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          55
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 2400);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }
  }, [displayed, deleting, phraseIdx]);

  return (
    <span className="animate-gradient bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(96,165,250,0.5)]">
      {displayed}
      <span
        className="text-blue-400 opacity-100"
        style={{ animation: "badgePulse 0.8s ease-in-out infinite" }}
      >
        |
      </span>
    </span>
  );
}
