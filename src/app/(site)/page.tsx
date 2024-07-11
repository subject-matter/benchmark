// @ts-nocheck

import Image from 'next/image';
import Container from './components/container';
import AboutSection from './components/about-us';
import LatestProjects from './components/latestProjects';
import SmoothScrolling from './components/SmoothScrolling';
import { getHomepage } from '../../../sanity/sanity-utils';
import { Homepage } from '../types/homepage';

import SwiperHomeProjects from './components/SwiperHomeProjects';

export default async function Home() {
  const homepage: Homepage[] = await getHomepage();

  return (
    <>
      <SmoothScrolling>
        <Container>
          <h1 className="col-span-12 mb-large mt-24 text-sm-3xl lg:col-span-11 lg:mt-0 lg:-translate-x-[10px] lg:text-xl   ">
            Benchmark <br />
            Homes
          </h1>
        
          <p className="col-span-6 mb-3  text-sm md:text-base font-medium lg:col-span-2 lg:mb-0">
            {homepage[0].title}
          </p>
          <div className="col-span-12 col-start-1 aspect-[3/2] h-[30vh] w-full md:h-full lg:col-span-6 lg:col-start-7">
            <Image
              className="aspect-[3/2] object-cover"
              src={homepage[0].image}
              alt={homepage[0].alt}
              width={1200}
              height={600}
              priority
            />
          </div>
          <p className="col-span-12 my-medium text-sm font-medium lg:text-lg">
            {homepage[0].description}
          </p>
          <p></p>
        </Container>

        {/* <LatestProjects /> */}

        <SwiperHomeProjects />
        <AboutSection />
      </SmoothScrolling>
    </>
  );
}
