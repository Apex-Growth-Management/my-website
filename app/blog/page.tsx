import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
}

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) { _id, title, slug, publishedAt, excerpt }`
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-white text-gray-900 pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Blog</h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Tips and insights to help your business grow online.</p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-gray-400">No posts yet — check back soon.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} className="border border-gray-200 bg-gray-50 rounded-2xl p-8 hover:border-blue-300 hover:bg-blue-50 transition-all">
                  <div className="text-gray-400 text-sm mb-2">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>
                  <div className="text-blue-600 text-sm font-medium mt-4">Read more →</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <footer className="bg-gray-900 py-10 px-6 text-center text-sm">
        <p className="text-white font-semibold mb-1">Apex Growth Management</p>
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
