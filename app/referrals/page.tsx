"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ArrowRight, Check, Users, Send, DollarSign } from "lucide-react";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const steps = [
  { Icon: Users, title: "Send Us a Referral", description: "Fill out the form below with your info and the business you're referring." },
  { Icon: Send, title: "We Reach Out", description: "We'll contact them, show them what we can do, and handle everything from there." },
  { Icon: DollarSign, title: "Earn Your Credit", description: "When they sign up for a monthly plan, you get a $200 credit applied to your next invoice." },
];

type FormData = {
  referrerName: string;
  referrerEmail: string;
  businessName: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  notes: string;
};

export default function ReferralsPage() {
  const [form, setForm] = useState<FormData>({
    referrerName: "",
    referrerEmail: "",
    businessName: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/referral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          className="max-w-3xl mx-auto text-center relative"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Gift className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Referral Program</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Refer a Business.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Earn $200.
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Know a business that needs a website? Send them our way. When they sign up for a monthly plan, you get a $200 credit on your next invoice.
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-3">How It Works</h2>
            <p className="text-gray-500">Three simple steps. No strings attached.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map(({ Icon, title, description }, i) => (
              <motion.div key={title} variants={fadeUp} className="text-center">
                <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-3">Submit a Referral</h2>
            <p className="text-gray-500">Tell us who to reach out to. We&apos;ll take it from there.</p>
          </motion.div>

          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Referral submitted!</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We&apos;ll reach out to them and keep you posted. Once they sign up, your $200 credit will be applied automatically.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              {/* Your Info */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Your Information</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-sm text-gray-500 font-medium">Your Name *</label>
                    <input
                      value={form.referrerName}
                      onChange={(e) => set("referrerName", e.target.value)}
                      required
                      type="text"
                      placeholder="John Smith"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-sm text-gray-500 font-medium">Your Email *</label>
                    <input
                      value={form.referrerEmail}
                      onChange={(e) => set("referrerEmail", e.target.value)}
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Who are you referring */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Business You&apos;re Referring</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-500 font-medium">Business Name *</label>
                    <input
                      value={form.businessName}
                      onChange={(e) => set("businessName", e.target.value)}
                      required
                      type="text"
                      placeholder="Acme Plumbing LLC"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 flex flex-col gap-1.5">
                      <label className="text-sm text-gray-500 font-medium">Contact Name</label>
                      <input
                        value={form.contactName}
                        onChange={(e) => set("contactName", e.target.value)}
                        type="text"
                        placeholder="Owner or manager name"
                        className="border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <label className="text-sm text-gray-500 font-medium">Their Phone</label>
                      <input
                        value={form.contactPhone}
                        onChange={(e) => set("contactPhone", e.target.value)}
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-500 font-medium">Their Email</label>
                    <input
                      value={form.contactEmail}
                      onChange={(e) => set("contactEmail", e.target.value)}
                      type="email"
                      placeholder="owner@acmeplumbing.com"
                      className="border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-500 font-medium">Anything else we should know?</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      rows={3}
                      placeholder="How you know them, what they need, best time to reach out..."
                      className="border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm mb-4 text-center">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-4 rounded-full text-base transition-colors"
              >
                {status === "sending" ? "Submitting..." : <>Submit Referral <ArrowRight className="w-4 h-4" /></>}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Program Details</h2>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p><strong>$200 credit</strong> applied to your next monthly invoice for every referral that signs up for a monthly plan (Basic, Growth, or Premium).</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p><strong>No limit</strong> on referrals. Refer 5 businesses, earn $1,000 in credits. Credits stack.</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p><strong>Open to everyone</strong> — you don&apos;t have to be a current client to refer someone. Non-clients receive the $200 as a discount on their own future plan.</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p><strong>Credit is earned</strong> when the referred business pays their first monthly invoice. We&apos;ll email you when it happens.</p>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p><strong>Credits don&apos;t expire</strong> and can be applied to any Apex Growth Management service.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
