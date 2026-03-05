"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", business: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Get in Touch</h1>
            <p className="text-white/50 text-lg">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-white/50">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">First Name</label>
                  <input
                    name="firstName" value={form.firstName} onChange={handleChange} required
                    type="text" placeholder="John"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-white/60 font-medium">Last Name</label>
                  <input
                    name="lastName" value={form.lastName} onChange={handleChange} required
                    type="text" placeholder="Smith"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">Email</label>
                <input
                  name="email" value={form.email} onChange={handleChange} required
                  type="email" placeholder="john@example.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">Business Name (optional)</label>
                <input
                  name="business" value={form.business} onChange={handleChange}
                  type="text" placeholder="Your Business"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">What do you need?</label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="" className="bg-black">Select a service</option>
                  <option value="Website Design" className="bg-black">Website Design</option>
                  <option value="Hosting" className="bg-black">Hosting</option>
                  <option value="Minor Updates" className="bg-black">Minor Updates</option>
                  <option value="SEO Optimization" className="bg-black">SEO Optimization</option>
                  <option value="Full Package" className="bg-black">Full Package</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60 font-medium">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required
                  rows={5} placeholder="Tell us about your business and what you're looking for..."
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit" disabled={status === "sending"}
                className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-4 rounded-full text-lg transition-colors mt-2"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          <div className="flex flex-col items-center gap-2 mt-8 text-sm text-white/30">
            <p>Call or text us: <a href="tel:9197440504" className="text-blue-400 hover:text-blue-300 transition-colors">(919) 744-0504</a></p>
            <p>Or email: <a href="mailto:admin@apexgrowthmanagement.com" className="text-blue-400 hover:text-blue-300 transition-colors">admin@apexgrowthmanagement.com</a></p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Apex Growth Management. All rights reserved.
      </footer>
    </main>
  );
}
