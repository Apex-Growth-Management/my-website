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
    <main className="bg-black text-white pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Blog</h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Tips and insights to help your business grow online.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-white/30">No posts yet — check back soon.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="border border-white/10 bg-white/[0.03] rounded-2xl p-8 hover:border-blue-500/40 hover:bg-blue-600/5 transition-all"
                >
                  <div className="text-white/30 text-sm mb-2">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-white/50 leading-relaxed">{post.excerpt}</p>
                  <div className="text-blue-400 text-sm font-medium mt-4">Read more →</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Apex Growth Management. All rights reserved.
      </footer>
    </main>
  );
}
