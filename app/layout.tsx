import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Growth Management",
  description: "Professional website design, hosting, SEO optimization, and ongoing support for businesses ready to grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Apex Growth Management",
              "description": "Professional website design, hosting, SEO optimization, and ongoing support for businesses in Raleigh, NC.",
              "url": "https://apexgrowthmanagement.com",
              "telephone": "+19197440504",
              "email": "admin@apexgrowthmanagement.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Raleigh",
                "addressRegion": "NC",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.7796,
                "longitude": -78.6382
              },
              "areaServed": {
                "@type": "State",
                "name": "North Carolina"
              },
              "serviceType": ["Web Design", "SEO Optimization", "Web Hosting", "Website Maintenance"],
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/apexgrowthmanagement/"
              ]
            })
          }}
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geist.variable} antialiased bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
