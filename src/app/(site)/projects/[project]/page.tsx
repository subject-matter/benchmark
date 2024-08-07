// @ts-nocheck

import AdjacentProjects from "@/app/(site)/components/adjacent_projects";
import {
	getProject,
} from "../../../../../sanity/sanity-utils";
import LenisScroll from "../../components/lenis-provider";
import Image from "next/image";


type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <>
      <LenisScroll>
        <div className="mb-5 grid w-full grid-cols-12 gap-x-5 gap-y-[110px] px-[10px] pt-[10px] text-xs md:gap-y-[180px] md:px-5">
          <div className="col-span-12 grid grid-cols-12 gap-x-5 ">
            <h1 className="mt-[10px] hidden md:absolute  md:block">
              {project.title}
            </h1>
            <div className="col-span-7 mb-5 mt-[10px] text-xxs font-medium md:col-span-2 md:col-start-5 md:mb-0 md:text-xs">
              Points of interest:
            </div>
            <div className=" col-span-12 mb-[50px] grid grid-cols-6 gap-[10px] md:col-span-4 md:mb-[150px] md:block">
              <div className="col-span-2 mb-5 gap-x-[10px]  gap-y-[10px] md:flex">
                {project.features.map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="feature-pill mb-[7px] md:col-span-2"
                  >
                    {feature}
                  </div>
                ))}
              </div>
              <div className="ml-[15px] col-span-4 col-start-3 flex flex-col text-xxs md:text-xs">
                <ul className="list-outside">
                  {project.interest_points.map(
                    (point: string, index: number) => (
                      <li className="list-disc" key={index}>
                        {point}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="col-span-12 row-start-1 mb-20 mt-20 text-sm-lg md:row-start-3 md:mb-[200px] md:mt-0 md:text-lg">
              <h1 className="mb-5 md:hidden">{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>

          {project.pageBuilder &&
            project.pageBuilder.map((item: any, itemIndex: number) => (
              <div className="col-span-12" key={itemIndex}>
                {item._type === 'fullLandscape' && item.image && (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={2000}
                    height={2000}
                    className="w-full"
                    priority
                  />
                )}

                {item._type === 'bigPortrait' && (
                  <div className={`grid grid-cols-4 gap-[10px] md:gap-5`}>
                    {item.bigImage && (
                      <Image
                        className={`col-span-2 w-full ${
                          item.layout == 'left' ? '' : 'col-start-3'
                        }`}
                        src={item.bigImage}
                        alt={item.bigImageAlt}
                        width={1000}
                        height={1000}
                      />
                    )}
                    {item.smallImage && (
                      <Image
                        className={`col-span-2 md:col-span-1 ${
                          item.layout == 'left'
                            ? 'md:col-start-4'
                            : 'col-start-1 row-start-1'
                        }`}
                        src={item.smallImage}
                        alt={item.smallImageAlt}
                        width={2000}
                        height={2000}
                      />
                    )}
                  </div>
                )}

                {item._type === 'mediumLandscape' && (
                  <div className="grid grid-cols-4 gap-[10px] md:gap-5">
                    {item.landscapeImage && (
                      <Image
                        className={`col-span-2 w-full ${
                          item.layout == 'left'
                            ? 'col-start-1'
                            : 'row-start-1 md:col-start-3'
                        }`}
                        src={item.landscapeImage}
                        alt={item.landscapeImageAlt}
                        width={2000}
                        height={2000}
                      />
                    )}
                    {item.smallImage && (
                      <Image
                        className={`smallImage col-span-2 w-full md:col-span-1 ${
                          item.layout == 'left'
                            ? 'md:col-start-4'
                            : 'col-start-1 row-start-1'
                        }`}
                        src={item.smallImage}
                        alt={item.smallImageAlt}
                        width={2000}
                        height={2000}
                      />
                    )}
                  </div>
                )}

                {item._type === 'individualImage' && item.image && (
                  <div className="grid grid-cols-4 gap-[10px] md:gap-5">
                    <Image
                      className={`col-span-2 w-full md:col-span-1 ${
                        item.layout == 'left'
                          ? 'col-start-1 md:col-start-2'
                          : 'md:col-start-3'
                      }`}
                      src={item.image}
                      alt={item.alt}
                      width={2000}
                      height={2000}
                    />
                  </div>
                )}

                {item._type === 'smallPortrait' && (
                  <div className="grid grid-cols-4 gap-[10px] md:gap-5">
                    {item.smallImage1 && (
                      <Image
<<<<<<< HEAD
                        className={`one col-span-2 w-full md:col-span-1 h-full object-cover ${
=======
                        className={`one col-span-2 h-full w-full md:col-span-1 ${
>>>>>>> refs/remotes/origin/main
                          item.layout == 'left'
                            ? 'col-start-1'
                            : 'row-start-1 md:col-start-3'
                        }`}
                        src={item.smallImage1}
                        alt={item.smallImage1Alt}
                        width={2000}
                        height={2000}
                      />
                    )}
                    {item.smallImage2 && (
                      <Image
                        className={`two col-span-2 w-full h-full  ${
                          item.layout == 'left'
                            ? 'md:col-span-1'
                            : 'row-start-1 md:col-start-4'
                        }`}
                        src={item.smallImage2}
                        alt={item.smallImage2Alt}
                        width={2000}
                        height={2000}
                      />
                    )}
                    {item.landscapeImage && (
                      <Image
                        className={`three  ${
                          item.layout == 'left'
                            ? 'col-span-2 mt-[110px]  md:col-start-4 md:mt-0'
                            : 'col-start-1 row-start-1'
                        }`}
                        src={item.landscapeImage}
                        alt={item.landscapeImageAlt}
                        width={2000}
                        height={2000}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}

          <AdjacentProjects slug={slug} />
        </div>
      </LenisScroll>
    </>
  );
}
