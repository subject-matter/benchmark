import React from "react";
import LenisScroll from "../components/lenis-provider";
import {
	getSelectedProjects,
	getUpdates,
} from "../../../../sanity/sanity-utils";
import Image from "next/image";

export default async function Updates() {
	const updates = await getUpdates();
	return (
    <>
      <LenisScroll>
        <div className="mx-[10px] lg:mx-5 mb-large">
          <h1 className="py-24 text-sm-3xl font-medium lg:pb-large lg:pt-0  lg:text-xl -translate-x-[5px] lg:-translate-x-[10px]">
            Updates
          </h1>

          <div className="selected-projects col-span-12 w-full">
            <div className="feature-pill px-0 my-[5px] text-xxs  ">
              Latest Update
            </div>
            <div className=" mb-12  ">
              <div className="border-1 mx-auto grid w-full grid-cols-12 gap-x-[10px] border-dashed pb-[60px] text-xs-medium lg:gap-x-5 lg:border-t lg:border-grey lg:pb-[200px]">
                <hr className="col-span-12 border-t border-dashed border-grey" />
                {updates.map((update: any, index: number) => (
                  <div
                    key={index}
                    className={`mb-10 mt-[15px] ${
                      index == 0
                        ? 'col-span-12 lg:col-span-6'
                        : index == 1
                          ? 'col-span-6 lg:col-span-6'
                          : 'col-span-6 lg:col-span-4 '
                    } `}
                  >
                    <div className="mb-10">
                      <a href={`update/${update.slug}`}>{update.title}</a>
                    </div>
                    <div className="selected-projects-image-container relative">
                    <a
                      href={`update/${update.slug}`}
                      className="selected-projects-image-link "
                    >
                      <Image
                        className="selected-projects-image w-full object-cover"
                        src={update.image}
                        alt={update.title}
                        width={1000}
                        height={1000}
                      />
                    </a>
                    </div>
                    
                    <a
                      href={`update/${update.slug}`}
                      className="col-span-6 mt-5 flex w-fit cursor-pointer rounded-[5px] bg-[#F5F5F5] p-[10px] text-xxs text-black hover:opacity-50"
                    >
                      Read more
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
                    {/* {index % 4 === 3 && (
                      <div className="border-1 col-span-12 border-dashed pb-[60px] lg:border-t lg:border-grey"></div>
                    )} */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LenisScroll>
    </>
  );
}

