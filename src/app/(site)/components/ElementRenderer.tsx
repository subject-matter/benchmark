import React from "react";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../../../../sanity/env";

type ContentItem = {
  contentTitle?: string;
  content?: string;
  mediaID?: string;
  mediaImage: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  quote: string;
  quoteImage: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  images?: {
    alt: string;
    asset: {
      _ref: string;
    };
  }[];
  _type: string;
};

type ElementRendererProps = {
  content: ContentItem[];
};

const ElementRenderer: React.FC<ElementRendererProps> = ({ content }) => {
  return (
    <div className="mt-20 lg:mt-40">
      {content.map((item: ContentItem, index: number) => (
        <div key={index}>
          {item._type === "imageElements" && (
            <div className="my-10 lg:my-20">
              {item.images && item.images.length > 0 && (
                <div className="flex flex-col lg:flex-row">
                  {item.images.map((image, index) => (
                    <div
                      key={index}
                      className={
                        index % 2 === 0
                          ? "w-full lg:w-1/2"
                          : "h-full lg:w-1/2 lg:flex lg:justify-end mt-10 lg:mt-40"
                      }
                    >
                      {projectId && dataset && (
                        <Image
                          alt={image.alt}
                          loading="lazy"
                          src={urlBuilder({ projectId, dataset })
                            .image(image.asset)
                            .fit("max")
                            .auto("format")
                            .url()}
                          width={index % 2 === 0 ? 335 : 207}
                          height={index % 2 === 0 ? 224 : 298}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {item._type === "quoteElements" && (
            <div className="my-8 lg:my-16">
              <div className="border border-grey my-5 h-[1px] border-dashed	" />
              <div className="flex flex-col lg:flex-row">
                <div className="flex w-full mt-5 lg:mt-0 lg:w-1/2 pr-0 md:pr-8 lg:pr-12">
                  <span className="text-sm font-medium mb-4 lg:mb-0">
                    {item.quote}
                  </span>
                </div>
                <div className="flex w-full justify-center lg:justify-end lg:w-1/2">
                  {projectId && dataset && (
                    <Image
                      alt={item.quoteImage?.alt ?? "Quote Image"}
                      loading="lazy"
                      src={urlBuilder({ projectId, dataset })
                        .image(item.quoteImage.asset)
                        .fit("crop")
                        .width(365)
                        .height(458)
                        .auto("format")
                        .url()}
                      width={365}
                      height={458}
                    />
                  )}
                </div>
              </div>
              <div className="border border-grey my-5 h-[1px] border-dashed	" />
            </div>
          )}
          {item._type === "mediaElements" && (
            <>
              {item.mediaID ? (
                <div className="relative w-full my-10 lg:my-20 max-h-[675px] min-h-[150px] md:min-h-[575px] lg:min-h-[459px] 2xl:min-h-[675px]">
                  <iframe
                    src={`https://player.vimeo.com/video/${item.mediaID}?h=d7e55d0879&color=ffffff&title=0&byline=0&portrait=0`}
                    width="1200"
                    height="675"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    aria-label="Benchmark Homes - Virtual Reality Service"
                    className="absolute w-full h-full"
                  />
                </div>
              ) : (
                <div className="my-10 lg:my-20">
                  {projectId && dataset && (
                    <Image
                      alt={item.mediaImage?.alt ?? "Media Image"}
                      loading="lazy"
                      src={urlBuilder({ projectId, dataset })
                        .image(item.mediaImage.asset)
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
                className={`w-full lg:w-1/3 pr-0 md:pr-8 lg:pr-12 ${!item.contentTitle && "hidden"}`}
              >
                <p>
                  <strong>{item.contentTitle}</strong>
                </p>
              </div>
              <div
                className={`${item.contentTitle ? "w-full lg:w-2/3" : "w-full"} mt-5 lg:mt-0`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ElementRenderer;
