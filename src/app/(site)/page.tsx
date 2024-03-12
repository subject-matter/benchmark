import Image from "next/image";
import Container from "./components/container";
import AboutSection from "./components/about-us";
import LatestProjects from "./components/latestProjects";
import SmoothScrolling from "./components/SmoothScrolling";
import { getHomepage } from "../../../sanity/sanity-utils";
import { Homepage } from "../types/homepage";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import Posts from "../(site)/components/Posts";
import PostsPreview from "../(site)/components/PostPreview";
import { loadQuery } from "../../../sanity/lib/store";
import { POSTS_QUERY } from "../../../sanity/lib/queries";
export default async function Home() {
	const homepage: Homepage[] = await getHomepage();
	const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
		perspective: draftMode().isEnabled ? "previewDrafts" : "published",
	  });
		

	return draftMode().isEnabled ? ( 
		<PostsPreview initial={initial} />
		) : (
		  <Posts posts={initial.data} />
		)
}
   