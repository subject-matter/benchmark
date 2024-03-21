// @ts-nocheck

'use client';

import { useRef, useEffect, RefObject, useState } from 'react';
import Project from './project';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { useLenis } from '@studio-freight/react-lenis';

import Wilson from '../assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg';
import Mortimer from '../assets/images/Projects-Mortimer-1500-x-1000-High-Res-6.jpg';
import Marshall from '../assets/images/Projects-Marshall-21500-x-1000-High-Res.jpg';
import Link from 'next/link';

import { isMobile } from 'react-device-detect';
import { getHouses } from '../../../../sanity/sanity-utils';

const projects = [
  {
    image: Wilson,
    title: 'Wilson',
    options: ['220m²', '3 Bedrooms', '2 Bathrooms'],
    url: '/project/c32880e8-aa57-4b41-950f-6da501e23ff4',
  },
  {
    image: Mortimer,
    title: 'Mortimer',
    options: ['223m²', '4 Bedrooms', '2 Bathrooms'],
    url: '/project/mortimer',
  },
  {
    image: Marshall,
    title: 'Marshall',
    options: ['220m²', '4 Bedrooms', '2 Bathrooms'],
    url: '/project/marshall',
  },
  {
    image: Wilson,
    title: 'Wilson',
    options: ['220m2', '3 Bedrooms', '2 Bathrooms'],
    url: '/project/wilson',
  },
];

gsap.registerPlugin(ScrollTrigger);

function LatestProjectsOld() {
  let lenis = useLenis();

  const projectsPin = useRef(null);
  const projectsWrapper = useRef(null);

  const animate = (
    target: RefObject<HTMLDivElement>,
    index: number,
    onStart: () => void,
    onComplete: () => void
  ) => {
    document
      .querySelectorAll('.project')
      .forEach((project) => project.classList.remove('project--active'));
    document
      .querySelectorAll('.project')
      [index].classList.add('project--active');

    gsap.to(target.current, {
      xPercent: -index * 100,
      duration: 1,
      ease: 'power2.inOut',
      force3D: true,

      onStart: () => onStart(),
      onComplete: () => onComplete(),
    });
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      let animating = false;
      let index = 0;

      document
        .querySelectorAll('.project')
        [index].classList.add('project--active');

      const observer = ScrollTrigger.observe({
        type: 'wheel,touch,pointer',
        preventDefault: true,
        tolerance: 10,
        onUp: () => {
          if (animating) return;
          if (isMobile) {
            goDown();
          } else {
            goUp();
          }
        },
        onDown: () => {
          if (animating) return;
          if (isMobile) {
            goUp();
          } else {
            goDown();
          }
        },
      });

      observer.disable();

      let preventScroll = ScrollTrigger.observe({
        preventDefault: true,
        type: 'wheel,scroll',
        allowClicks: true,
        onEnable: (self) => (self.savedScroll = self.scrollY()),
        onChangeY: (self) => self.scrollY(self.savedScroll),
      });
      preventScroll.disable();

      function goDown() {
        if (index === projects.length - 1) {
          resumeScroll();
          !isMobile &&
            lenis.scrollTo('#about-us-section', {
              duration: 1.2,
            });
        }
        if (index < projects.length - 1) {
          index++;

          animate(
            projectsWrapper,
            index,
            () => (animating = true),
            () => {
              animating = false;
              //   if (index >= projects.length - 1) {
              //     resumeScroll();
              //   }
            }
          );
        }
      }

      function goUp() {
        if (index !== 0) {
          index--;

          animate(
            projectsWrapper,
            index,
            () => (animating = true),
            () => {
              animating = false;
              if (index === 0) {
                resumeScroll();
              }
            }
          );
        }
      }

      function resumeScroll() {
        observer.disable();
        preventScroll.disable();

        lenis?.isStopped && lenis.start();

        const position = () => {
          if (index === 0) return preventScroll.scrollY() - 2;
          return preventScroll.scrollY() + 2;
        };

        lenis.scrollTo(position());
      }

      ScrollTrigger.create({
        trigger: projectsPin.current,
        pin: true,
        start: 'top top',
        end: '-=1 +=1',
        // markers: true,
        // end: '+=300',
        onEnter: () => {
          if (preventScroll.isEnabled === false) {
            preventScroll.enable();
            observer.enable();
            !lenis?.isStopped && lenis?.stop();
          }
        },

        onEnterBack: () => {
          if (preventScroll.isEnabled === false) {
            preventScroll.enable();
            observer.enable();
            !lenis?.isStopped && lenis?.stop();
          }
        },
      });
    });

    return () => ctx.revert();
  }, [lenis]);

  return (
    <section className="scroll-section-outer col-span-12 overflow-hidden bg-white pb-20 pt-6">
      <div ref={projectsPin} className="pt-5">
        <p className="col-span-12 mb-5 pl-[10px] text-sm font-medium md:pl-5">
          Latest Projects
        </p>
        <div ref={projectsWrapper} className="relative flex">
          {projects.map((project, i) => (
            <div className="project w-full flex-shrink-0" key={i}>
              <Project image={project.image} url={project.url} />

              <div className="project-details mt-[10px] grid  w-full grid-cols-12 items-start bg-white px-[10px] md:mt-5 md:px-5">
                <p className="font-medium">{project.title}</p>
                <Link
                  href={project.url}
                  className="col-span-4 col-start-6 flex items-center space-x-5 text-[#999999] md:col-start-3 "
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

                <span className="col-span-12 col-start-1 mt-5 flex items-center md:col-span-3 md:col-start-10 md:ml-auto md:mt-0 md:justify-center">
                  <div className="mb-5 flex flex-wrap gap-x-[10px] gap-y-[10px]">
                    {project?.options.map((item) => (
                      <div
                        key={item}
                        className="rounded-[5px] bg-[#F5F5F5] p-[6px] text-xxs"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestProjectsOld;
