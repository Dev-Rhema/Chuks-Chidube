import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Project ID and dataset come from the free Sanity project you create at
// sanity.io. Set them in a .env file at the project root (see .env.example).
export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
};

// True once real Sanity credentials have been provided. Until then, blog
// pages fall back to an empty/loading state instead of throwing.
export const isSanityConfigured = Boolean(sanityConfig.projectId);

export const sanityClient = isSanityConfigured
  ? createClient(sanityConfig)
  : null;

const builder = isSanityConfigured ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source) {
  if (!builder || !source) return null;
  return builder.image(source);
}

// GROQ queries -------------------------------------------------------------

export const POSTS_LIST_QUERY = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  banner,
  publishedAt
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  banner,
  body,
  publishedAt
}`;
