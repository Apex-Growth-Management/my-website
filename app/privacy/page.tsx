import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Apex Growth Management",
  description: "Privacy policy for Apex Growth Management — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-12">Last updated: March 2026</p>

          <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
              <p>Apex Growth Management ("we," "us," or "our") is a web design and digital marketing company based in Raleigh, NC. Our website is <strong>apexgrowthmanagement.com</strong>. If you have questions about this policy, contact us at <a href="mailto:admin@apexgrowthmanagement.com" className="text-blue-600 hover:underline">admin@apexgrowthmanagement.com</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact form submissions:</strong> name, email address, business name, and message content.</li>
                <li><strong>Booking information:</strong> if you schedule a call through Calendly, their privacy policy governs that data.</li>
              </ul>
              <p className="mt-3">We also automatically collect certain usage data when you visit our site, including your IP address, browser type, referring pages, and pages visited, via Google Analytics and Google Tag Manager.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide the services you request</li>
                <li>To send you a confirmation email after form submission</li>
                <li>To improve our website and marketing based on analytics data</li>
                <li>To measure the effectiveness of our advertising (Google Ads conversion tracking)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies and Tracking Technologies</h2>
              <p>Our site uses cookies through Google Analytics (GA4) and Google Tag Manager to understand how visitors interact with our site. These tools may collect your IP address and browsing behavior in anonymized form. You can opt out of Google Analytics tracking at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tools.google.com/dlpage/gaoptout</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
              <p className="mb-3">We use the following third-party services that may process your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics & Google Ads</strong> — website analytics and advertising measurement</li>
                <li><strong>Resend</strong> — transactional email delivery</li>
                <li><strong>Calendly</strong> — meeting scheduling</li>
                <li><strong>Vercel</strong> — website hosting and infrastructure</li>
                <li><strong>Zapier</strong> — workflow automation for form submissions</li>
                <li><strong>HubSpot</strong> — customer relationship management</li>
              </ul>
              <p className="mt-3">Each of these services has its own privacy policy. We encourage you to review them if you have concerns.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Sharing and Selling</h2>
              <p>We do not sell, rent, or trade your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
              <p>We retain contact form submissions and related correspondence for as long as necessary to fulfill the purpose for which it was collected and to comply with applicable law. You may request deletion of your personal data at any time by contacting us.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
              <p>You have the right to access, correct, or request deletion of your personal information. To exercise these rights, email us at <a href="mailto:admin@apexgrowthmanagement.com" className="text-blue-600 hover:underline">admin@apexgrowthmanagement.com</a>. We will respond within 30 days.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will post the updated version on this page with a revised "last updated" date. Continued use of our site after changes constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact</h2>
              <p>If you have questions about this Privacy Policy, contact us at:</p>
              <address className="mt-3 not-italic text-gray-600">
                Apex Growth Management<br />
                Raleigh, NC<br />
                <a href="mailto:admin@apexgrowthmanagement.com" className="text-blue-600 hover:underline">admin@apexgrowthmanagement.com</a><br />
                <a href="tel:9197440504" className="text-blue-600 hover:underline">(919) 744-0504</a>
              </address>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 flex gap-6 text-sm">
            <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
            <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
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
