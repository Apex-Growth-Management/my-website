import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for web design and monthly SEO retainers. Sites starting at $1,000 with no long-term contracts. Raleigh, NC.",
  openGraph: {
    title: "Pricing | Apex Growth Management",
    description:
      "Transparent pricing for web design and monthly SEO retainers. Sites starting at $1,000 with no long-term contracts. Raleigh, NC.",
    url: "https://apexgrowthmanagement.com/pricing",
  },
  alternates: {
    canonical: "https://apexgrowthmanagement.com/pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a website cost for a small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website builds start at $1,000 for a standard 4-page site, $1,500 for a Pro site with up to 8 pages, and $2,000 for a Premium site with unlimited pages. Monthly hosting and maintenance retainers range from $149 to $399 per month.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to pay the setup fee and retainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The setup fee is a one-time charge to build your site. The retainer is optional but recommended — it covers hosting, updates, and SEO so your site stays live and keeps growing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel the monthly retainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel anytime with 30 days written notice. If you cancel, you keep your domain and we can transfer your site files to you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build my site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most sites are delivered within 2–3 business days after we receive your completed onboarding form and all required materials.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay directly without a consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — each plan has a 'Pay online' link to pay via Stripe. After paying, we'll send you an onboarding form to gather everything we need to get started.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Once the project is complete and paid, the site is yours. Your domain, your content, your code. We don't hold anything hostage.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already have a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No problem — we'll review your existing site and build a new one from scratch. We can migrate your content, redirect your domain, and handle the transition seamlessly.",
      },
    },
  ],
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
