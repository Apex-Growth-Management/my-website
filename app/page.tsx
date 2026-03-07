"use client";

import Link from "next/link";
import Image from "next/image";
import { Monitor, Zap, Wrench, TrendingUp, MapPin, Clock, ShieldCheck, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/AnimatedHeading";

const services = [
  { Icon: Monitor, title: "Website Design", description: "Custom, professional websites built to convert visitors into customers." },
  { Icon: Zap, title: "Hosting & Performance", description: "Fast, reliable hosting with 99.9% uptime so your site is always live." },
  { Icon: Wrench, title: "Minor Updates", description: "Need a change? We handle text, images, and layout updates quickly." },
  { Icon: TrendingUp, title: "SEO Optimization", description: "Rank higher on Google and drive organic traffic to your business." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&fit=crop" alt="Web design workspace" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/72" />
        <motion.div
          className="max-w-4xl mx-auto relative z-10 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Raleigh, NC · Web Design · Hosting · SEO
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Your Business Deserves<br />
            <span className="animate-gradient bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(96,165,250,0.6)]">
              a Better Website.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Based in Raleigh, NC, we deliver fast, professional websites with full-service support covering design, hosting, updates, and SEO, so you can stay focused on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Get Started</Link>
            <Link href="/services" className="border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Our Services</Link>
          </div>
        </motion.div>
      </section>

      {/* Trust bar */}
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

      {/* Services Overview */}
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
                whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(59,130,246,0.18)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400/50 transition-colors group cursor-default"
              >
                <div className="w-11 h-11 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
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
            <Link href="/services" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">See all services →</Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: 1, title: "Get in Touch", desc: "Fill out our contact form or give us a call. We'll learn about your business and what you need." },
              { step: 2, title: "We Build It", desc: "We design and build your site. You'll get a preview link to review before anything goes live." },
              { step: 3, title: "You Launch", desc: "Once you're happy, we go live on your domain. We handle everything — no technical knowledge needed." },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5 shrink-0">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="relative py-32 px-6 overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop" alt="Modern office" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to grow your<br />
            <span className="animate-gradient bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              online presence?
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-10">Let&apos;s build something great together. Contact us today for a free consultation.</p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors">Contact Us</Link>
        </div>
      </motion.section>

      <footer className="bg-gray-900 py-10 px-6 text-center text-sm">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Apex Growth Management" className="h-12 brightness-0 invert" style={{ objectFit: "contain" }} />
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
          <a href="https://www.instagram.com/apexgrowthmanagement/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
        <p className="text-white/30 mt-4">© {new Date().getFullYear()} Apex Growth Management. All rights reserved.</p>
      </footer>
    </main>
  );
}
