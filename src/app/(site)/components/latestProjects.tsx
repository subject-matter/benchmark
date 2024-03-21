// @ts-nocheck

'use client';

gsap.registerPlugin(ScrollTrigger);

import { useRef, useEffect, RefObject, useState } from 'react';
import Project from './project';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { useLenis } from '@studio-freight/react-lenis';

import Link from 'next/link';

import { isMobile } from 'react-device-detect';
import { getHouses } from '../../../../sanity/sanity-utils';

function LatestProjects() {
  let lenis = useLenis();

  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const fetchedProjects = await getHouses();
        setHouses(fetchedProjects);
      } catch (error) {
        throw error;
      }
    };

    fetchHouses();
  }, []);

  const projectsToFlatten = houses.map((house) => {
    return house.projectSlider.map((item: any) => {
      return {
        title: item.title,
        image: item.image,
        features: item.features,
        slug: item.slug,
      };
    });
  });

  const projects = projectsToFlatten.flat();

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

      if (document.querySelectorAll('.project').length) {
        document
          .querySelectorAll('.project')
          [index].classList.add('project--active');
      }

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
            console.log(projectsLength);
          }
        },
        onDown: () => {
          if (animating) return;
          if (isMobile) {
            goUp();
          } else {
            goDown();
            console.log(projectsLength);
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

      const projectsLength = 3;

      function goDown() {
        if (index === projectsLength - 1) {
          resumeScroll();
          !isMobile &&
            lenis.scrollTo('#about-us-section', {
              duration: 1.2,
            });
        }
        if (index < projectsLength - 1) {
          index++;

          animate(
            projectsWrapper,
            index,
            () => (animating = true),
            () => {
              animating = false;
              //   if (index >= projectsLength - 1) {
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

      let mm = gsap.matchMedia;
      mm('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: projectsPin.current,
          pin: true,
          start: 'top top',
          end: '-=1 +=1',
          // markers: true,
          // end: '+=300',
          onEnter: () => {
            if (preventScroll.isEnabled === false) {
              console.log('pinned');
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
    });

    return () => ctx.revert();
  }, [lenis]);

  return (
    <section className="scroll-section-outer col-span-12 hidden overflow-hidden bg-white pb-20 pt-6 lg:block lg:h-screen ">
      <div ref={projectsPin} className="pt-5">
        <p className="col-span-12 mb-5 pl-[10px] text-sm font-medium lg:pl-5">
          Latest Projects
        </p>
        <div ref={projectsWrapper} className="relative flex">
          {projects.map((project, i) => (
            <div className="project w-full flex-shrink-0 lg:h-[85vh]" key={i}>
              {project.image && (
                <Project
                  image={project.image}
                  url={`/projects/${project.slug}`}
                />
              )}
              <div className="project-details mt-[10px] grid  w-full grid-cols-12 items-start bg-white px-[10px] lg:mt-5 lg:px-5">
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
                    {project?.features.map((item) => (
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

export default LatestProjects;
