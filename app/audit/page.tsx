"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle, AlertTriangle, XCircle, ArrowRight, Zap, Globe, BarChart2, Shield } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const AUDIT_CHECKS = [
  { icon: Zap, label: "Page Speed Analysis", description: "Core Web Vitals & load time" },
  { icon: Globe, label: "Mobile Responsiveness", description: "Layout, touch targets, viewport" },
  { icon: BarChart2, label: "SEO Fundamentals", description: "Meta tags, headings, keywords" },
  { icon: Shield, label: "Security & Trust Signals", description: "SSL, HTTPS, trust indicators" },
];

export default function AuditPage() {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url) return;
    setSending(true);

    // Send to contact API as an audit request
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Audit",
        lastName: "Request",
        email: "audit-request@placeholder.com",
        business: url,
        service: "Website Design",
        message: `FREE AUDIT REQUEST\nWebsite: ${url}`,
      }),
    }).catch(() => {});

    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "conversion", { send_to: "AW-17993946041" });
    }

    setSending(false);
    setSubmitted(true);
  }

  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Blue glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Search className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Free Website Audit</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Is Your Website{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Costing You Clients?
            </span>
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Enter your URL and we'll personally review your site for speed, SEO, mobile experience, and trust signals — then send you a plain-English report.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  placeholder="https://yourbusiness.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold px-6 py-4 rounded-full transition-colors text-sm shrink-0"
                >
                  {sending ? "Submitting..." : <>Get My Free Audit <ArrowRight className="w-4 h-4" /></>}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 rounded-2xl px-8 py-6 max-w-lg mx-auto"
              >
                <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-1">We're on it!</h3>
                <p className="text-white/60 text-sm">
                  We'll personally audit <strong className="text-white">{url}</strong> and email you a report within 24 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-white/30 text-xs mt-5">No credit card. No sales pressure. Just an honest audit.</p>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold mb-3">What We Look At</h2>
            <p className="text-gray-500">A real human reviews your site — not just an automated tool.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {AUDIT_CHECKS.map(({ icon: Icon, label, description }) => (
              <div key={label} className="flex gap-5 items-start bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{label}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example findings */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Common Issues We Find</h2>
            <p className="text-gray-500">Most local business websites have at least 3 of these.</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { status: "red", text: "Page loads in 7+ seconds on mobile — most visitors leave after 3s" },
              { status: "red", text: "No title tag or meta description — invisible to Google" },
              { status: "yellow", text: "Contact form goes to an unmoni­tored email address" },
              { status: "red", text: "Website not optimized for mobile — 65% of traffic is on phones" },
              { status: "yellow", text: "No Google Business Profile linked or optimized" },
              { status: "red", text: "No SSL certificate — browsers show 'Not Secure' warning" },
            ].map(({ status, text }) => (
              <div key={text} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4">
                {status === "red" ? (
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                )}
                <p className="text-gray-700 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Fix It?</h2>
          <p className="text-gray-500 mb-8">
            After your audit, we'll put together a custom proposal to address every issue — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-4 rounded-full transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://calendly.com/apexgrowthmanagement"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-7 py-4 rounded-full transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
