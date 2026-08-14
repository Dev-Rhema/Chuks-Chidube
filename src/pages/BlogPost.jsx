import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import BlogBanner from "../components/ui/BlogBanner";
import { isSanityConfigured, sanityClient, urlFor, POST_BY_SLUG_QUERY } from "../lib/sanity";

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-8 text-ink-600">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-2xl font-semibold text-navy-950">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl font-semibold text-navy-950">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold-500 pl-4 italic text-ink-600">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value)?.width(1000).url()}
        alt={value.alt || ""}
        className="rounded-2xl"
      />
    ),
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  // Track which slug a result belongs to so a stale post/status pair can
  // never render while a new slug's fetch is in flight.
  const [result, setResult] = useState({
    slug: null,
    post: null,
    status: isSanityConfigured ? "loading" : "unconfigured",
  });

  useEffect(() => {
    if (!isSanityConfigured) return;

    let cancelled = false;

    sanityClient
      .fetch(POST_BY_SLUG_QUERY, { slug })
      .then((data) => {
        if (cancelled) return;
        setResult({ slug, post: data, status: data ? "ready" : "not-found" });
      })
      .catch((error) => {
        console.error("Failed to load blog post from Sanity:", error);
        if (!cancelled) setResult({ slug, post: null, status: "error" });
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const status = result.slug === slug ? result.status : "loading";
  const post = result.slug === slug ? result.post : null;

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-cream-50 text-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="text-sm text-ink-600">Loading post…</p>
        </div>
      </div>
    );
  }

  if (status === "not-found" || status === "unconfigured" || status === "error") {
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
            {status === "not-found" ? "Post not found" : "Post unavailable"}
          </h1>
          {status === "error" && (
            <p className="mt-3 text-sm text-ink-600">
              Something went wrong loading this post. Please try again shortly.
            </p>
          )}
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
          <div className="aspect-21/9 w-full overflow-hidden">
            <BlogBanner
              src={urlFor(post.banner)?.width(1600).url()}
              alt={post.title}
            />
          </div>

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
            <div className="mx-auto max-w-3xl space-y-5">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
