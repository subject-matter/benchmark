// @ts-nocheck

"use client";

import Project from "./project";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { EffectFade, Pagination, Autoplay, Navigation } from "swiper/modules";
function SwiperHomeProjects({ projects }) {
  return (
    <section className="col-span-12 overflow-hidden bg-white mb-20 md:mb-80 pt-6 ">
      <div className="pt-5 mb-[200px]">
        <p className="col-span-12 mb-5  px-[10px] md:px-5  text-sm font-medium ">
          Latest Projects
        </p>
        <Swiper
          modules={[EffectFade, Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          effect={"fade"}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          className="homeboy relative flex  "
          loop={true}
          draggable={true}
        >
          {projects.map((project, i) => (
            <SwiperSlide className="project project--active  w-full " key={i}>
              <div className="image-container  w-full">
                {project.image && (
                  <Project
                    key={i}
                    image={project.image}
                    url={`/projects/${project.slug}`}
                  />
                )}
              </div>

              <div className=" project--active mt-[10px] grid  w-full grid-cols-12 items-start bg-white px-[10px] lg:mt-5 lg:px-5">
                <p className="font-medium col-span-4 md:col-span-1">
                  {project.title}
                </p>
                <a
                  href={`/projects/${project.slug}`}
                  className="col-span-4 col-start-9 flex justify-end md:justify-normal items-center space-x-5 text-[#999999] lg:col-start-3 "
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
                </a>

                <span className="col-span-12 col-start-1 mt-5 flex items-center lg:col-span-3 lg:col-start-10 lg:ml-auto lg:mt-0 lg:justify-end">
                  <div className="mb-5 flex flex-wrap gap-x-[10px] gap-y-[10px]">
                    {project?.features.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-[5px] bg-[#F5F5F5] text-xxs"
                        style={{ padding: "6px" }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SwiperHomeProjects;
