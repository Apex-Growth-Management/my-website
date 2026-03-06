import Link from "next/link";
import { Monitor, Zap, Wrench, TrendingUp } from "lucide-react";

const services = [
  { Icon: Monitor, title: "Website Design", description: "We design custom, mobile-friendly websites tailored to your brand. From layout to color scheme to copywriting guidance — we handle it all. Your site will look great on every device and be built to convert visitors into leads.", features: ["Custom design", "Mobile responsive", "Fast load times", "Modern tech stack"] },
  { Icon: Zap, title: "Hosting & Performance", description: "Your website needs a reliable home. We provide fast, secure hosting with 99.9% uptime. No more worrying about downtime, slow load speeds, or expired SSL certificates.", features: ["99.9% uptime guarantee", "SSL certificate included", "Daily backups", "24/7 monitoring"] },
  { Icon: Wrench, title: "Minor Updates", description: "Business changes, and your website should too. Whether you need new photos, updated pricing, a new page, or a small design tweak — we take care of it quickly so you don't have to learn code.", features: ["Text & image updates", "New pages or sections", "Layout adjustments", "Quick turnaround"] },
  { Icon: TrendingUp, title: "SEO Optimization", description: "Ranking on Google is how customers find you. We optimize your site's content, structure, and technical setup to improve your visibility in search results and drive real organic traffic.", features: ["Keyword research", "On-page SEO", "Technical SEO audit", "Monthly reporting"] },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Our Services</h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Everything you need to build, grow, and maintain your online presence.</p>
          </div>

          <div className="flex flex-col gap-8">
            {services.map(({ Icon, title, description, features }, i) => (
              <div key={title} className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-gray-200 bg-gray-50 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center">
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
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Contact Us</Link>
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
