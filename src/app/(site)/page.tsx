import Image from "next/image";
import Container from "./components/container";
import AboutSection from "./components/about-us";
import LatestProjects from "./components/latestProjects";
import SmoothScrolling from "./components/SmoothScrolling";
import { getHomepage } from "../../../sanity/sanity-utils";
import { Homepage } from "../types/homepage";
import Head from 'next/head';

export default async function Home() {
  const homepage: Homepage[] = await getHomepage();
  return (
    <>
      <Head>
        <meta property="og:title" content={homepage[0].metatitle} key="title" />
        <meta
          property="og:description"
          content={homepage[0].metaDesc}
          key="description"
        />
      </Head>

      <SmoothScrolling>
        <Container>
          <h1 className="m-translate-x-[10px] col-span-12 mb-large mt-24 text-sm-3xl md:col-span-11 md:mt-3 md:-translate-x-5 lg:text-2xl xl:text-3xl  ">
            Benchmark <br />
            Homes
          </h1>

          <p className="col-span-6 mb-3  text-sm font-medium md:col-span-2 md:mb-0">
            {homepage[0].title}
          </p>
          <div className="col-span-12 col-start-1 md:col-span-6 md:col-start-7">
            <Image
              className="aspect-[3/2] object-cover"
              src={homepage[0].image}
              alt={homepage[0].alt}
              width={1200}
              height={600}
            />
          </div>
          <p className="col-span-12 my-medium text-sm font-medium md:text-lg">
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
