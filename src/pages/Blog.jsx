import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";

export default function Blog() {
  return (
    <div className="min-h-screen bg-cream-50 text-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <Link
          to="/"
          className="text-sm font-semibold text-gold-600 underline decoration-gold-500/50 underline-offset-4 hover:decoration-gold-500"
        >
          ← Back Home
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">
            Blog
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Thoughts, Encouragement & Ministry Insights
          </h1>
          <p className="mt-4 text-base text-ink-600">
            This space will share reflections, teachings, and stories from
            ministry life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm"
            >
              <h2 className="font-display text-2xl font-semibold text-navy-950">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-600">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center text-sm font-semibold text-gold-600 underline decoration-gold-500/50 underline-offset-4 hover:decoration-gold-500"
              >
                Read more ↗
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
