import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogBanner from "../components/ui/BlogBanner";
import { isSanityConfigured, sanityClient, urlFor, POSTS_LIST_QUERY } from "../lib/sanity";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(isSanityConfigured ? "loading" : "unconfigured");

  useEffect(() => {
    if (!isSanityConfigured) return;

    let cancelled = false;

    sanityClient
      .fetch(POSTS_LIST_QUERY)
      .then((data) => {
        if (cancelled) return;
        setPosts(data);
        setStatus("ready");
      })
      .catch((error) => {
        console.error("Failed to load blog posts from Sanity:", error);
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

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

        {status === "loading" && (
          <p className="mt-12 text-sm text-ink-600">Loading posts…</p>
        )}

        {status === "error" && (
          <p className="mt-12 text-sm text-ink-600">
            Something went wrong loading posts. Please try again shortly.
          </p>
        )}

        {status === "unconfigured" && (
          <p className="mt-12 text-sm text-ink-600">
            The blog isn't connected to a content source yet.
          </p>
        )}

        {status === "ready" && posts.length === 0 && (
          <p className="mt-12 text-sm text-ink-600">
            No posts published yet — check back soon.
          </p>
        )}

        {status === "ready" && posts.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post._id}
                className="overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-sm"
              >
                <div className="aspect-video overflow-hidden">
                  <BlogBanner
                    src={urlFor(post.banner)?.width(800).height(450).url()}
                    alt={post.title}
                  />
                </div>
                <div className="p-8">
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
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
