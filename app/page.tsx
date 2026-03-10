"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  Monitor, Zap, Wrench, TrendingUp,
  MapPin, Clock, ShieldCheck, HeadphonesIcon, ChevronDown, ArrowRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHeading from "@/components/AnimatedHeading";
import Footer from "@/components/Footer";
import CounterStats from "@/components/CounterStats";
import TechMarquee from "@/components/TechMarquee";

const services = [
  { Icon: Monitor, title: "Website Design", description: "Custom, professional websites built to convert visitors into customers." },
  { Icon: Zap, title: "Hosting & Performance", description: "Fast, reliable hosting with 99.9% uptime so your site is always live." },
  { Icon: Wrench, title: "Website Maintenance", description: "Need a change? We handle text, images, and layout updates quickly." },
  { Icon: TrendingUp, title: "SEO Optimization", description: "Rank higher on Google and drive organic traffic to your business." },
];

const templates = [
  { name: "Arctic Air HVAC", industry: "HVAC / Home Services", accent: "red", screenshot: "/portfolio-hvac.jpg", demo: "https://hvac-template-taupe.vercel.app" },
  { name: "Ember & Oak Kitchen", industry: "Restaurant / Dining", accent: "amber", screenshot: "/portfolio-restaurant.jpg", demo: "https://restaurant-template-plum-sigma.vercel.app" },
  { name: "BlueLine Plumbing", industry: "Plumbing / Home Services", accent: "blue", screenshot: "/portfolio-plumber.jpg", demo: "https://plumber-template-neon.vercel.app" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

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

        <motion.div
          className="max-w-4xl mx-auto relative z-10 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2.5 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full badge-dot" />
            Raleigh, NC · Sites Delivered in 2–3 Days
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Your Business Deserves<br />
            <span className="animate-gradient bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(96,165,250,0.5)]">
              a Better Website.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Based in Raleigh, NC — we build fast, professional websites with full-service support covering design, hosting, updates, and SEO, so you can focus on running your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/40"
            >
              Get Started
            </Link>
            <a
              href="https://calendly.com/admin-apexgrowthmanagement/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white/70 hover:bg-white/10 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200"
            >
              Book a Free Call
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
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
        </div>
      </motion.section>

      {/* ── Animated Metrics ──────────────────────────────────────── */}
      <section className="relative py-20 px-6 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <CounterStats />
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

      {/* ── Services Overview ─────────────────────────────────────── */}
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
            <AnimatedHeading text="What We Do" className="text-3xl md:text-5xl font-bold mb-4" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Everything your business needs to succeed online — all in one place.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map(({ Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(59,130,246,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400/50 transition-colors group cursor-default"
              >
                <div className="w-11 h-11 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>

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

      {/* ── How It Works ──────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
            <AnimatedHeading text="How It Works" className="text-3xl md:text-5xl font-bold mb-4" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto">From first call to live site in as little as a week.</p>
          </motion.div>

          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
              ].map((item) => (
                <motion.div key={item.step} variants={fadeUp} className="flex flex-col items-center text-center relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5 shrink-0 shadow-lg shadow-blue-600/30"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio Preview ──────────────────────────────────────── */}
      <section className="relative py-24 px-6 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">See What&apos;s Possible</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Real websites built for real businesses — each one custom-designed for the industry.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {templates.map((t) => (
              <motion.a
                key={t.name}
                href={t.demo}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group block"
              >
                {/* Browser chrome mockup */}
                <div className="rounded-xl overflow-hidden border border-white/10 group-hover:border-blue-500/40 transition-all duration-300 shadow-2xl">
                  {/* Browser bar */}
                  <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    <div className="flex-1 mx-3 bg-gray-700 rounded-full h-4 flex items-center justify-center">
                      <span className="text-gray-500 text-[9px] font-mono truncate px-2">{t.demo.replace("https://", "")}</span>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={t.screenshot}
                      alt={`${t.name} website preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Accent bar */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${t.accent === "red" ? "bg-red-500" : t.accent === "amber" ? "bg-amber-500" : "bg-blue-500"}`} />
                  </div>
                </div>
                {/* Label */}
                <div className="mt-4 text-center">
                  <p className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.industry}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:bg-white/5 text-sm group"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Strip ─────────────────────────────────────────── */}
      <section className="relative py-20 px-6 bg-gray-900 overflow-hidden">
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: "Website Build", value: "From $1,000", sub: "Standard · Pro · Premium", note: "One-time setup fee" },
              { label: "Monthly Retainer", value: "From $249/mo", sub: "Basic · Growth · Premium", note: "Hosting, updates & SEO" },
              { label: "Contracts", value: "None", sub: "Cancel anytime", note: "30-day written notice" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.07)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center cursor-default"
              >
                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-3">{item.label}</p>
                <p className="text-3xl font-extrabold text-white mb-1">{item.value}</p>
                <p className="text-blue-400/70 text-xs font-medium mb-2">{item.sub}</p>
                <p className="text-white/30 text-xs">{item.note}</p>
              </motion.div>
            ))}
          </motion.div>

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

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
          alt="Modern office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 grid-overlay opacity-50" />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to grow your<br />
            <span className="animate-gradient bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              online presence?
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Let&apos;s build something great together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/40"
            >
              Contact Us
            </Link>
            <a
              href="https://calendly.com/admin-apexgrowthmanagement/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white/60 hover:bg-white/10 text-white/80 hover:text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
