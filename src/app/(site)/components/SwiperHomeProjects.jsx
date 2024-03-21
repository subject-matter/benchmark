// @ts-nocheck

'use client';

import { useRef, useEffect, RefObject, useState } from 'react';
import Project from './project';
import Link from 'next/link';

import { getHouses } from '../../../../sanity/sanity-utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { EffectFade } from 'swiper/modules';
function SwiperHomeProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getHouses();
        setProjects(fetchedProjects[0].projectSlider);
      } catch (error) {
        throw error;
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="scroll-section-outer col-span-12 overflow-hidden bg-white pb-20 pt-6 lg:hidden">
      <div className="pt-5">
        <p className="col-span-12 mb-5 pl-[10px] text-sm font-medium lg:pl-5">
          Latest Projects
        </p>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          modules={EffectFade}
          className="relative flex h-[40vh]"
        >
          {projects.map((project, i) => (
            <SwiperSlide
              className="project project--active w-full flex-shrink-0"
              key={i}
            >
              {project.image && (
                <Project
                  key={i}
                  image={project.image}
                  url={`/projects/${project.slug}`}
                />
              )}

              <div className="project-details  project--active mt-[10px] grid  w-full grid-cols-12 items-start bg-white px-[10px] lg:mt-5 lg:px-5">
                <p className="font-medium">{project.title}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="col-span-4 col-start-6 flex items-center space-x-5 text-[#999999] lg:col-start-3 "
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

                <span className="col-span-12 col-start-1 mt-5 flex items-center lg:col-span-3 lg:col-start-10 lg:ml-auto lg:mt-0 lg:justify-center">
                  <div className="mb-5 flex flex-wrap gap-x-[10px] gap-y-[10px]">
                    {project?.features.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-[5px] bg-[#F5F5F5] p-[6px] text-xxs"
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
