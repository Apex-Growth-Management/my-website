import Link from "next/link";
import Image from "next/image";
import { Monitor, Zap, Wrench, TrendingUp } from "lucide-react";

const services = [
  { Icon: Monitor, title: "Website Design", description: "Custom, professional websites built to convert visitors into customers." },
  { Icon: Zap, title: "Hosting & Performance", description: "Fast, reliable hosting with 99.9% uptime so your site is always live." },
  { Icon: Wrench, title: "Minor Updates", description: "Need a change? We handle text, images, and layout updates quickly." },
  { Icon: TrendingUp, title: "SEO Optimization", description: "Rank higher on Google and drive organic traffic to your business." },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&fit=crop" alt="Web design workspace" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/72" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <div className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Website Design · Hosting · SEO
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Grow Your Business<br />
            <span className="text-blue-400">Online.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Apex Growth Management builds fast, professional websites and handles everything — design, hosting, updates, and SEO — so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Get Started</Link>
            <Link href="/services" className="border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Everything your business needs to succeed online — all in one place.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ Icon, title, description }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-blue-50 transition-all group">
                <div className="w-11 h-11 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">See all services →</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">From first call to live site in as little as a week.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Get in Touch", desc: "Fill out our contact form or give us a call. We'll learn about your business and what you need." },
              { step: "02", title: "We Build It", desc: "We design and build your site. You'll get a preview link to review before anything goes live." },
              { step: "03", title: "You Launch", desc: "Once you're happy, we go live on your domain. We handle everything — no technical knowledge needed." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="text-5xl font-extrabold text-gray-200 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Real results for real businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Apex built our site in under a week and we started getting calls from Google within the first month. Best investment we've made.", name: "James R.", business: "JR Plumbing Co." },
              { quote: "I had no idea how bad our old website was until I saw the new one. Clean, fast, and our booking requests doubled.", name: "Maria S.", business: "Sunshine Cleaning Services" },
              { quote: "They handle everything — updates, SEO, hosting. I don't have to think about it. That alone is worth the monthly fee.", name: "David K.", business: "K&D Electrical" },
            ].map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop" alt="Modern office" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to grow your<br />
            <span className="text-blue-400">online presence?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10">Let&apos;s build something great together. Contact us today for a free consultation.</p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors">Contact Us</Link>
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
