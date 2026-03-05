import Link from "next/link";

const setupFees = [
  {
    name: "Standard",
    price: "$1,000",
    description: "Perfect for small businesses getting started online.",
    features: [
      "4-page website",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Pro",
    price: "$1,500",
    description: "For businesses that need more pages and custom features.",
    features: [
      "Up to 8 pages",
      "Mobile responsive",
      "Contact form",
      "Advanced SEO setup",
      "Custom design elements",
      "3 rounds of revisions",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$2,000",
    description: "Fully custom site with everything you need to stand out.",
    features: [
      "Unlimited pages",
      "Mobile responsive",
      "Contact form",
      "Full SEO setup",
      "Custom design",
      "Priority build time",
      "Unlimited revisions",
    ],
  },
];

const retainers = [
  {
    name: "Basic",
    price: "$249",
    description: "Keep your site live and up to date.",
    features: [
      "Website hosting",
      "Monthly minor updates",
      "Uptime monitoring",
      "SSL certificate",
    ],
  },
  {
    name: "Growth",
    price: "$349",
    description: "Grow your online presence month over month.",
    features: [
      "Everything in Basic",
      "SEO optimization",
      "Monthly performance report",
      "Google Business management",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$499",
    description: "Full-service management for serious businesses.",
    features: [
      "Everything in Growth",
      "Priority support",
      "Content updates",
      "Competitor analysis",
      "Quarterly strategy call",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Simple Pricing</h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Transparent pricing with no hidden fees. Pay once to build, then a monthly retainer to grow.
            </p>
          </div>

          {/* Setup Fees */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-2">Website Build</h2>
            <p className="text-white/40 text-center text-sm mb-10">One-time fee to design and launch your site</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {setupFees.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 border flex flex-col ${
                    plan.popular
                      ? "border-blue-500 bg-blue-600/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                    <div className="text-4xl font-extrabold text-white mb-2">{plan.price}</div>
                    <p className="text-white/40 text-sm">{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                        <span className="text-blue-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`text-center font-semibold py-3 rounded-full transition-colors ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "border border-white/20 hover:border-white/40 text-white/70 hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Retainers */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-2">Monthly Retainer</h2>
            <p className="text-white/40 text-center text-sm mb-10">Ongoing hosting, updates, and SEO — billed monthly</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {retainers.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 border flex flex-col ${
                    plan.popular
                      ? "border-blue-500 bg-blue-600/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                    <div className="text-4xl font-extrabold text-white mb-1">
                      {plan.price}<span className="text-lg text-white/40 font-normal">/mo</span>
                    </div>
                    <p className="text-white/40 text-sm">{plan.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                        <span className="text-blue-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`text-center font-semibold py-3 rounded-full transition-colors ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "border border-white/20 hover:border-white/40 text-white/70 hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Common Questions</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "Do I have to pay the setup fee and retainer?",
                  a: "The setup fee is a one-time charge to build your site. The retainer is optional but recommended — it covers hosting, updates, and SEO so your site stays live and keeps growing.",
                },
                {
                  q: "Can I cancel the monthly retainer?",
                  a: "Yes, you can cancel anytime. If you cancel, you keep your domain and we can transfer your site files to you.",
                },
                {
                  q: "How long does it take to build my site?",
                  a: "Most sites are ready for review within 5-7 business days after we receive your content and onboarding form.",
                },
                {
                  q: "What counts as a minor update?",
                  a: "Text changes, image swaps, adding a new section, updating hours or pricing — anything that takes under an hour. Larger changes are quoted separately.",
                },
              ].map((item) => (
                <div key={item.q} className="border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Apex Growth Management. All rights reserved.
      </footer>
    </main>
  );
}
