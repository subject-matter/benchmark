//@ts-nocheck

import Image from 'next/image';
import { SelectedProject } from '../../../../types/SelectedProject';
import Link from 'next/link';
import { getSelectedProjects } from '../../../../sanity/sanity-utils';
import LenisScroll from '../components/lenis-provider';

export default async function SelectedProjects() {
  const selectedProjects = await getSelectedProjects();

  return (
    <>
      <LenisScroll>
        <div>
          <h1 className="mx-[10px] py-24 text-sm-3xl font-medium md:pb-large md:pt-3 md:text-3xl ">
            Selected <br /> Projects
          </h1>
          <div className="selected-projects col-span-12 w-full">
            {selectedProjects.map((project: any, index: number) => (
              <div key={index} className="mx-[10px] mb-12 md:mx-5 ">
                <div className="border-1 mx-auto grid w-full grid-cols-12 gap-x-[10px] border-dashed pb-[60px] text-xs-medium md:gap-x-5 md:border-t md:border-grey md:pb-[200px]">
                  {project.mainProjectTitle && (
                    <div
                      className={`border-1 col-span-12 flex flex-col border-y border-dashed border-grey pb-[60px] md:col-span-6 md:row-start-1 md:border-0 md:pb-0 ${
                        project.mainImageCol == 'First'
                          ? 'md:col-start-1'
                          : project.mainImageCol == 'Second'
                            ? 'md:col-start-4'
                            : 'row-start-2 md:col-start-7 md:row-start-1'
                      }`}
                    >
                      <Link
                        href={`projects/${project.mainProjectSlug}`}
                        className="mb-9 mt-2"
                      >
                        {project.mainProjectTitle}
                      </Link>

                      <Link
                        href={`projects/${project.mainProjectSlug}`}
                        className="selected-projects-image-container relative"
                      >
                        <Image
                          className="selected-projects-image w-full object-cover"
                          src={project.mainImage}
                          alt={project.mainProjectTitle}
                          width={1000}
                          height={1000}
                        />
                        <div className="selected-projects-image-blur absolute left-0 top-0 h-full w-full"></div>
                      </Link>
                    </div>
                  )}

                  {project.imageOneTitle && (
                    <div
                      className={`col-span-6 flex  flex-col md:col-span-3 ${
                        project.mainImageCol == 'First'
                          ? 'sm:row-start-2 md:col-start-7 md:row-start-1'
                          : 'md:col-start-1 md:row-start-1'
                      }`}
                    >
                      <Link
                        href={`projects/${project.imageOneSlug}`}
                        className="mb-9 mt-2"
                      >
                        {project.imageOneTitle}
                      </Link>

                      <Link
                        href={`projects/${project.imageOneSlug}`}
                        className="selected-projects-image-container relative"
                      >
                        <Image
                          className="selected-projects-image"
                          src={project.imageOne}
                          alt={project.imageOneTitle}
                          width={1000}
                          height={1000}
                        />

                        <div className="selected-projects-image-blur absolute left-0 top-0 h-full w-full"></div>
                      </Link>
                    </div>
                  )}

                  {project.imageTwoTitle && (
                    <div
                      className={`col-span-6 flex flex-col md:col-span-3 ${
                        project.mainImageCol == 'Third'
                          ? 'md:col-start-4 md:row-start-1'
                          : 'sm:row-start-2 md:col-start-10 md:row-start-1'
                      }`}
                    >
                      <Link
                        href={`projects/${project.imageTwoSlug}`}
                        className="mb-9 mt-2"
                      >
                        {project.imageTwoTitle}
                      </Link>

                      <Link
                        href={`projects/${project.imageTwoSlug}`}
                        className="selected-projects-image-container relative"
                      >
                        <Image
                          className="selected-projects-image"
                          src={project.imageTwo}
                          alt={project.imageTwoTitle}
                          width={1000}
                          height={1000}
                        />

                        <div className="selected-projects-image-blur absolute left-0 top-0 h-full w-full"></div>
                      </Link>
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
