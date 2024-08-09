//@ts-nocheck

import Image from "next/image";
import { getSelectedProjects } from "../../../../sanity/sanity-utils";
import LenisScroll from "../components/lenis-provider";

export default async function SelectedProjects() {
  const selectedProjects = await getSelectedProjects();

  return (
    <>
      <LenisScroll>
        <div>
          <h1 className="mx-[10px] py-24 text-sm-3xl font-medium lg:pb-large lg:pt-0 lg:text-xl ">
            Completed <br /> Projects
          </h1>
          <div className="selected-projects col-span-12 w-full">
            {selectedProjects.map((project: any, index: number) => (
              <div key={index} className="mx-[10px] md:mx-5 md:mb-12 ">
                <div className="mx-auto grid w-full grid-cols-12  md:border-t md:border-dashed md:border-grey pb-[60px] text-xs-medium md:gap-x-5   md:pb-[200px]">
                  {project.mainProjectTitle && (
                    <div
                      className={`col-span-12 flex  flex-col   md:col-span-6 md:row-start-1 md:border-0 md:pb-0 ${
                        project.mainImageCol == "First"
                          ? "md:col-start-1 border-t border-dashed border-grey md:border-0"
                          : project.mainImageCol == "Second"
                            ? "md:col-start-4"
                            : "row-start-2 md:col-start-7 md:row-start-1 pb-[60px] md:pb-0  md:border-b-0"
                      }`}
                    >
                      <a
                        href={`projects/${project.mainProjectSlug}`}
                        className="mb-9 mt-2"
                      >
                        {project.mainProjectTitle}
                      </a>
                      <div className="selected-projects-image-container relative">
                        <a
                          href={`projects/${project.mainProjectSlug}`}
                          className="selected-projects-image-link "
                        >
                          <Image
                            className="selected-projects-image w-full object-cover"
                            src={project.mainImage}
                            alt={project.mainProjectTitle}
                            width={900}
                            height={900}
                            priority={true}
                          />
                        </a>
                      </div>
                    </div>
                  )}

                  <hr className="mt-[60px] col-span-12  border-dashed border-grey md:hidden" />

                  {project.imageOneTitle && (
                    <div
                      className={`col-span-6 flex flex-col   md:col-span-3  ${
                        project.mainImageCol == "First"
                          ? "sm:row-start-2 md:col-start-7 md:row-start-1 "
                          : "md:col-start-1 md:row-start-1 border-t border-dashed border-grey md:border-0"
                      }`}
                    >
                      <a
                        href={`projects/${project.imageOneSlug}`}
                        className="mb-9 mt-2"
                      >
                        {project.imageOneTitle}
                      </a>

                      <div className="selected-projects-image-container mr-[10px] md:mr-0 md:mx-0 relative">
                        <a
                          href={`projects/${project.imageOneSlug}`}
                          className="selected-projects-image-link "
                        >
                          <Image
                            className="selected-projects-image"
                            src={project.imageOne}
                            alt={project.imageOneTitle}
                            width={900}
                            height={900}
                            priority={true}
                          />
                        </a>
                      </div>
                    </div>
                  )}

                  {project.imageTwoTitle && (
                    <div
                      className={`col-span-6 flex flex-col  md:col-span-3  ${
                        project.mainImageCol == "Third"
                          ? "md:col-start-4 md:row-start-1 border-t border-dashed border-grey md:border-0"
                          : "sm:row-start-2 md:col-start-10 md:row-start-1 "
                      }`}
                    >
                      <a
                        href={`projects/${project.imageTwoSlug}`}
                        className="mb-9 mt-2"
                      >
                        {project.imageTwoTitle}
                      </a>

                      <div className="selected-projects-image-container relative">
                        <a
                          href={`projects/${project.imageTwoSlug}`}
                          className="selected-projects-image-link"
                        >
                          <Image
                            className="selected-projects-image"
                            src={project.imageTwo}
                            alt={project.imageTwoTitle}
                            width={900}
                            height={900}
                            priority={true}
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </LenisScroll>
    </>
  );
}
