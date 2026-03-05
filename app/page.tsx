import Link from "next/link";

const services = [
  {
    icon: "🖥️",
    title: "Website Design",
    description: "Custom, professional websites built to convert visitors into customers.",
  },
  {
    icon: "⚡",
    title: "Hosting & Performance",
    description: "Fast, reliable hosting with 99.9% uptime so your site is always live.",
  },
  {
    icon: "🔧",
    title: "Minor Updates",
    description: "Need a change? We handle text, images, and layout updates quickly.",
  },
  {
    icon: "📈",
    title: "SEO Optimization",
    description: "Rank higher on Google and drive organic traffic to your business.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Website Design · Hosting · SEO
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Grow Your Business<br />
            <span className="text-blue-500">Online.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Apex Growth Management builds fast, professional websites and handles everything — design, hosting, updates, and SEO — so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Everything your business needs to succeed online — all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              From first call to live site in as little as a week.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Get in Touch", desc: "Fill out our contact form or give us a call. We'll learn about your business and what you need." },
              { step: "02", title: "We Build It", desc: "We design and build your site. You'll get a preview link to review before anything goes live." },
              { step: "03", title: "You Launch", desc: "Once you're happy, we go live on your domain. We handle everything — no technical knowledge needed." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="text-5xl font-extrabold text-blue-500/30 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Clients Say</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Real results for real businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Apex built our site in under a week and we started getting calls from Google within the first month. Best investment we've made.",
                name: "James R.",
                business: "JR Plumbing Co.",
              },
              {
                quote: "I had no idea how bad our old website was until I saw the new one. Clean, fast, and our booking requests doubled.",
                name: "Maria S.",
                business: "Sunshine Cleaning Services",
              },
              {
                quote: "They handle everything — updates, SEO, hosting. I don't have to think about it. That alone is worth the monthly fee.",
                name: "David K.",
                business: "K&D Electrical",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white/70 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to grow your<br />
            <span className="text-blue-500">online presence?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Let's build something great together. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Apex Growth Management. All rights reserved.
      </footer>
    </main>
  );
}
