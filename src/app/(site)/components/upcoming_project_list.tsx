// @ts-nocheck
'use client';

import { X, Play } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import 'swiper/css/pagination';

import { Pagination, EffectFade } from 'swiper/modules';
import clsx from 'clsx';
import { PortableText } from 'next-sanity';

interface ProjectImage {
  imageUrl: string;
}

interface Project {
  hero_image: ProjectImage;
  featured_image_1: ProjectImage;
  featured_image_2: ProjectImage;
  images: ProjectImage[];
  suburb: string;
}

export default function UpcomingProjectsList({ projects }: any) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const [swiper, setSwiper] = useState<any>(null);

  const images = [
    selectedProject?.featured_image_1?.imageUrl,
    selectedProject?.featured_image_2?.imageUrl,
    selectedProject?.hero_image?.imageUrl,
  ].filter((url) => url);

  const openLightbox = (project: Project, index: number) => {
    setSelectedProject(project);
    setImageIndex(index);
    setLightboxOpen(true);

    let header = document.getElementById('header');
    if (header) {
      header.style.display = 'none';
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedProject(null);
    setImageIndex(0);

    let header = document.getElementById('header');
    if (header) {
      header.style.display = 'block';
    }
  };

  return (
    <div className="col-span-12 ">
      {projects.map((upcomingProject: Project, index: number) => (
        <div
          key={index}
          className="border-1 col-span-12 mb-9 md:mx-[10px] md:mb-[60px] grid grid-cols-6 gap-x-5 border-t border-dashed border-grey md:grid-cols-12"
        >
          <div className="col-span-3 mb-9 mt-[10px] md:col-span-2">Suburb</div>
          <div className="col-span-3 mt-[10px] md:col-span-4 md:col-start-3 ">
            {upcomingProject.suburb}
          </div>

          {upcomingProject.hero_image && (
            <Image
              alt=""
              src={upcomingProject.hero_image.imageUrl}
              className="upcoming-project col-span-6 cursor-pointer md:col-start-7 md:mt-[10px] row-span-3"
              width={1000}
              height={1000}
              onClick={() => openLightbox(upcomingProject, 2)}
              priority={true}
            />
          )}

          {upcomingProject.content && 
          <div className='mt-9 md:mt-0 col-start-1 col-span-6 md:col-span-5 '>
          <PortableText value={upcomingProject.content} />
          </div>
           
          }
         
{/* 
          {upcomingProject.featured_image_1 && (
            <Image
              alt=""
              src={upcomingProject.featured_image_1.imageUrl}
              className="upcoming-project order-2 col-span-3 col-start-4 my-3 w-full cursor-pointer md:order-1 md:col-span-2 md:col-start-1 md:row-start-2 md:my-0"
              width={1000}
              height={1000}
              onClick={() => openLightbox(upcomingProject, 0)}
            />
          )}

          {upcomingProject.featured_image_2 && (
            <Image
              alt=""
              src={upcomingProject.featured_image_2.imageUrl}
              className="upcoming-project order-3 col-span-3 col-start-4 my-3 w-full cursor-pointer md:order-2 md:col-span-2 md:col-start-3 md:row-start-2  md:my-0"
              width={1000}
              height={1000}
              onClick={() => openLightbox(upcomingProject, 1)}
            />
          )} */}

         

          <div
            className={clsx(
              'fixed left-0 top-0 h-screen w-full backdrop-blur-2xl transition-all duration-300',
              lightboxOpen ? 'visible opacity-80' : 'invisible opacity-0'
            )}
          >
            <button
              onClick={closeLightbox}
              className="fixed right-[10px] top-[10px] z-20 flex  w-[100px] items-center justify-between rounded-[5px] bg-[#999999] bg-opacity-10 p-3 text-xxs backdrop-blur-lg md:w-[120px]"
            >
              Close{' '}
              <span>
                <X size={15} />
              </span>
            </button>

            <button
              className="absolute right-5 top-[50%]  z-[50] cursor-pointer text-white"
              onClick={() => swiper.slideNext()}
            >
              <Play fill="#999" color="#999" absoluteStrokeWidth={true} />
            </button>

            <button
              className="absolute left-5 top-[50%]  z-[50] cursor-pointer text-white"
              onClick={() => swiper.slidePrev()}
            >
              <Play
                fill="#999"
                color="#999"
                absoluteStrokeWidth={true}
                className="rotate-180"
              />
            </button>

            {lightboxOpen && (
              <Swiper
                spaceBetween={30}
                effect="fade"
                navigation={true}
                modules={[Pagination, EffectFade]}
                className="projects-swiper h-full"
                loop={true}
                initialSlide={imageIndex}
                onSwiper={(s) => setSwiper(s)}
                pagination={{
                  clickable: true,
                }}
                draggable={true}
              >
                {images &&
                  images.map((image, i) => (
                    <SwiperSlide key={i}>
                      <div className="flex h-full items-center justify-center">
                        <div className="relative h-[80%] w-[75%] p-10">
                          <Image
                            className="object-contain"
                            alt="Selected"
                            src={image}
                            layout="fill"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
