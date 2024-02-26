/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import { defineConfig } from "sanity";
import { googleMapsInput } from '@sanity/google-maps-input';
import { structureTool } from "sanity/structure";


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schema' folder
	schema,
	plugins: [
		structureTool(),
		visionTool({ defaultApiVersion: apiVersion }),
		googleMapsInput({
			apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
		}),
	],
});
