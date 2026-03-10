import Link from "next/link";
import { Check, CalendarDays } from "lucide-react";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

const setupFees = [
  {
    name: "Standard",
    price: "$1,000",
    description: "Perfect for small businesses getting started online.",
    features: ["4-page website", "Mobile responsive", "Contact form", "Basic SEO setup", "2 rounds of revisions"],
    stripeUrl: "https://buy.stripe.com/dRmeVe2nt7da46D11Z0gw02",
  },
  {
    name: "Pro",
    price: "$1,500",
    description: "For businesses that need more pages and custom features.",
    features: ["Up to 8 pages", "Mobile responsive", "Contact form", "Advanced SEO setup", "Custom design elements", "3 rounds of revisions"],
    popular: true,
    stripeUrl: "https://buy.stripe.com/8x2cN6aTZbtq6eLh0X0gw03",
  },
  {
    name: "Premium",
    price: "$2,000",
    description: "Fully custom site with everything you need to stand out.",
    features: ["Unlimited pages", "Mobile responsive", "Contact form", "Full SEO setup", "Custom design", "Priority build time", "Unlimited revisions"],
    stripeUrl: "https://buy.stripe.com/3cIdRa1jp7da0Ur2630gw04",
  },
];

const retainers = [
  {
    name: "Basic",
    price: "$249",
    description: "Keep your site live and up to date.",
    features: ["Website hosting", "Monthly maintenance updates", "Uptime monitoring", "SSL certificate"],
    stripeUrl: "https://buy.stripe.com/00w6oI9PV40Y32zcKH0gw05",
  },
  {
    name: "Growth",
    price: "$349",
    description: "Grow your online presence month over month.",
    features: ["Everything in Basic", "SEO optimization", "Monthly performance report", "Google Business management"],
    popular: true,
    stripeUrl: "https://buy.stripe.com/3cI28s7HNeFC8mT9yv0gw06",
  },
  {
    name: "Premium",
    price: "$499",
    description: "Full-service management for serious businesses.",
    features: ["Everything in Growth", "Priority support", "Content updates", "Competitor analysis", "Quarterly strategy call"],
    stripeUrl: "https://buy.stripe.com/eVq14obY3eFC6eLh0X0gw07",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">No hidden fees. Pay once to build, then a monthly retainer to grow.</p>
          <a
            href="https://calendly.com/apexgrowthmanagement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
          >
            <CalendarDays className="w-4 h-4" /> Not sure which plan? Book a free 15-min call
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Setup Fees */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Website Build</h2>
              <p className="text-gray-400 text-sm">One-time fee to design and launch your site</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {setupFees.map((plan) => (
                <div key={plan.name} className={`relative rounded-2xl p-8 border flex flex-col ${plan.popular ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-100" : "border-gray-200 bg-gray-50"}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                    <div className="text-4xl font-extrabold text-gray-900 mb-2">{plan.price}</div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`text-center font-semibold py-3 rounded-full transition-colors ${plan.popular ? "bg-blue-600 hover:bg-blue-500 text-white" : "border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900"}`}
                  >
                    Get Started
                  </Link>
                  <a
                    href={plan.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-xs text-gray-400 hover:text-blue-600 transition-colors mt-3"
                  >
                    Pay online →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Retainers */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Monthly Retainer</h2>
              <p className="text-gray-400 text-sm">Ongoing hosting, updates, and SEO — billed monthly</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {retainers.map((plan) => (
                <div key={plan.name} className={`relative rounded-2xl p-8 border flex flex-col ${plan.popular ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-100" : "border-gray-200 bg-gray-50"}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                    <div className="text-4xl font-extrabold text-gray-900 mb-1">{plan.price}<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`text-center font-semibold py-3 rounded-full transition-colors ${plan.popular ? "bg-blue-600 hover:bg-blue-500 text-white" : "border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900"}`}
                  >
                    Get Started
                  </Link>
                  <a
                    href={plan.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-xs text-gray-400 hover:text-blue-600 transition-colors mt-3"
                  >
                    Pay online →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Common Questions</h2>
            <FaqAccordion items={[
              { q: "Do I have to pay the setup fee and retainer?", a: "The setup fee is a one-time charge to build your site. The retainer is optional but recommended — it covers hosting, updates, and SEO so your site stays live and keeps growing." },
              { q: "Can I cancel the monthly retainer?", a: "Yes, you can cancel anytime with 30 days written notice. If you cancel, you keep your domain and we can transfer your site files to you." },
              { q: "How long does it take to build my site?", a: "Most sites are delivered within 2–3 business days after we receive your completed onboarding form and all required materials." },
              { q: "What counts as a minor update?", a: "Text changes, image swaps, adding a new section, updating hours or pricing — anything that takes under an hour. Larger changes are quoted separately." },
              { q: "Can I pay directly without a consultation?", a: "Yes — each plan has a 'Pay online' link to pay via Stripe. After paying, we'll send you an onboarding form to gather everything we need to get started." },
              { q: "Do I own my website?", a: "Yes. Once the project is complete and paid, the site is yours. Your domain, your content, your code. We don't hold anything hostage." },
              { q: "What if I already have a website?", a: "No problem — we'll review your existing site and build a new one from scratch. We can migrate your content, redirect your domain, and handle the transition seamlessly." },
            ]} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
