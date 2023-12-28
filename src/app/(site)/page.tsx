import Image from "next/image";
import Container from "./components/container";
import AboutSection from "./components/about-us";
import LatestProjects from "./components/latestProjects";
import SmoothScrolling from "./components/SmoothScrolling";
import { getHomepage } from "../../../sanity/sanity-utils";
import { Homepage } from "../types/homepage";

export default async function Home() {
	const homepage: Homepage[] = await getHomepage();
	return (
		<>
			<SmoothScrolling>
				<Container>
					<h1 className="font-medium text-sm-3xl lg:text-2xl xl:text-3xl col-span-12 md:col-span-11 m-translate-x-[10px] md:-translate-x-5 mb-large mt-24 md:mt-3 -translate-y-3 ">
						Benchmark <br />
						Homes
					</h1>

					<p className="col-span-6 md:col-span-2  font-medium text-sm mb-3 md:mb-0">
						{homepage[0].title}
					</p>
					<div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6">
						<Image
							className="aspect-[3/2] object-cover"
							src={homepage[0].image}
							alt={homepage[0].alt}
							width={1200}
							height={600}
						/>
					</div>

					<p className="font-medium text-sm md:text-lg col-span-12 my-medium">
						{homepage[0].description}
					</p>

					<p></p>
				</Container>

				<LatestProjects />

				<AboutSection />
			</SmoothScrolling>
		</>
	);
}
