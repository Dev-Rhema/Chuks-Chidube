import { Link, useParams } from "react-router-dom";
import { blogPosts } from "./blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-cream-50 text-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Link
            to="/blog"
            className="text-sm font-semibold text-gold-600 underline decoration-gold-500/50 underline-offset-4 hover:decoration-gold-500"
          >
            ← Back to blog
          </Link>
          <h1 className="mt-8 font-display text-3xl font-semibold">
            Post not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 text-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <Link
          to="/blog"
          className="text-sm font-semibold text-gold-600 underline decoration-gold-500/50 underline-offset-4 hover:decoration-gold-500"
        >
          ← Back to blog
        </Link>

        <article className="mt-8 overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-sm">
          <div className="bg-navy-950 px-8 py-10 text-cream-50 sm:px-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
              Blog Post
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-cream-100/80">
              {post.excerpt}
            </p>
          </div>

          <div className="px-8 py-10 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-ink-600">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
