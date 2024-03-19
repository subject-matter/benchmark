import Image from "next/image";
import { getUpdate } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import AdjacentUpdates from "../../components/adjacent-updates";
import Head from "next/head";
import { Metadata } from 'next';
 



type Props = {
	params: { update: string; body: any };
};

export default async function Update({ params }: Props) {
	const slug = params.update;
	const update = await getUpdate(slug);

	const components = {
		block: {
			p: ({ children }: any) => <p className="mb-5">{children}</p>,
		},
	};

	
	

	return (
    <section className={`col-span-12 overflow-x-clip pb-medium`}>
      <div className="relative grid min-h-screen grid-cols-2">
        <div className="top-0 col-span-2 hidden h-screen bg-black md:sticky md:col-span-1 md:block">
          <Image
            className="h-screen object-cover"
            src={update.image}
            alt={update.title}
            width={2000}
            height={2000}
            priority
          />
        </div>

        <div className="update col-span-2 md:col-span-1">
          <div className="relative mx-[10px] md:mx-5 md:min-h-screen">
            <h4 className="mt-5 text-xs-medium">Updates</h4>
            <h1 className="mb-20 mt-20 text-sm-lg md:mb-large md:mt-[300px] md:w-2/3 md:text-lg">
              {update.title}
            </h1>
            <Image
              className="mb-20 md:hidden"
              src={update.image}
              alt={update.title}
              width={2000}
              height={2000}
              priority
            />
            <h3 className="mb-7">{update.subtitle}</h3>
            <PortableText value={update.body} components={components} />
          </div>
        </div>
        {/* <AdjacentUpdates /> */}
      </div>
    </section>
  );
}
