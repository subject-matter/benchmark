// @ts-nocheck

import React from "react";
import Image from "next/image";
import { getAllProjects } from "../../../../sanity/sanity-utils";

export default async function AdjacentProjects({ slug }: string) {
  // Function to get the next and previous projects
  const getAdjacentProjects = async (currentProjectSlug: string) => {
    const projects = await getAllProjects();

    const currentIndex = projects.findIndex((project) => project.slug === slug);

    // Calculate the index of the next and previous projects
    const nextIndex = (currentIndex + 1) % projects.length;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    // Get the next and previous projects
    const nextProject = projects[nextIndex];
    const prevProject = projects[prevIndex];

    return { nextProject, prevProject };
  };

  // Example usage
  const currentProjectSlug = ''; // Replace with the actual slug of the current project
  const { nextProject, prevProject } =
    await getAdjacentProjects(currentProjectSlug);

  return (
    <div className="border-1 col-span-12 mb-[200px] grid grid-cols-12 gap-x-5 border-t border-dashed border-grey text-xs-medium">
      <div className="col-span-6 mt-[10px] flex flex-col md:col-span-3">
        <div className="mb-9 flex w-full justify-between text-xxs md:text-xs">
          <div>Previous</div>
          <div>{prevProject.title ? prevProject.title : ''}</div>
        </div>
        {prevProject.pageBuilder.portrait ||
        prevProject.pageBuilder.landscape ? (
          <a href={`/projects/${prevProject.slug}`}>
            <Image
              className="mb-5 w-full"
              width={1000}
              height={1000}
              src={
                prevProject.pageBuilder.portrait
                  ? prevProject.pageBuilder.portrait
                  : prevProject.pageBuilder.landscape
              }
              alt={prevProject.title}
            />
          </a>
        ) : (
          <p></p>
        )}
        <a
          href={`/projects/${prevProject.slug}`}
          className="flex w-fit cursor-pointer rounded-[5px] bg-[#F5F5F5] p-[10px] text-xxs hover:opacity-50"
        >
          View Project
          <div className="ml-[50px] flex items-center">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
                fill="black"
              />
            </svg>
          </div>
        </a>
      </div>

      <div className="col-span-6 col-start-7 mt-[10px]  flex flex-col md:col-span-3 md:col-start-10">
        <div className="mb-9 flex w-full justify-between text-xxs md:text-xs">
          <div>Next</div>
          <div>{nextProject.title ? nextProject.title : ''}</div>
        </div>
        {nextProject.pageBuilder.portrait ||
        nextProject.pageBuilder.landscape ? (
          <a href={`/projects/${nextProject.slug}`}>
            <Image
              className="mb-5 w-full"
              width={1000}
              height={1000}
              src={
                nextProject.pageBuilder.portrait
                  ? nextProject.pageBuilder.portrait
                  : nextProject.pageBuilder.landscape
              }
              alt={nextProject.title}
            />
          </a>
        ) : (
          <p></p>
        )}

        <a
          href={`/projects/${nextProject.slug}`}
          className="flex w-fit cursor-pointer rounded-[5px] bg-[#F5F5F5] p-[10px] text-xxs hover:opacity-50"
        >
          View Project
          <div className="ml-[50px] flex items-center">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
                fill="black"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
