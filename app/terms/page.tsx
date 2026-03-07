import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Apex Growth Management",
  description: "Terms of service for Apex Growth Management web design and digital marketing services.",
};

export default function TermsPage() {
  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-extrabold mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm mb-12">Last updated: March 2026</p>

          <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p>By engaging Apex Growth Management ("Company," "we," "us") for any services, or by using our website at apexgrowthmanagement.com, you ("Client") agree to be bound by these Terms of Service. If you do not agree, do not use our services or website.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
              <p className="mb-3">Apex Growth Management provides the following services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom website design and development</li>
                <li>Website hosting and ongoing maintenance</li>
                <li>Search engine optimization (SEO)</li>
                <li>Minor website updates and content management</li>
              </ul>
              <p className="mt-3">The specific scope of services, deliverables, and pricing are outlined in the service agreement or proposal provided to each Client.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Website Build Fee:</strong> A one-time setup fee is due before work begins. No work will commence until payment is received.</li>
                <li><strong>Monthly Retainer:</strong> Billed monthly on the same date each month. Failure to pay within 7 days may result in service suspension.</li>
                <li><strong>Late Payments:</strong> Invoices unpaid after 14 days are subject to a 1.5% monthly late fee.</li>
                <li><strong>Refunds:</strong> Setup fees are non-refundable once work has begun. Retainer fees for the current billing period are non-refundable.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Project Delivery</h2>
              <p>We deliver completed websites within <strong>2–3 business days</strong> after receiving the completed onboarding form and all required materials (logo, photos, copy, business information). Delays in providing required materials will extend the delivery timeline accordingly. The Client will receive a preview link to review and request changes before the site goes live.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Revisions</h2>
              <p>Each website build package includes a specified number of revision rounds as outlined in the service agreement (Standard: 2 rounds; Pro: 3 rounds; Premium: unlimited). A "revision round" means one consolidated set of changes submitted at one time. Additional revision rounds beyond the included amount are billed at $75/hour.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Client Responsibilities</h2>
              <p className="mb-3">The Client agrees to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate business information, branding assets, and content in a timely manner</li>
                <li>Review deliverables and provide feedback within 5 business days</li>
                <li>Maintain a valid payment method on file for retainer services</li>
                <li>Ensure that any content provided does not infringe on third-party rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Intellectual Property</h2>
              <p>Upon receipt of full payment, the Client owns the final website content and design. Apex Growth Management retains the right to display the completed work in our portfolio and marketing materials unless the Client requests otherwise in writing. We retain ownership of any proprietary code frameworks, templates, or tools used in development.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cancellation Policy</h2>
              <p>Either party may terminate monthly retainer services with <strong>30 days written notice</strong> sent to admin@apexgrowthmanagement.com. Upon cancellation, the Client retains ownership of their domain name and website content. We will provide reasonable assistance in transitioning hosting within 30 days of the termination date.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Third-Party Costs</h2>
              <p>The Client is responsible for any third-party costs associated with their project, including but not limited to: domain registration fees, premium stock photography licenses, third-party integrations, Google Ads spend, or specialized software subscriptions. These costs are separate from and in addition to Apex Growth Management's fees unless explicitly stated otherwise in writing.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Confidentiality</h2>
              <p>Both parties agree to keep confidential any non-public information shared during the engagement, including business strategies, pricing, and client data. This obligation survives the termination of the service relationship.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Limitation of Liability</h2>
              <p>Apex Growth Management's total liability to the Client for any claim arising out of or related to our services shall not exceed the total fees paid by the Client in the three months preceding the claim. We are not liable for indirect, incidental, or consequential damages, including lost profits or data loss.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Force Majeure</h2>
              <p>Neither party shall be liable for delays caused by circumstances beyond their reasonable control, including natural disasters, internet outages, government actions, or other events that make performance impossible or impractical.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. Dispute Resolution</h2>
              <p>In the event of a dispute, the parties agree to first attempt to resolve the matter through good-faith negotiation. If unresolved after 30 days, disputes shall be submitted to binding arbitration in Wake County, North Carolina.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">14. Governing Law</h2>
              <p>These Terms of Service are governed by the laws of the State of North Carolina, without regard to its conflict of law provisions. Any legal proceedings shall take place in Wake County, North Carolina.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">15. Changes to Terms</h2>
              <p>We reserve the right to update these Terms of Service at any time. Continued use of our services after changes are posted constitutes acceptance of the updated terms. We will notify active retainer clients of material changes by email.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">16. Contact</h2>
              <address className="not-italic text-gray-600">
                Apex Growth Management<br />
                Raleigh, NC<br />
                <a href="mailto:admin@apexgrowthmanagement.com" className="text-blue-600 hover:underline">admin@apexgrowthmanagement.com</a><br />
                <a href="tel:9197440504" className="text-blue-600 hover:underline">(919) 744-0504</a>
              </address>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 flex gap-6 text-sm">
            <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
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
