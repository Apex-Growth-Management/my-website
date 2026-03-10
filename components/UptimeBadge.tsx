"use client";

export default function UptimeBadge() {
  return (
    <a
      href="https://stats.uptimerobot.com/apex"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/50 hover:text-white/70 transition-colors group"
      title="Live uptime status"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span className="font-medium">99.9% uptime</span>
    </a>
  );
}
