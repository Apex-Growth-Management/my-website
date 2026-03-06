import Link from "next/link";

const templates = [
  { name: "Arctic Air HVAC", industry: "HVAC / Home Services", colors: "White & Red", description: "A clean, conversion-focused template for heating and cooling companies. Includes emergency service CTA, service area pages, and a quote request form.", features: ["24/7 Emergency Banner","Service Pages","Contact Form","Mobile Responsive"], demo: "https://hvac-template-taupe.vercel.app", accent: "red" },
  { name: "Ember & Oak Kitchen", industry: "Restaurant / Dining", colors: "Dark & Amber", description: "An upscale restaurant template with a warm, inviting feel. Includes a full menu page, about section, and reservation contact form.", features: ["Menu Page","Reservation Form","About / Story","Mobile Responsive"], demo: "https://restaurant-template-plum-sigma.vercel.app", accent: "amber" },
  { name: "BlueLine Plumbing & Drain", industry: "Plumbing / Home Services", colors: "White & Blue", description: "A professional plumbing template built for trust and conversions. Includes an emergency page, service area section, FAQ, customer reviews, and a results photo gallery.", features: ["24/7 Emergency Page","FAQ Section","Results Gallery","Sticky Call Button","Contact Form","Mobile Responsive"], demo: "https://plumber-template-neon.vercel.app", accent: "blue" },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Client Templates</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Every site we build is custom-designed for your industry. Here are a few examples of what your new website could look like.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {templates.map((t) => (
              <div key={t.name} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors">
                <div className={`h-2 w-full ${t.accent === "red" ? "bg-red-600" : t.accent === "amber" ? "bg-amber-500" : "bg-blue-600"}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold">{t.name}</h2>
                      <p className="text-gray-400 text-sm mt-1">{t.industry}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${t.accent === "red" ? "border-red-300 text-red-600 bg-red-50" : t.accent === "amber" ? "border-amber-300 text-amber-600 bg-amber-50" : "border-blue-300 text-blue-600 bg-blue-50"}`}>{t.colors}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.description}</p>
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {t.features.map((f) => (
                      <li key={f} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-500">{f}</li>
                    ))}
                  </ul>
                  <a href={t.demo} target="_blank" rel="noopener noreferrer" className={`inline-block font-semibold px-6 py-3 rounded-full text-sm transition-colors text-white ${t.accent === "red" ? "bg-red-600 hover:bg-red-500" : t.accent === "amber" ? "bg-amber-500 hover:bg-amber-400" : "bg-blue-600 hover:bg-blue-500"}`}>View Live Demo →</a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-gray-900 rounded-2xl p-12">
            <h2 className="text-3xl font-extrabold mb-4 text-white">Want a site like this?</h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We build custom websites tailored to your business. Starting at $1,000 with no monthly contracts on setup.</p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Get Started</Link>
          </div>
        </div>
      </section>
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
      </footer>
    </main>
  );
}
