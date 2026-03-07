"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  { title: "Results First", description: "We measure success by what your business achieves — leads, sales, and growth." },
  { title: "Clear Communication", description: "No jargon. We explain everything in plain English and keep you in the loop." },
  { title: "Built to Last", description: "We build websites with clean code and modern practices that stand the test of time." },
  { title: "Always Available", description: "When you need updates or have questions, we're quick to respond and easy to reach." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80&fit=crop" alt="Laptop and workspace" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/78" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About <span className="text-blue-400">Apex Growth</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A Raleigh, NC web design company built to help local businesses compete online. We handle the technical side so you can focus on what you do best.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
              <p>Apex Growth Management was founded by Walker Norris and Jack Francis — two Raleigh natives who kept seeing the same problem: great local businesses with outdated websites, or no web presence at all.</p>
              <p>We built this company to fix that. We offer professional-grade web design at a price that makes sense for real businesses — not just enterprise clients with big budgets.</p>
              <p>Whether you&apos;re launching a new business or refreshing an existing one, we&apos;ll build you something you&apos;re proud of and keep it running smoothly.</p>
            </div>
          </motion.div>
          <motion.div
            className="relative rounded-2xl overflow-hidden h-80"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop" alt="Code on screen" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What We Stand For
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="border border-gray-200 bg-white rounded-2xl p-6 hover:border-blue-300 hover:shadow-sm transition-all">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-2xl md:text-3xl font-bold">Who We Are</h2>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "Walker Norris", role: "Co-Founder", bio: "Walker leads client relationships and project delivery. He brings a focus on clean design, fast turnarounds, and making sure every site we ship actually drives results for the business behind it." },
              { name: "Jack Francis", role: "Co-Founder", bio: "Jack handles the technical side — from architecture and performance to SEO and ongoing site management. He makes sure everything we build is fast, secure, and built to last." },
            ].map((person) => (
              <motion.div key={person.name} variants={fadeUp} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{person.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-4">{person.role} · Apex Growth Management</p>
                <p className="text-gray-500 leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo quote banner */}
      <section className="relative h-64 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&fit=crop" alt="Working on laptop" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/75 flex items-center justify-center">
          <motion.p
            className="text-2xl md:text-4xl font-extrabold text-center text-white max-w-xl px-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            &ldquo;Your website should work as hard as <span className="text-blue-400">you do.</span>&rdquo;
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-20 px-6 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4">Let&apos;s work together</h3>
        <p className="text-gray-500 mb-8">Reach out and let&apos;s talk about what your business needs.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Get in Touch</Link>
          <Link href="/pricing" className="border border-gray-300 hover:border-gray-500 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg transition-colors">View Pricing</Link>
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
        <p className="text-white/30 mt-4">© {new Date().getFullYear()} Apex Growth Management. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 text-white/20 text-xs">
          <a href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}
