import Link from "next/link";
import Image from "next/image";

const values = [
  { title: "Results First", description: "We measure success by what your business achieves — leads, sales, and growth." },
  { title: "Clear Communication", description: "No jargon. We explain everything in plain English and keep you in the loop." },
  { title: "Built to Last", description: "We build websites with clean code and modern practices that stand the test of time." },
  { title: "Always Available", description: "When you need updates or have questions, we're quick to respond and easy to reach." },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80&fit=crop" alt="Laptop and workspace" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About <span className="text-blue-400">Apex Growth</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Apex Growth Management was built with one goal: help small and medium businesses compete online. We handle the technical side so you can focus on what you do best.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
              <p>We started Apex Growth Management because we kept seeing the same problem: great local businesses with no online presence, or worse — a website that was doing them more harm than good.</p>
              <p>We built this company to fix that. We offer professional-grade web services at a price that makes sense for real businesses — not just enterprise clients with big budgets.</p>
              <p>Whether you&apos;re launching a new business or refreshing an existing one, we&apos;ll build you something you&apos;re proud of and keep it running smoothly.</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80">
            <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop" alt="Code on screen" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-gray-200 bg-white rounded-2xl p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo quote banner */}
      <section className="relative h-64 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&fit=crop" alt="Working on laptop" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/75 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-extrabold text-center text-white max-w-xl px-6">
            &ldquo;Your website should work as hard as <span className="text-blue-400">you do.</span>&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Let&apos;s work together</h3>
        <p className="text-gray-500 mb-8">Reach out and let&apos;s talk about what your business needs.</p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">Get in Touch</Link>
      </section>
      <footer className="bg-gray-900 py-10 px-6 text-center text-sm">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Apex Growth Management" className="h-12 brightness-0 invert" style={{ objectFit: "contain" }} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2 text-white/50">
          <a href="tel:9197440504" className="hover:text-white transition-colors">(919) 744-0504</a>
          <span className="hidden sm:inline text-white/20">·</span>
          <a href="mailto:admin@apexgrowthmanagement.com" className="hover:text-white transition-colors">admin@apexgrowthmanagement.com</a>
        </div>
        <p className="text-white/30 mt-4">© {new Date().getFullYear()} Apex Growth Management. All rights reserved.</p>
      </footer>
    </main>
  );
}
