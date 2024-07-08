// @ts-nocheck

import React from "react";
import Image from "next/image";
import { getUpdates } from "../../../../sanity/sanity-utils";

export default async function AdjacentUpdates({ slug }: string) {
  const getAdjacentUpdates = async (currentUpdateSlug: string) => {
    // Wait for the updates to be fetched
    const updates = await getUpdates();

    // Find the index of the current project
    const currentIndex = updates.findIndex(
      // @ts-ignore
      (update) => update.slug === currentUpdateSlug
    );

    // Calculate the index of the next and previous projects
    const nextIndex = (currentIndex + 1 + updates.length) % updates.length;
    const prevIndex = (currentIndex - 1 + updates.length) % updates.length;

    // Get the next and previous updates
    const nextUpdate = updates[nextIndex];
    const prevUpdate = updates[prevIndex];

    return { nextUpdate, prevUpdate };
  };

  // Example usage
  const currentUpdateSlug = ''; // Replace with the actual slug of the current project
  const { nextUpdate, prevUpdate } =
    await getAdjacentUpdates(currentUpdateSlug);

  return (
    <div className="border-1 col-span-12 mx-5 mb-[200px] grid grid-cols-12 gap-x-5 border-t border-dashed border-grey text-xs-medium">
      <div className="col-span-6 mt-[10px] flex flex-col md:col-span-3">
        <div className="mb-9 flex w-full justify-between text-xxs md:text-xs">
          <div>{prevUpdate.title ? prevUpdate.title : ''}</div>
        </div>
        <Image
          className="mb-5 w-full"
          width={1000}
          height={1000}
          src={prevUpdate.image}
          alt={prevUpdate.title}
        />
        <a
          href={`/update/${prevUpdate.slug}`}
          className="flex w-fit cursor-pointer rounded-[5px] bg-[#F5F5F5] p-[10px] text-xxs hover:opacity-50"
        >
          View update
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
          <div>{nextUpdate.title}</div>
        </div>
        <Image
          className="mb-5 w-full"
          width={1000}
          height={1000}
          src={nextUpdate.image}
          alt={nextUpdate.title}
        />

        <a
          href={`/update/${nextUpdate.slug}`}
          className="flex w-fit cursor-pointer rounded-[5px] bg-[#F5F5F5] p-[10px] text-xxs hover:opacity-50"
        >
          View update
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
