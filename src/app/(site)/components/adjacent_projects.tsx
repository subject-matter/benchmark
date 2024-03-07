// @ts-nocheck

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "../../../../sanity/sanity-utils";

export default async function AdjacentProjects() {
  // Function to get the next and previous projects
  const getAdjacentProjects = async (currentProjectSlug: string) => {
    const projects = await getAllProjects();

    const currentIndex = projects.findIndex(
      // @ts-ignore
      (project) => project.slug.current === currentProjectSlug
    );

    // Calculate the index of the next and previous projects
    const nextIndex = Math.floor(Math.random() * projects.length) + 1;
    const prevIndex = Math.floor(Math.random() * projects.length) - 1;

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
          <div>Previous Project</div>
          <div>{prevProject.title}</div>
        </div>
        <Image
          className="mb-5 w-full"
          width={1000}
          height={1000}
          src={
            prevProject.portrait ? prevProject.portrait : prevProject.landscape
          }
          alt={prevProject.title}
        />
        <Link
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
        </Link>
      </div>

      <div className="col-span-6 col-start-7 mt-[10px]  flex flex-col md:col-span-3 md:col-start-10">
        <div className="mb-9 flex w-full justify-between text-xxs md:text-xs">
          <div>Next Project</div>
          <div>{nextProject.title}</div>
        </div>
        <Image
          className="mb-5 w-full"
          width={1000}
          height={1000}
          src={
            nextProject.portrait ? nextProject.portrait : nextProject.landscape
          }
          alt={prevProject.title}
        />

        <Link
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
        </Link>
      </div>
    </div>
  );
}
