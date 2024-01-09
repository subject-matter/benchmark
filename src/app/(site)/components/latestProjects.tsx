'use client';

import { useRef, useEffect, RefObject } from 'react';
import Project from './project';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { useLenis } from '@studio-freight/react-lenis';

import Wilson from '../assets/images/Projects-Wilson-1500x1000-High-Res-1.jpg';
import Mortimer from '../assets/images/Projects-Mortimer-1500-x-1000-High-Res-6.jpg';
import Marshall from '../assets/images/Projects-Marshall-21500-x-1000-High-Res.jpg';
import Link from 'next/link';

import { isMobile } from 'react-device-detect';

const projects = [
  {
    image: Wilson,
    title: 'Wilson',
    options: ['220m2', '3 Bedrooms', '2 Bathrooms'],
    url: '/project/c32880e8-aa57-4b41-950f-6da501e23ff4',
  },
  {
    image: Mortimer,
    title: 'Mortimer',
    options: ['223m2', '4 Bedrooms', '2 Bathrooms'],
    url: '/project/02e67060-76ee-4276-8723-96c9870ca453',
  },
  //   {
  //     image: Marshall,
  //     title: 'Marshall',
  //     options: ['220m2', '4 Bedrooms', '2 Bathrooms'],
  //     url: '/project/02e67060-76ee-4276-8723-96c9870ca453',
  //   },
  //   {
  //     image: Wilson,
  //     title: 'Wilson',
  //     options: ['220m2', '3 Bedrooms', '2 Bathrooms'],
  //     url: '/project/c32880e8-aa57-4b41-950f-6da501e23ff4',
  //   },
];

gsap.registerPlugin(ScrollTrigger);

function LatestProjects() {
  let lenis = useLenis();

  const projectsPin = useRef(null);
  const projectsWrapper = useRef(null);

  const animate = (target: RefObject<HTMLDivElement>, index: number, onStart: () => void, onComplete: () => void) => {
    document.querySelectorAll('.project').forEach((project) => project.classList.remove('project--active'));
    document.querySelectorAll('.project')[index].classList.add('project--active');

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

      document.querySelectorAll('.project')[index].classList.add('project--active');

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
        //@ts-ignore
        onEnable: (self) => (self.savedScroll = self.scrollY()),
        //@ts-ignore
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
            () => (animating = false)
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
          if (index === 0) return preventScroll.scrollY() - 1;
          return preventScroll.scrollY() + 1;
        };

        lenis.scrollTo(position());
      }

      ScrollTrigger.create({
        trigger: projectsPin.current,
        pin: true,
        start: 'top top',
        end: '+=1',
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

      //   ScrollTrigger.create({
      //     trigger: projectsPin.current,
      //     markers: true,
      //   });
    });

    return () => ctx.revert();
  }, [lenis]);

  return (
    <section className="scroll-section-outer overflow-hidden col-span-12 pb-20 pt-6 bg-white">
      <div ref={projectsPin} className="pt-5">
        <p className="font-medium text-sm mb-5 col-span-12 pl-[10px] md:pl-5">Latest Projects</p>
        <div ref={projectsWrapper} className="relative flex">
          {projects.map((project, i) => (
            <div className="project w-full flex-shrink-0" key={i}>
              <Project image={project.image} url={project.url} />

              <div className="bg-white px-[10px] md:px-5  grid grid-cols-12 mt-[10px] md:mt-5 items-start w-full project-details">
                <p className="font-medium">{project.title}</p>
                <Link href={project.url} className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] ">
                  <p>View Home</p>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z" fill="#999999" />
                  </svg>
                </Link>

                <span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
                  <div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
                    {project?.options.map((item) => (
                      <div key={item} className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs">
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
