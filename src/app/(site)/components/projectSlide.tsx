import { ProjectSlide } from "@/app/types/project";
import React from "react";
import { getHouses } from "../../../../sanity/sanity-utils";
import { time } from "console";
import Link from "next/link";

async function HomeProjectSlide() {
  const houses: ProjectSlide[] = await getHouses();

  // Use nested map functions to iterate through houses and projectSlider
  const allData = houses.map((house) => {
    return house.projectSlider.map((item: any) => {
      return {
        title: item.title,
        image: item.image,
        features: item.features,
        slug: item.slug,
      };
    });
  });

  // Flatten the array of arrays into a single array of objects
  const flattenedData = allData.flat();

  return (
    <div>
      {flattenedData.map((item) => (
        <div key={item.title}>
          <img src={item.image} alt={`Image for ${item.title}`} />

          <p className="font-medium">{item.title}</p>
          <Link
            href={`projects/${item.slug}`}
            className="col-span-4 col-start-3 flex items-center space-x-5 text-[#999999] "
          >
            <p>View Home</p>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="#999999"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
                fill="#999999"
              />
            </svg>
          </Link>
          <div className="mb-5 flex flex-wrap gap-x-[10px] gap-y-[10px]">
            {item.features.map((feature: string) => (
              <div
                className="rounded-[5px] bg-[#F5F5F5] p-[6px] text-xxs"
                key={feature}
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="project-details mt-[10px] grid  w-full grid-cols-12 items-start bg-white px-[10px] md:mt-5 md:px-5">
            <p className="font-medium">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeProjectSlide;
