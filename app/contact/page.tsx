"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", business: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Get in Touch</h1>
            <p className="text-gray-500 text-lg mb-6">Tell us about your project and we'll get back to you within 24 hours.</p>
            <a href="https://calendly.com/admin-apexgrowthmanagement/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">
              <CalendarDays className="w-4 h-4" /> Prefer to talk? Book a free 30-min call
            </a>
          </div>

          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-gray-500">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-gray-500 font-medium">First Name</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} required type="text" placeholder="John" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm text-gray-500 font-medium">Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} required type="text" placeholder="Smith" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-medium">Email</label>
                <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="john@example.com" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-medium">Business Name (optional)</label>
                <input name="business" value={form.business} onChange={handleChange} type="text" placeholder="Your Business" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-medium">What do you need?</label>
                <select name="service" value={form.service} onChange={handleChange} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors">
                  <option value="">Select a service</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Hosting">Hosting</option>
                  <option value="Minor Updates">Minor Updates</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Full Package">Full Package</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-medium">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your business and what you're looking for..." className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none" />
              </div>
              {status === "error" && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
              <button type="submit" disabled={status === "sending"} className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-4 rounded-full text-lg transition-colors mt-2">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          <div className="flex flex-col items-center gap-2 mt-8 text-sm text-gray-400">
            <p>Call or text us: <a href="tel:9197440504" className="text-blue-600 hover:text-blue-500 transition-colors">(919) 744-0504</a></p>
            <p>Or email: <a href="mailto:admin@apexgrowthmanagement.com" className="text-blue-600 hover:text-blue-500 transition-colors">admin@apexgrowthmanagement.com</a></p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 py-10 px-6 text-center text-sm">
        <p className="text-white font-semibold mb-1">Apex Growth Management</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2 text-white/50">
          <a href="tel:9197440504" className="hover:text-white transition-colors">(919) 744-0504</a>
          <span className="hidden sm:inline text-white/20">·</span>
          <a href="mailto:admin@apexgrowthmanagement.com" className="hover:text-white transition-colors">admin@apexgrowthmanagement.com</a>
        </div>
        <p className="text-white/30 mt-4">© {new Date().getFullYear()} Apex Growth Management. All rights reserved.</p>
      </footer>
    </main>
  );
}
