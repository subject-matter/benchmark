import Image from "next/image";
import { getUpdate } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { SanityImageAssetDocument } from "next-sanity";
import urlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../../../../../sanity/env";

type Props = {
  params: { update: string; body: any };
};

type ContentItem = {
  contentTitle?: string;
  content?: string;
  mediaID?: string;
  mediaImage?: SanityImageAssetDocument;
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
      <div className="relative grid min-h-screen grid-cols-2">
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
                <div className="col-span-2 mb-5 gap-x-[10px]  gap-y-[10px] md:flex">
                  {update.tags.map((tag: any, index: number) => (
                    <span
                      key={index}
                      className="feature-pill mb-[7px] md:col-span-2"
                    >
                      {tag.title}
                    </span>
                  ))}
                </div>
              )}
              {update.publishDate && (
                <div className="mx-auto">
                  <span className="feature-pill mb-[7px] md:col-span-2">
                    {new Date(update.publishDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>
            <div className="border border-grey my-5 h-[1px] border-dashed	" />
            <span className="mb-7 text-sm font-medium">{update.subtitle}</span>
            <div className="mt-20 lg:mt-40">
              {update.updateContent &&
                update.updateContent.map((item: ContentItem, index: number) => (
                  <div key={index}>
                    {item._type === "mediaElements" && (
                      <>
                        {item.mediaID ? (
                          <div className="relative h-[450px] w-[800px] my-10 lg:my-20">
                            <iframe
                              src={`https://player.vimeo.com/video/${item.mediaID}?h=d7e55d0879&color=ffffff&title=0&byline=0&portrait=0`}
                              width="800"
                              height="360"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                              aria-label="Benchmark Homes - Virtual Reality Service"
                              className="absolute inset-0 w-full h-full"
                            />
                          </div>
                        ) : (
                          <div className="my-10 lg:my-20">
                            {projectId && dataset && (
                              <Image
                                alt={item.mediaImage?.alt}
                                loading="lazy"
                                layout="responsive"
                                src={urlBuilder({ projectId, dataset })
                                  .image(item.mediaImage?.asset)
                                  .fit("max")
                                  .auto("format")
                                  .url()}
                                width={1000}
                                height={1000}
                              />
                            )}
                          </div>
                        )}
                      </>
                    )}
                    {item._type === "contentElements" && (
                      <div className="mb-5 flex lg:flex-row flex-col">
                        <div
                          className={`w-1/3 pr-0 lg:pr-8 ${!item.contentTitle && "hidden"}`}
                        >
                          <p>
                            <strong>{item.contentTitle}</strong>
                          </p>
                        </div>
                        <div
                          className={`${item.contentTitle ? "w-2/3" : "w-full"} mt-5 lg:mt-0`}
                        >
                          <p>{item.content}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <PortableText value={update.body} components={components} />
          </div>
        </div>
        {/* <AdjacentUpdates /> */}
      </div>
    </section>
  );
}
