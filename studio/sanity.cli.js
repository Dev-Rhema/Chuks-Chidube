import { defineCliConfig } from "sanity/cli";

// Fill these in after creating your free project at sanity.io/manage,
// or set SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET env vars.
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "je8rtqwf",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
});
