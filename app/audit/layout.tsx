import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Get a free, honest audit of your business website — speed, SEO, mobile experience, and trust signals reviewed by a real person. No credit card required.",
  alternates: {
    canonical: "https://apexgrowthmanagement.com/audit",
  },
  openGraph: {
    title: "Free Website Audit | Apex Growth Management",
    description:
      "Is your website costing you clients? Get a free audit covering page speed, SEO, mobile, and security — delivered within 24 hours.",
    url: "https://apexgrowthmanagement.com/audit",
  },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
