/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import { deskTool } from "sanity/desk";
import { googleMapsInput } from "@sanity/google-maps-input";
import { presentationTool } from 'sanity/presentation'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { locate } from './sanity/presentation/locate'
export default defineConfig({
	basePath: "/studio",
	projectId: "8h2p2lvb",
	dataset: "production",
	// Add and edit the content schema in the './sanity/schema' folder
	schema,
	plugins: [
		deskTool(),
		visionTool({ defaultApiVersion: apiVersion }),
		googleMapsInput({
			apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
		}),
		presentationTool({
			locate,
			previewUrl: {
			  draftMode: {
				enable: '/api/draft',
			  },
			},
		  }),
	],
});
