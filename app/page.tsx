"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  Monitor, Zap, Wrench, TrendingUp,
  MapPin, Clock, ShieldCheck, HeadphonesIcon, ChevronDown, ArrowRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import TypewriterText from "@/components/TypewriterText";
import SlotCounter from "@/components/SlotCounter";
import ScrollRevealText from "@/components/ScrollRevealText";
import HorizontalScroll from "@/components/HorizontalScroll";
import CascadeFeatures from "@/components/CascadeFeatures";
import HeroParticles from "@/components/HeroParticles";
import ScrambleText from "@/components/ScrambleText";
import LatestPosts from "@/components/LatestPosts";
import { Gauge } from "lucide-react";

const services = [
  { Icon: Monitor, title: "Website Design", description: "Custom, professional websites built to convert visitors into customers." },
  { Icon: Zap, title: "Hosting & Performance", description: "Fast, reliable hosting with 99.9% uptime so your site is always live." },
  { Icon: Wrench, title: "Website Maintenance", description: "Need a change? We handle text, images, and layout updates quickly." },
  { Icon: TrendingUp, title: "SEO Optimization", description: "Rank higher on Google and drive organic traffic to your business." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <main className="bg-white text-gray-900">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden">
        {/* Parallax background */}
        <motion.div className="absolute inset-0 scale-110" style={{ y: heroY }}>
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&fit=crop"
            alt="Web design workspace"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 grid-overlay" />
        <HeroParticles />

        <motion.div
          className="max-w-4xl mx-auto relative z-10 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Your Business Deserves<br />
            <span className="block" style={{ minHeight: "calc(3 * 1.25 * 1em)" }}>
              <TypewriterText />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Based in Raleigh, NC — we build fast, professional websites with full-service support covering design, hosting, updates, and SEO, so you can focus on running your business.
          </p>

          {/* Magnetic CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/40"
              >
                Get Started
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://calendly.com/apexgrowthmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-white/30 hover:border-white/70 hover:bg-white/10 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200"
              >
                Book a Free Call
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium">Scroll</span>
          <div className="scroll-bounce"><ChevronDown className="w-4 h-4" /></div>
        </motion.div>
      </section>

      {/* ── Trust Bar ─────────────────────────────────────────────── */}
      <motion.section
        className="py-5 px-6 border-b border-gray-100 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-gray-500">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600 shrink-0" /><span>Based in Raleigh, NC</span></div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-600 shrink-0" /><span>Sites delivered in 2–3 days</span></div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" /><span>No long-term contracts</span></div>
          <div className="flex items-center gap-2"><HeadphonesIcon className="w-4 h-4 text-blue-600 shrink-0" /><span>Ongoing support included</span></div>
          <a
            href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fapexgrowthmanagement.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-green-600 font-semibold hover:text-green-500 transition-colors"
          >
            <Gauge className="w-4 h-4 shrink-0" /><span>100 PageSpeed Score</span>
          </a>
        </div>
      </motion.section>

      {/* ── Slot Machine Metrics ───────────────────────────────────── */}
      <section className="relative py-20 px-6 bg-gray-950 overflow-hidden noise">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <SlotCounter />
        </div>
      </section>

      {/* ── Tech Marquee ──────────────────────────────────────────── */}
      <section className="bg-gray-950 border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-2">
          <motion.p
            className="text-center text-gray-600 text-xs font-medium tracking-[0.2em] uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built on Modern Technology
          </motion.p>
        </div>
        <TechMarquee />
      </section>

      {/* ── Services — TiltCard + Diagonal Stagger ─────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
            <ScrambleText text="What We Do" className="text-3xl md:text-5xl font-bold mb-4 block" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Everything your business needs to succeed online — all in one place.</p>
          </motion.div>

          {/* Diagonal stagger grid with TiltCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ Icon, title, description }, i) => {
              const col = i % 4;
              const row = Math.floor(i / 4);
              const diagonalDelay = (row + col) * 0.1;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: diagonalDelay, ease: "easeOut" }}
                  className="h-full"
                >
                  <TiltCard className="h-full">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400/50 transition-colors group cursor-default h-full">
                      <div className="w-11 h-11 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-base font-semibold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href="/services" className="text-blue-600 hover:text-blue-500 font-medium transition-colors inline-flex items-center gap-1.5 group">
              See all services
              <span className="group-hover:translate-x-1 transition-transform inline-block"><ArrowRight className="w-4 h-4" /></span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Cascade Features — sticky scroll reveal ────────────────── */}
      <CascadeFeatures />

      {/* ── How It Works ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
            <ScrambleText text="How It Works" className="text-3xl md:text-5xl font-bold mb-4 block" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto">From first call to live site in as little as a week.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div
              className="hidden md:block absolute h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent z-0"
              style={{ top: "1.5rem", left: "16.67%", right: "16.67%" }}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Get in Touch", desc: "Fill out our contact form or give us a call. We'll learn about your business and what you need." },
                { step: 2, title: "We Build It", desc: "We design and build your site. You'll get a preview link to review before anything goes live." },
                { step: 3, title: "You Launch", desc: "Once you're happy, we go live on your domain. We handle everything — no technical knowledge needed." },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  className="flex flex-col items-center text-center relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                >
                  <motion.div
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5 shrink-0 shadow-lg shadow-blue-600/30"
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Heading ──────────────────────────────────────── */}
      <section className="relative pt-20 pb-6 px-6 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">See What&apos;s Possible</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Scroll to explore real websites built for real businesses.</p>
          </motion.div>
        </div>
      </section>

      {/* ── Horizontal Scroll Portfolio ───────────────────────────── */}
      {/* clip-x wrapper so the 300vw strip never causes a page scrollbar */}
      <div style={{ overflowX: "clip" }}>
        <HorizontalScroll />
      </div>

      {/* ── Portfolio CTA ─────────────────────────────────────────── */}
      <section className="py-10 px-6 bg-gray-950 border-t border-white/5 text-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:bg-white/5 text-sm group"
        >
          View Full Portfolio
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* ── Pricing Strip ─────────────────────────────────────────── */}
      <section className="relative py-20 px-6 bg-gray-900 overflow-hidden noise">
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Transparent Pricing. No Surprises.</h2>
            <p className="text-white/50 max-w-lg mx-auto">Know exactly what you&apos;ll pay before signing anything.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Website Build", value: "From $1,000", sub: "Standard · Pro · Premium", note: "One-time setup fee" },
              { label: "Monthly Retainer", value: "From $249/mo", sub: "Basic · Growth · Premium", note: "Hosting, updates & SEO" },
              { label: "Contracts", value: "None", sub: "Cancel anytime", note: "30-day written notice" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.07)" }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center cursor-default"
              >
                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-3">{item.label}</p>
                <p className="text-3xl font-extrabold text-white mb-1">{item.value}</p>
                <p className="text-blue-400/70 text-xs font-medium mb-2">{item.sub}</p>
                <p className="text-white/30 text-xs">{item.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:bg-white/5 text-sm group"
            >
              See Full Pricing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA with Scroll Reveal Text ───────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
          alt="Modern office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 grid-overlay opacity-50" />

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          {/* Scroll-reveal headline */}
          <div className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <ScrollRevealText
              text="Ready to grow your online presence?"
              className="text-3xl md:text-5xl font-bold leading-tight"
            />
          </div>

          <motion.p
            className="text-white/60 text-lg mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Let&apos;s build something great together. Contact us today for a free consultation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/40"
              >
                Contact Us
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://calendly.com/apexgrowthmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-white/30 hover:border-white/60 hover:bg-white/10 text-white/80 hover:text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200"
              >
                Book a Call
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── Latest Blog Posts ─────────────────────────────────────── */}
      <LatestPosts />

      <Footer />
    </main>
  );
}
