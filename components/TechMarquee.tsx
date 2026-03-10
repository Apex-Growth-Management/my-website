"use client";

const items = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel",
  "Sanity CMS", "Cloudflare", "Node.js", "Google Analytics", "SEO Optimization",
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel",
  "Sanity CMS", "Cloudflare", "Node.js", "Google Analytics", "SEO Optimization",
];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-5">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm font-medium tracking-wide transition-colors duration-200 cursor-default px-6"
          >
            <span className="w-1 h-1 bg-blue-500/50 rounded-full shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
