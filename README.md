# Chuks Chidube — Site

React + Vite site. The blog section is powered by [Sanity](https://www.sanity.io) (free tier) so posts can be managed from any browser.

## Site setup

```bash
npm install
npm run dev
```

Blog pages need a Sanity project connected — see below. Without it, `/blog` shows a friendly "not connected" message instead of erroring.

## Connecting the blog to Sanity

1. Create a free account at [sanity.io](https://www.sanity.io) and a new project (any name). Note the **Project ID** it gives you.
2. In `studio/`, install and run the Studio locally:
   ```bash
   cd studio
   npm install
   npx sanity login
   SANITY_STUDIO_PROJECT_ID=your-project-id npx sanity dev
   ```
   This opens the editing UI at `http://localhost:3333` where you (or the client) can create/edit blog posts.
3. When ready to give the client a permanent editing link, deploy the Studio:
   ```bash
   SANITY_STUDIO_PROJECT_ID=your-project-id npx sanity deploy
   ```
   This hosts it at a free `your-studio-name.sanity.studio` URL — no separate hosting needed.
4. Back in the site root, copy `.env.example` to `.env` and fill in the project ID:
   ```bash
   cp .env.example .env
   ```
   ```
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   ```
5. Restart `npm run dev` — the blog list and post pages will now pull live content from Sanity.

### Content model

Each **Blog Post** document has: title, slug, banner image, excerpt, body (rich text), and a published date. Schema lives in `studio/schemaTypes/post.js`.
