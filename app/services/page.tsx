"use client";

import Link from "next/link";
import { Monitor, Zap, Wrench, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

const services = [
  { Icon: Monitor, title: "Website Design", description: "We design custom, mobile-friendly websites tailored to your brand. From layout to color scheme to copywriting guidance — we handle it all. Your site will look great on every device and be built to convert visitors into leads.", features: ["Custom design", "Mobile responsive", "Fast load times", "Modern tech stack"] },
  { Icon: Zap, title: "Hosting & Performance", description: "Your website needs a reliable home. We provide fast, secure hosting with 99.9% uptime. No more worrying about downtime, slow load speeds, or expired SSL certificates.", features: ["99.9% uptime guarantee", "SSL certificate included", "Daily backups", "24/7 monitoring"] },
  { Icon: Wrench, title: "Website Maintenance", description: "Business changes, and your website should too. Whether you need new photos, updated pricing, a new page, or a small design tweak — we take care of it quickly so you don't have to learn code.", features: ["Text & image updates", "New pages or sections", "Layout adjustments", "Quick turnaround"] },
  { Icon: TrendingUp, title: "SEO Optimization", description: "Ranking on Google is how customers find you. We optimize your site's content, structure, and technical setup to improve your visibility in search results and drive real organic traffic.", features: ["Keyword research", "On-page SEO", "Technical SEO audit", "Monthly reporting"] },
];

const faqs = [
  { q: "How long does it take to build a website?", a: "Most sites are designed, built, and ready for review within 2–3 business days after we receive your content (logo, photos, business info). Complex projects with custom features may take longer — we'll give you a timeline upfront." },
  { q: "What's included in the monthly retainer?", a: "Hosting, website maintenance, content updates, and SEO are all included. We handle text edits, image swaps, and small layout changes at no extra cost. Larger projects like new pages or redesigns are scoped separately." },
  { q: "Do I need to provide my own hosting?", a: "No — hosting is fully managed and included in your monthly fee. We host on Vercel, which provides fast load times, automatic SSL, and 99.9% uptime. You never deal with a hosting provider." },
  { q: "Can I update the website myself?", a: "You can, but you don't have to. Most clients send us their changes and we handle them within 24 hours. If you prefer to make edits yourself, we can set up a content management system for your blog or specific pages." },
  { q: "What if I want to cancel?", a: "We operate month-to-month with no long-term contracts. If you decide to cancel, just give us 30 days written notice. We'll transfer your website files and domain to you at no additional cost." },
  { q: "Do you work with businesses outside of Raleigh?", a: "Yes — while we're based in Raleigh, NC, we work with local service businesses across the country. Everything is handled remotely, and we communicate via email, phone, and video calls." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Our Services</h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Everything you need to build, grow, and maintain your online presence.</p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {services.map(({ Icon, title, description, features }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-gray-200 bg-gray-50 hover:border-blue-200 hover:shadow-md transition-all ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">{title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {features.map((f) => (
                      <li key={f} className="bg-blue-50 border border-blue-200 text-blue-700 text-sm px-3 py-1 rounded-full">{f}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ */}
          <motion.div
            className="mt-20 max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl font-extrabold mb-3">Common Questions</h2>
              <p className="text-gray-500">Quick answers about how we work.</p>
            </div>
            <FaqAccordion items={faqs} />
          </motion.div>

          <motion.div
            className="text-center mt-20 bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 rounded-3xl p-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">See exactly what each plan includes and pick the right fit for your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">View Pricing</Link>
              <Link href="/contact" className="border border-gray-300 hover:border-gray-500 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg transition-colors">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
