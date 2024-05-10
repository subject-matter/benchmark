//@ts-nocheck

import Image from 'next/image';
import { getUpdate } from '../../../../../sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import { SanityImageAssetDocument } from 'next-sanity';
import urlBuilder from '@sanity/image-url';
import { dataset, projectId } from '../../../../../sanity/env';
import ElementRenderer from '../../components/ElementRenderer';
import AdjacentUpdates from '../../components/adjacent-updates';

type Props = {
  params: { update: string; body: any };
};

type ContentItem = {
  contentTitle?: string;
  content?: string;
  mediaID?: string;
  mediaImage?: SanityImageAssetDocument;
  quote?: string;
  quoteImage?: SanityImageAssetDocument;
  images?: SanityImageAssetDocument[];
  _type: string;
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
      <div className="relative mb-[90px] grid min-h-screen grid-cols-2 md:mb-[180px]">
        <div className="top-0 col-span-2 hidden h-screen bg-black lg:sticky lg:col-span-1 lg:block">
          <Image
            className="h-screen object-cover"
            src={update.image}
            alt={update.title}
            width={2000}
            height={2000}
            priority
          />
        </div>

        <div className="update col-span-2 lg:col-span-1">
          <div className="relative mx-[10px] lg:mx-5 lg:min-h-screen">
            <h4 className="mt-5 text-xs-medium">Updates</h4>
            <h1 className="mb-20 mt-20 text-sm-lg lg:mb-large lg:mt-[300px] lg:w-2/3 lg:text-lg">
              {update.title}
            </h1>
            <Image
              className="mb-20 lg:hidden"
              src={update.image}
              alt={update.title}
              width={2000}
              height={2000}
              priority
            />
            <div className="flex">
              {update.tags && update.tags.length > 0 && (
                <div className="flex w-full flex-wrap lg:w-1/3">
                  {update.tags.map((tag: any, index: number) => (
                    <span
                      key={index}
                      className={`feature-pill md:col-span-2 ${index === 0 ? 'mr-2' : ''}`}
                    >
                      {tag.title}
                    </span>
                  ))}
                </div>
              )}
              {update.publishDate && (
                <div className="flex w-full lg:w-2/3">
                  <span className="feature-pill mb-[7px] md:col-span-2">
                    {new Date(update.publishDate).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              )}
            </div>
            <div className="mb-5 mt-[15px] h-[1px] border border-dashed border-grey	" />
            <span className="mb-7 text-xs font-medium md:text-sm md:font-medium">
              {update.subtitle}
            </span>
            <ElementRenderer content={update.updateContent} />
            {/* To remove once new elements approved */}
            {/* <PortableText value={update.body} components={components} /> */}
          </div>
        </div>
      </div>
      <AdjacentUpdates slug={slug} />
    </section>
  );
}
