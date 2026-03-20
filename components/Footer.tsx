import Image from "next/image";
import UptimeBadge from "@/components/UptimeBadge";

const instagramSvg = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 px-6 text-center text-sm">
      <div className="flex justify-center mb-4">
        <Image src="/logo.png" alt="Apex Growth Management" width={144} height={48} className="h-12 w-auto brightness-0 invert" />
      </div>
      <p className="text-white/60 text-sm mb-3">Raleigh, NC</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white/50">
        <a href="tel:9197440504" className="hover:text-white transition-colors">(919) 744-0504</a>
        <span className="hidden sm:inline text-white/20">·</span>
        <a href="tel:9196065609" className="hover:text-white transition-colors">(919) 606-5609</a>
        <span className="hidden sm:inline text-white/20">·</span>
        <a href="mailto:admin@apexgrowthmanagement.com" className="hover:text-white transition-colors">admin@apexgrowthmanagement.com</a>
      </div>
      <div className="flex justify-center mt-5 mb-1">
        <a
          href="https://www.instagram.com/apexgrowthmanagement/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          {instagramSvg}
        </a>
      </div>
      <p className="text-white/30 mt-4">© {new Date().getFullYear()} Apex Growth Management. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2 text-white/20 text-xs">
        <a href="/referrals" className="hover:text-white/50 transition-colors">Refer & Earn $200</a>
        <span>·</span>
        <a href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</a>
        <span>·</span>
        <a href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</a>
      </div>
      <div className="flex justify-center mt-5">
        <UptimeBadge />
      </div>
    </footer>
  );
}
