/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import { defineConfig } from "sanity";
import { googleMapsInput } from '@sanity/google-maps-input';
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import {media} from 'sanity-plugin-media'
import { myStructure } from './deskStructure';
import Logo from './src/app/(studio)/components/logo';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    googleMapsInput({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    }),
    media(),
    vercelDeployTool(),
  ],
});
