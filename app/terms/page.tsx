import Link from "next/link";
import Footer from "@/components/Footer";

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
              <p>By engaging Apex Growth Management LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) for any services, or by using our website at apexgrowthmanagement.com, you (&ldquo;Client&rdquo;) agree to be bound by these Terms of Service. If you do not agree, do not use our services or website.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services Provided</h2>
              <p className="mb-3">Apex Growth Management provides the following services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom website design and development as outlined in the selected plan</li>
                <li>Mobile-responsive layout optimized for phones and tablets</li>
                <li>On-page SEO setup including title tags, meta descriptions, and local keyword targeting</li>
                <li>Contact form and click-to-call integration</li>
                <li>Google Maps embed and Google Business Profile optimization</li>
                <li>Website hosting — fully managed and included in the monthly fee</li>
                <li>Ongoing content updates and minor edits</li>
                <li>Monthly performance summary</li>
              </ul>
              <p className="mt-3">Minor updates include text edits, image swaps, and small layout adjustments that can be completed within one hour. Additional pages, full redesigns, or third-party integrations are scoped and billed separately at a rate of $75 per hour. Client will receive a written estimate before any out-of-scope work begins.</p>
              <p className="mt-3">The initial build includes design revisions as outlined in the selected plan. Additional revision rounds beyond the included amount are billed at $75 per hour and require written approval before work begins.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Investment &amp; Payment Terms</h2>
              <p className="mb-3">All services are subject to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Website Build Fee:</strong> A one-time setup fee is due before work begins. No work will commence until payment is received.</li>
                <li><strong>Monthly Retainer:</strong> Hosting, maintenance, and SEO fees begin on the launch date. Billed monthly on the same calendar date.</li>
                <li><strong>Refunds:</strong> All fees are non-refundable once work has commenced.</li>
              </ul>
              <p className="mt-3">Website hosting is fully managed and included in the monthly fee — Client does not pay Vercel or any third-party hosting provider separately.</p>
              <p className="mt-3">We reserve the right to adjust the monthly fee with no less than 30 days written notice. If Client does not agree, Client may cancel under the terms of Section 12.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Recurring Billing</h2>
              <p>Client authorizes Apex Growth Management LLC to charge the payment method on file each month for the monthly maintenance fee. Client agrees to keep a valid payment method on file and update it before expiration. If a payment fails, Client will be notified and given five (5) business days to resolve before any service interruption occurs.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Project Timeline &amp; Delivery</h2>
              <p>We deliver completed websites within <strong>2–3 business days</strong> after receiving the completed onboarding form and all required materials (logo, photos, business information, and written content). Delays caused by Client failure to provide required content, approve designs, or respond to communications within three (3) business days do not extend our obligations.</p>
              <p className="mt-3">If Client fails to provide required materials within 30 days of onboarding, we may begin monthly billing as though the site had launched or terminate the agreement and retain the setup fee as compensation for reserved capacity.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Late Payments &amp; Service Interruption</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments more than 7 days past due may result in temporary suspension of website updates.</li>
                <li>Accounts unpaid for more than 30 days may result in temporary website deactivation.</li>
                <li>A late fee of 1.5% per month applies to balances remaining unpaid more than 14 days past due.</li>
                <li>A $25 reactivation fee applies to accounts suspended for non-payment.</li>
              </ul>
              <p className="mt-3">Service will be restored within 48 hours of full payment. Suspension does not waive any outstanding balance.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Ownership &amp; Intellectual Property</h2>
              <p>Upon receipt of full setup fee payment, Client owns all written content and images they provided. We retain ownership of proprietary design systems, templates, code libraries, and frameworks used in building the site.</p>
              <p className="mt-3">Upon cancellation and full settlement of any outstanding balance, we will transfer the website files to Client within seven (7) business days. Client is responsible for arranging their own hosting upon cancellation. Domain names purchased on Client&apos;s behalf will be transferred at no additional cost.</p>
              <p className="mt-3">We retain the right to display the completed website in our portfolio, case studies, and marketing materials. Client may request removal in writing, and we will comply within 30 days.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Client Content &amp; Responsibilities</h2>
              <p className="mb-3">Client represents and warrants that all content, images, logos, trademarks, and materials provided are owned by or properly licensed to Client and do not infringe upon any third-party rights.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Client is solely responsible for the accuracy, legality, and appropriateness of all content displayed on the website.</li>
                <li>We are not obligated to verify the copyright, trademark, or licensing status of client-provided materials.</li>
                <li>Client agrees to provide timely access to all accounts and platforms necessary for us to perform services (domain registrar, Google Business Profile, Google Analytics, etc.).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Confidentiality</h2>
              <p>Both parties agree to keep confidential any non-public business information, login credentials, financial data, or proprietary materials exchanged during the course of the engagement. We will not share, sell, or disclose Client&apos;s information to third parties except as required to provide the agreed services. This obligation survives termination.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Third-Party Costs</h2>
              <p>Our monthly fee covers hosting and standard services outlined in Section 2. Any third-party costs incurred on Client&apos;s behalf — including domain registration, domain renewal, premium stock photography, paid plugins, or software licenses — are the Client&apos;s responsibility and will be billed at cost with prior written notice and approval.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. SEO &amp; Results</h2>
              <p>We implement standard local SEO best practices including on-page optimization, Google Business Profile management, and technical site health maintenance. Search engine rankings are determined by Google and other third parties. We make no guarantee of specific rankings, traffic levels, or lead volume. Results vary based on market competition, geography, and factors outside our control.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Term &amp; Cancellation</h2>
              <p>This agreement operates on a month-to-month basis following website launch. Either party may cancel with <strong>30 days written notice</strong> sent via email to admin@apexgrowthmanagement.com. Cancellation does not relieve Client of any fees owed for services already rendered. No partial-month refunds will be issued.</p>
              <p className="mt-3">We may terminate immediately in the event of non-payment exceeding 30 days, illegal use of the website, or material breach of these terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. Acceptable Use</h2>
              <p>Client agrees not to use the website for any unlawful purpose, including but not limited to distributing malware, hosting phishing content, sending spam, publishing defamatory or fraudulent material, or any activity that violates applicable local, state, or federal law. We may suspend or terminate services immediately and without prior notice if Client is found to be in violation.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">14. Force Majeure</h2>
              <p>We shall not be liable for any delay or failure to perform obligations due to circumstances beyond our reasonable control, including internet outages, third-party platform disruptions, natural disasters, cyberattacks, or governmental actions. We will notify Client promptly and resume services as soon as reasonably possible.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">15. Disputes</h2>
              <p>Both parties agree to attempt to resolve any dispute informally via email or phone before pursuing formal action. If a dispute cannot be resolved within 15 days of written notice, either party may pursue available legal remedies. Client agrees to contact us directly to resolve any billing concerns before initiating a payment dispute with their financial institution.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">16. Indemnification</h2>
              <p className="mb-3">Client agrees to indemnify, defend, and hold harmless Apex Growth Management LLC, its owners, employees, and contractors from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorney&apos;s fees) arising out of or related to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Content, images, or materials provided by Client</li>
                <li>Client&apos;s products, services, or business operations</li>
                <li>Any claim that Client-provided materials infringe upon the intellectual property or other rights of a third party</li>
                <li>Client&apos;s breach of any representation or obligation under these terms</li>
              </ul>
              <p className="mt-3">This obligation survives termination.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">17. Limitation of Liability</h2>
              <p>Our total liability shall not exceed the total fees paid by Client in the three (3) months immediately preceding the claim. We are not liable for third-party outages, search engine algorithm changes, or any indirect, incidental, special, or consequential damages of any kind, including lost profits, lost data, or business interruption.</p>
              <p className="mt-3">The website is provided on an &ldquo;as-is&rdquo; basis following Client&apos;s written approval of the final design. We make no warranties, express or implied, regarding uninterrupted operation, compatibility with all devices or browsers, or fitness for a particular purpose beyond the services expressly described.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">18. Non-Solicitation</h2>
              <p>During the term of this agreement and for a period of twelve (12) months following its termination, Client agrees not to directly solicit, recruit, or hire any employee, contractor, or subcontractor of Apex Growth Management who was involved in providing services under this agreement, without prior written consent.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">19. Data Handling &amp; Privacy</h2>
              <p>We handle all Client data in accordance with our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. We may access Client&apos;s website analytics, hosting dashboard, and contact form submissions as necessary to provide the agreed services. We will not sell, share, or distribute Client data to unrelated third parties.</p>
              <p className="mt-3">We maintain reasonable backups of the website but shall not be held liable for data loss resulting from third-party provider failures, cyberattacks, or other circumstances beyond our reasonable control. Client is encouraged to maintain independent copies of all content and media provided.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">20. Communication &amp; Notices</h2>
              <p>All official notices, approvals, scope changes, and requests must be communicated via email to the addresses listed below. Verbal conversations, text messages, and social media messages do not constitute binding modifications to the scope, pricing, or terms of this agreement unless subsequently confirmed in writing via email by both parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">21. General Provisions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Entire Agreement:</strong> These terms constitute the entire agreement between the parties and supersede all prior discussions, negotiations, proposals, and agreements.</li>
                <li><strong>Severability:</strong> If any provision is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.</li>
                <li><strong>Assignment:</strong> Neither party may assign or transfer this agreement without the prior written consent of the other party, except that we may assign this agreement in connection with a merger, acquisition, or sale of substantially all assets.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">22. Governing Law</h2>
              <p>These Terms of Service are governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law provisions. Any legal action shall be brought in the courts of Wake County, North Carolina.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">23. Contact</h2>
              <address className="not-italic text-gray-600">
                Apex Growth Management LLC<br />
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

      <Footer />
    </main>
  );
}
