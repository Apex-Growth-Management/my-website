import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import Script from "next/script";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://apexgrowthmanagement.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apex Growth Management | Web Design & SEO — Raleigh, NC",
    template: "%s | Apex Growth Management",
  },
  description:
    "Raleigh, NC web design agency. We build fast, professional websites with SEO, hosting, and ongoing support — starting at $1,000.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Apex Growth Management",
    title: "Apex Growth Management | Web Design & SEO — Raleigh, NC",
    description:
      "Raleigh, NC web design agency. We build fast, professional websites with SEO, hosting, and ongoing support — starting at $1,000.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apex Growth Management — Web Design & SEO in Raleigh, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Growth Management | Web Design & SEO — Raleigh, NC",
    description:
      "Raleigh, NC web design agency. We build fast, professional websites with SEO, hosting, and ongoing support.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema
          name="Apex Growth Management"
          description="Professional website design, hosting, SEO optimization, and ongoing support for businesses in Raleigh, NC."
          url="https://apexgrowthmanagement.com"
          telephone="+19197440504"
          email="admin@apexgrowthmanagement.com"
          addressLocality="Raleigh"
          addressRegion="NC"
          latitude={35.7796}
          longitude={-78.6382}
          areaServed="North Carolina"
          serviceType={["Web Design", "SEO Optimization", "Web Hosting", "Website Maintenance"]}
          priceRange="$$"
          sameAs={["https://www.instagram.com/apexgrowthmanagement/"]}
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17993946041" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17993946041');
            gtag('config', 'GT-MB83M9TQ');
            gtag('config', 'G-YYHZEHE1WK');
          `}
        </Script>
      </head>
      <body className={`${geist.variable} antialiased bg-black text-white`}>
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
