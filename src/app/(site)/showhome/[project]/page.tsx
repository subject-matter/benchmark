// @ts-nocheck


import { getShowhome } from "../../../../../sanity/sanity-utils";
import LenisScroll from "../../components/lenis-provider";
import Image from "next/image";
import Map from "../../components/ui/map";
import AdjacentShowhomes from "../../components/adjacent-showhomes";

type Props = {
	params: { project: string };
};

export default async function Showhome({ params }: Props) {
	const slug = params.project;
	const showhome = await getShowhome(slug);

	return (
    <>
      <LenisScroll>
        <div className="mb-5 grid w-full grid-cols-12 gap-x-5 gap-y-20 bg-white px-[10px] pt-[10px] text-xs md:gap-y-[110px] md:px-5 ">
          <div className="col-span-12 grid grid-cols-12 gap-x-5 bg-white">
            <div className="absolute mt-[10px]">{showhome.title}</div>
            <div className="col-span-7 mb-5 mt-[10px] text-xxs font-medium md:col-span-2 md:col-start-5 md:mb-0 md:text-xs">
              Points of interest:
            </div>
            <div className=" col-span-12 mb-[50px] grid grid-cols-6 gap-[10px] md:col-span-4 md:mb-[100px] md:block">
              <div className="col-span-2 mb-5 gap-x-[10px]  gap-y-[10px] md:flex">
                {showhome.features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="feature-pill mb-[7px] md:col-span-2"
                  >
                    {feature}
                  </div>
                ))}
              </div>
              <div className="col-span-4 col-start-3 flex flex-col text-xxs md:text-xs">
                <ul className="list-outside md:list-inside">
                  {showhome.interest_points.map(
                    (point: string, index: number) => (
                      <li className="list-disc" key={index}>
                        {point}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="col-span-12 row-start-1 mb-20 mt-20 text-sm-lg md:row-start-3  md:mt-0 md:text-lg">
              <div>{showhome.description}</div>
            </div>
          </div>

          <div className="col-span-12 mb-[110px] flex flex-col-reverse gap-x-5 md:mb-[500px] md:flex-row">
            <div className="items-center gap-x-5 md:flex ">
              <div className="mt-5 grid-cols-2 gap-5 lg:grid">
                <div className="w-full grid-cols-3  gap-x-5 ">
                  <div className="col-span-3 mb-5 text-xxs font-medium md:text-xs-medium">
                    Open Hours
                  </div>
                  {showhome.showhome_times.map(
                    (occurrence: DateTimeOccurrence, index: number) => (
                      <div
                        key={index}
                        className="col-span-3 grid grid-cols-3 gap-x-5 text-xxs md:text-xs"
                      >
                        <div className="col-span-1">{occurrence.day_range}</div>
                        <div className="col-span-2 col-start-2">
                          {occurrence.time_range}
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-5 flex w-full flex-col text-xxs md:mt-0  md:text-xs-medium">
                  Address:
                  <div className="mt-5 text-xxs md:text-xs">
                    {showhome.address}
                  </div>
                </div>
              </div>
            </div>

            <Map lat={showhome.lat} lng={showhome.lng} />
          </div>

          {showhome.pageBuilder &&
            showhome.pageBuilder.map((item: any, itemIndex: number) => (
              <div className="col-span-12" key={itemIndex}>
                {item._type === 'fullLandscape' && item.image && (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={2000}
                    height={2000}
                    className="w-full"
                  />
                )}

                {item._type === 'bigPortrait' &&
                  item.bigImage &&
                  item.smallImage && (
                    <div className={`grid grid-cols-4 gap-[10px] md:gap-5`}>
                      <Image
                        className={`col-span-2 w-full ${
                          item.layout == 'left' ? '' : 'col-start-3'
                        }`}
                        src={item.bigImage}
                        alt={item.bigImageAlt}
                        width={2000}
                        height={2000}
                      />
                      <Image
                        className={`col-span-2 md:col-span-1${
                          item.layout == 'left'
                            ? 'col-start-4'
                            : 'col-start-1 row-start-1'
                        }`}
                        src={item.smallImage}
                        alt={item.smallImageAlt}
                        width={2000}
                        height={2000}
                      />
                    </div>
                  )}

                {item._type === 'mediumLandscape' &&
                  item.landscapeImage &&
                  item.smallImage && (
                    <div className="grid grid-cols-4 gap-[10px] md:gap-5">
                      <Image
                        className={`col-span-2 w-full ${
                          item.layout == 'left'
                            ? 'col-start-1'
                            : 'col-start-3 row-start-1'
                        }`}
                        src={item.landscapeImage}
                        alt={item.landscapeImageAlt}
                        width={2000}
                        height={2000}
                      />
                      <Image
                        className={`col-span-2 w-full md:col-span-1 ${
                          item.layout == 'left'
                            ? 'col-start-4'
                            : 'col-start-1 row-start-1'
                        }`}
                        src={item.smallImage}
                        alt={item.smallImageAlt}
                        width={2000}
                        height={2000}
                      />
                    </div>
                  )}

                {item._type === 'individualImage' && item.image && (
                  <div className="grid grid-cols-4 gap-[10px] md:gap-5">
                    <Image
                      className={`col-span-2 w-full md:col-span-1 ${
                        item.layout == 'left'
                          ? 'col-start-1 md:col-start-2'
                          : 'col-start-3'
                      }`}
                      src={item.image}
                      alt={item.alt}
                      width={2000}
                      height={2000}
                    />
                  </div>
                )}

                {item._type === 'smallPortrait' &&
                  item.smallImage &&
                  item.smallImage2 &&
                  item.landscapeImage && (
                    <div className="grid grid-cols-4 gap-[10px] md:gap-5">
                      <Image
                        className={`col-span-2 w-full md:col-span-1 ${
                          item.layout == 'left'
                            ? 'col-start-1'
                            : 'col-start-3 row-start-1'
                        }`}
                        src={item.smallImage1}
                        alt={item.smallImage1Alt}
                        width={2000}
                        height={2000}
                      />
                      <Image
                        className={`col-span-2 w-full md:col-span-1 ${
                          item.layout == 'left' ? '' : 'col-start-4 row-start-1'
                        }`}
                        src={item.smallImage2}
                        alt={item.smallImage2Alt}
                        width={2000}
                        height={2000}
                      />
                      <Image
                        className={`${
                          item.layout == 'left'
                            ? 'col-start-4'
                            : 'col-start-1 row-start-1'
                        }`}
                        src={item.landscapeImage}
                        alt={item.landscapeImageAlt}
                        width={2000}
                        height={2000}
                      />
                    </div>
                  )}
              </div>
            ))}
          {/* <AdjacentShowhomes /> */}
        </div>
      </LenisScroll>
    </>
  );
}
