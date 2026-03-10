"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/98 backdrop-blur-lg shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Apex Growth Management"
            width={72}
            height={24}
            className="brightness-0 invert"
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-white/60 hover:text-white transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/audit"
            className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            Free Audit
          </Link>
          <a
            href="https://calendly.com/admin-apexgrowthmanagement/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            Book a Call
          </a>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-900/98 backdrop-blur-lg px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/audit"
            onClick={() => setOpen(false)}
            className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            Free Audit
          </Link>
          <a
            href="https://calendly.com/admin-apexgrowthmanagement/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
          >
            Book a Call
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-center transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
