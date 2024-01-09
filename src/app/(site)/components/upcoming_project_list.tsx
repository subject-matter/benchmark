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

  const images = selectedProject && [
    selectedProject.featured_image_1.imageUrl,
    selectedProject.featured_image_2.imageUrl,
    selectedProject.hero_image.imageUrl,
  ];

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
    <div className="col-span-12">
      {projects.map((upcomingProject: Project, index: number) => (
        <div
          key={index}
          className="border-grey border-dashed border-t border-1 mb-[60px] grid grid-cols-6 md:grid-cols-12 gap-x-5 col-span-12"
        >
          <div className="col-span-3 md:col-span-2 mt-[10px] mb-9">Suburbtest</div>
          <div className="col-span-3 md:col-span-10 mt-[10px] md:col-start-3 ">{upcomingProject.suburb}</div>

          <Image
            alt=""
            src={upcomingProject.featured_image_1.imageUrl}
            className="cursor-pointer upcoming-project order-2 md:order-1 my-3 md:my-0 md:row-start-2 col-span-3 md:col-span-2 col-start-4 md:col-start-1 w-full"
            width={1000}
            height={1000}
            onClick={() => openLightbox(upcomingProject, 0)}
          />
          <Image
            alt=""
            src={upcomingProject.featured_image_2.imageUrl}
            className="cursor-pointer upcoming-project order-3 md:order-2 my-3 md:my-0 md:row-start-2 col-span-3 md:col-span-2 col-start-4 md:col-start-3  w-full"
            width={1000}
            height={1000}
            onClick={() => openLightbox(upcomingProject, 1)}
          />

          <Image
            alt=""
            src={upcomingProject.hero_image.imageUrl}
            className="cursor-pointer upcoming-project col-span-6 md:col-start-7"
            width={1000}
            height={1000}
            onClick={() => openLightbox(upcomingProject, 2)}
          />

          <div
            className={clsx(
              'transition-all duration-300 backdrop-blur-2xl h-screen fixed top-0 left-0 w-full',
              lightboxOpen ? 'opacity-80 visible' : 'opacity-0 invisible'
            )}
          >
            <button
              onClick={closeLightbox}
              className="w-[100px] md:w-[120px] fixed top-[10px] right-[10px]  text-xxs bg-[#999999] bg-opacity-10 p-3 rounded-[5px] z-20 backdrop-blur-lg flex justify-between items-center"
            >
              Close{' '}
              <span>
                <X size={15} />
              </span>
            </button>

            <button
              className="absolute top-[50%] right-5  z-[50] text-white cursor-pointer"
              onClick={() => swiper.slideNext()}
            >
              <Play fill="#999" color="#999" absoluteStrokeWidth={true} />
            </button>

            <button
              className="absolute top-[50%] left-5  z-[50] text-white cursor-pointer"
              onClick={() => swiper.slidePrev()}
            >
              <Play fill="#999" color="#999" absoluteStrokeWidth={true} className="rotate-180" />
            </button>

            {lightboxOpen && (
              <Swiper
                spaceBetween={30}
                effect="fade"
                navigation={true}
                modules={[Pagination, EffectFade]}
                className="h-full projects-swiper"
                loop={true}
                initialSlide={imageIndex}
                onSwiper={(s) => setSwiper(s)}
                pagination={{
                  clickable: true,
                }}
              >
                {images &&
                  images.map((image, i) => (
                    <SwiperSlide key={i}>
                      <div className="flex justify-center items-center h-full">
                        <div className="relative w-[75%] h-[80%] p-10">
                          <Image alt="Selected" src={image} layout="fill" objectFit="contain" />
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
