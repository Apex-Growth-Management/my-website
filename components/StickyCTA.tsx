"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.4 && !dismissed) setVisible(true);
      else if (scrolled <= 0.4) setVisible(false);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg"
        >
          <div className="bg-gray-900 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-4 shadow-2xl shadow-black/40">
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-snug">
                Ready to grow your business online?
              </p>
              <p className="text-white/50 text-xs mt-0.5">Book a free 30-minute strategy call.</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://calendly.com/admin-apexgrowthmanagement/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <CalendarDays className="w-3.5 h-3.5" />
                Book a Call
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="text-white/30 hover:text-white/60 transition-colors p-1"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
