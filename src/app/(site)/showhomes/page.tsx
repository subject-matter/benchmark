import SlideMenu from "@/app/(site)/components/SlideMenu";
import Header from "@/app/(site)/components/header";

import { createClient } from "next-sanity";
import Footer from "@/app/(site)/components/footer";
import React from "react";
import Image from "next/image";
import { Showhome } from "../../../../types/Showhome";
import { ProjectImage } from "../../../../types/ProjectImage";
import { getAllShowhomes } from "../../../../sanity/sanity-utils";
import AdjacentProjects from "../components/adjacent-showhomes";

interface DateTimeOccurrence {
	day_range: string;
	time_range: string;
}

export default async function Project({ params }: { params: { id: string } }) {
	const showhomes = await getAllShowhomes();

	return (
    <>
      <div className="grid grid-cols-6 gap-x-5 px-[10px] pb-large md:grid-cols-12  md:px-5">
        <h1 className="col-span-12 my-24 break-words text-sm-3xl font-medium md:mb-large md:mt-0 lg:text-xl">
          Show&shy;homes
        </h1>
        <div className="border-1 col-span-12 w-full border-t border-dashed border-[#999999]"></div>
        {showhomes.map((showhome: Showhome, index: number) => (
          <div
            key={index}
            className={`${
              index % 2 == 0 ? 'col-start-1' : 'md:col-start-7'
            } col-span-12 mt-[10px] grid grid-cols-6 gap-x-5 md:col-span-6`}
          >
            <div className="col-span-6 mb-4 font-medium md:col-span-2 md:mb-0">
              <a href={`/showhome/${showhome.slug}`}>{showhome.title}</a>
            </div>
            <div className="col-span-6 grid grid-cols-3 gap-x-5 md:col-span-5 md:col-start-3">
              {showhome.showhome_times.map(
                (occurrence: DateTimeOccurrence, index: number) => (
                  <div
                    key={index}
                    className="col-span-3 grid grid-cols-3 gap-x-5"
                  >
                    <div className="col-span-1">{occurrence.day_range}</div>
                    <div className="col-span-4 col-start-2">
                      {occurrence.time_range}
                    </div>
                  </div>
                )
              )}
            </div>
            <a
              href={`/showhome/${showhome.slug}`}
              className="col-span-7 mt-4 w-full"
            >
              <Image
                src={showhome.image}
                alt={showhome.title}
                width={2000}
                height={2000}
              />
            </a>

            <a
              href={`/showhome/${showhome.slug}`}
              className="col-span-6 mb-10 mt-5 flex w-fit cursor-pointer rounded-[5px] bg-[#F5F5F5] p-[10px] text-xxs hover:opacity-50 md:mb-0"
            >
              Learn more
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
        ))}
      </div>
    </>
  );
}
