import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, hosting, SEO, and ongoing maintenance for local businesses in Raleigh, NC. Everything you need to succeed online — in one place.",
  openGraph: {
    title: "Web Design & SEO Services | Apex Growth Management",
    description:
      "Web design, hosting, SEO, and ongoing maintenance for local businesses in Raleigh, NC. Everything you need to succeed online — in one place.",
    url: "https://apexgrowthmanagement.com/services",
  },
  alternates: {
    canonical: "https://apexgrowthmanagement.com/services",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most sites are designed, built, and ready for review within 2–3 business days after we receive your content (logo, photos, business info). Complex projects with custom features may take longer — we'll give you a timeline upfront.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the monthly retainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hosting, website maintenance, content updates, and SEO are all included. We handle text edits, image swaps, and small layout changes at no extra cost. Larger projects like new pages or redesigns are scoped separately.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide my own hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — hosting is fully managed and included in your monthly fee. We host on Vercel, which provides fast load times, automatic SSL, and 99.9% uptime. You never deal with a hosting provider.",
      },
    },
    {
      "@type": "Question",
      name: "Can I update the website myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can, but you don't have to. Most clients send us their changes and we handle them within 24 hours. If you prefer to make edits yourself, we can set up a content management system for your blog or specific pages.",
      },
    },
    {
      "@type": "Question",
      name: "What if I want to cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate month-to-month with no long-term contracts. If you decide to cancel, just give us 30 days written notice. We'll transfer your website files and domain to you at no additional cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside of Raleigh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — while we're based in Raleigh, NC, we work with local service businesses across the country. Everything is handled remotely, and we communicate via email, phone, and video calls.",
      },
    },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
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
