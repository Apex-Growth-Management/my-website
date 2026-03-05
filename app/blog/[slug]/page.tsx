import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Post {
  title: string;
  publishedAt: string;
  excerpt: string;
  body: import("@portabletext/types").PortableTextBlock[];
}

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] { title, publishedAt, excerpt, body }`,
    { slug }
  );
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <main className="bg-black text-white pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm font-medium mb-8 inline-block">
            ← Back to Blog
          </Link>
          <div className="text-white/30 text-sm mb-4">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">{post.title}</h1>
          <p className="text-white/50 text-lg mb-10 border-l-2 border-blue-500 pl-4">{post.excerpt}</p>
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/70 prose-strong:text-white prose-a:text-blue-400">
            <PortableText value={post.body} />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/10 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to grow your business online?</h3>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Get Started
        </Link>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Apex Growth Management. All rights reserved.
      </footer>
    </main>
  );
}
