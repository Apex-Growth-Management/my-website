import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export const revalidate = 60;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: `*[_type == "post" && slug.current == $slug][0] { title, excerpt }`,
    params: { slug },
  });

  if (!post) return {};

  const url = `https://apexgrowthmanagement.com/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
    },
    alternates: { canonical: url },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: `*[_type == "post" && slug.current == $slug][0] { title, publishedAt, excerpt, body }`,
    params: { slug },
  });

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Apex Growth Management",
      url: "https://apexgrowthmanagement.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Apex Growth Management",
      url: "https://apexgrowthmanagement.com",
      logo: {
        "@type": "ImageObject",
        url: "https://apexgrowthmanagement.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://apexgrowthmanagement.com/blog/${slug}`,
    },
  };

  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-blue-600 hover:text-blue-500 text-sm font-medium mb-8 inline-block">
            ← Back to Blog
          </Link>
          <div className="text-gray-400 text-sm mb-4">
            {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">{post.title}</h1>
          <p className="text-gray-500 text-lg mb-10 border-l-2 border-blue-500 pl-4">{post.excerpt}</p>
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-blue-600">
            <PortableText value={post.body} />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-200 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to grow your business online?</h3>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">
          Get Started
        </Link>
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
