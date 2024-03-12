// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY =groq`
*[_type == "about_accordion"]{
    title,
    description
}
` 

export const POST_QUERY=groq`*[_type == "homepage"]{
    title,
    description,
    "image":mainImage.asset->url,
    "alt": mainImage.alt
}`; 