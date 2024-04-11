import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

const isPreviewMode = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  perspective: isPreviewMode ? "previewDrafts" : "published",
  useCdn: isPreviewMode ? false : true,
  token: isPreviewMode ? process.env.PUBLIC_SANITY_AUTH_TOKEN : undefined,
  ignoreBrowserTokenWarning: isPreviewMode ? true : false,
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});

console.log("hello");
