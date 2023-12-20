"use client";

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
  {
    image: Marshall,
    title: 'Marshall',
    options: ['220m2', '4 Bedrooms', '2 Bathrooms'],
    url: '/project/02e67060-76ee-4276-8723-96c9870ca453',
  },
  {
    image: Wilson,
    title: 'Wilson',
    options: ['220m2', '3 Bedrooms', '2 Bathrooms'],
    url: '/project/c32880e8-aa57-4b41-950f-6da501e23ff4',
  },
];

gsap.registerPlugin(ScrollTrigger);

function LatestProjects() {
<<<<<<< HEAD
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
        onEnable: (self) => (self.savedScroll = self.scrollY()), // save the scroll position
        onChangeY: (self) => self.scrollY(self.savedScroll), // refuse to scroll
      });
      preventScroll.disable();

      function goDown() {
        if (index < projects.length - 1) {
          index++;

          animate(
            projectsWrapper,
            index,
            () => (animating = true),
            () => {
              animating = false;
              if (index >= projects.length - 1) {
                resumeScroll();
              }
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
=======
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const pin = gsap.fromTo(
				sectionRef.current,
				{
					translateX: 0,
				},
				{
					translateX: "-300vw",
					ease: "none",
					duration: 1,

					scrollTrigger: {
						trigger: triggerRef.current,
						start: "top top",
						end: "2000 top",
						scrub: 1,
						snap: {
							snapTo: 0.333333,
							duration: 1,
							ease: "power1.inOut",
						},
						pin: true,
						onUpdate: (self) => {
							let currentTranslation = self.progress * 300;
							const project2 = document.querySelector(".project-2");
							const project3 = document.querySelector(".project-3");
							const project4 = document.querySelector(".project-4");

							if (currentTranslation >= 80) {
								if (project2) {
									project2.classList.remove("opacity-0");
								}
							} else {
								if (project2) {
									project2.classList.add("opacity-0");
								}
							}

							if (currentTranslation >= 180) {
								if (project3) {
									project3.classList.remove("opacity-0");
								}
							} else {
								if (project3) {
									project3.classList.add("opacity-0");
								}
							}

							if (currentTranslation >= 280) {
								if (project4) {
									project4.classList.remove("opacity-0");
								}
							} else {
								if (project4) {
									project4.classList.add("opacity-0");
								}
							}
						},
					},
				}
			);
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	return (
		<section className="scroll-section-outer overflow-hidden col-span-12 pb-20 pt-6 bg-white">
			<div ref={triggerRef} className="pt-5">
				<p className="font-medium text-sm mb-5 col-span-12 pl-[10px] md:pl-5">
					Latest Projects
				</p>
				<div
					id="scroller"
					ref={sectionRef}
					className="scroll-section-inner w-[400vw] flex flex-row relative md:h-[85vh] bg-white"
				>
					<Project
						image={Wilson}
						url={"/project/c32880e8-aa57-4b41-950f-6da501e23ff4"}
					/>
					<Project
						image={Mortimer}
						url={"/project/02e67060-76ee-4276-8723-96c9870ca453"}
					/>
					<Project
						image={Marshall}
						url={"/project/02e67060-76ee-4276-8723-96c9870ca453"}
					/>
					<Project
						image={Wilson}
						url={"/project/c32880e8-aa57-4b41-950f-6da501e23ff4"}
					/>
				</div>
				<div className="bg-white absolute px-[10px] md:px-5  grid grid-cols-12 mt-[10px] md:mt-5 items-start w-full transition duration-500 z-[1]">
					<p id="project-title" className="font-medium">
						Wilson
					</p>
					<Link
						href="/project/c32880e8-aa57-4b41-950f-6da501e23ff4"
						className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] "
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

					<span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
						<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
							<div
								id="area"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								220m2
							</div>
							<div
								id="bedrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								3 Bedrooms
							</div>
							<div
								id="bathrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								2 Bathrooms
							</div>
						</div>
					</span>
				</div>

				<div className="project-2 opacity-0 bg-white absolute px-[10px] md:px-5  grid grid-cols-12 mt-[10px] md:mt-5 items-start w-full transition duration-500 z-[2]">
					<p id="project-title" className="font-medium">
						Mortimer
					</p>
					<Link
						href="/project/c32880e8-aa57-4b41-950f-6da501e23ff4"
						className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] pl-[10px] md:pl-0"
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

					<span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
						<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
							<div
								id="area"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								223m2
							</div>
							<div
								id="bedrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								4 Bedrooms
							</div>
							<div
								id="bathrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								2 Bathrooms
							</div>
						</div>
					</span>
				</div>

				<div className="project-3 opacity-0 bg-white absolute px-[10px] md:px-5  grid grid-cols-12 mt-[10px] md:mt-5 items-start w-full transition duration-500 z-[3]">
					<p id="project-title" className="font-medium">
						Marshall
					</p>
					<Link
						href="/project/c32880e8-aa57-4b41-950f-6da501e23ff4"
						className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] pl-[10px] md:pl-0"
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

					<span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
						<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
							<div
								id="area"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								220m2
							</div>
							<div
								id="bedrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								4 Bedrooms
							</div>
							<div
								id="bathrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								2 Bathrooms
							</div>
						</div>
					</span>
				</div>

				<div className="project-4 opacity-0 bg-white absolute px-[10px] md:px-5  grid grid-cols-12 mt-[10px] md:mt-5 items-start w-full z-[4] transition duration-500">
					<p id="project-title" className="font-medium">
						Wilson
					</p>
					<Link
						href="/project/c32880e8-aa57-4b41-950f-6da501e23ff4"
						className="col-start-3 col-span-4 flex items-center space-x-5 text-[#999999] hover:opacity-50 duration pl-[10px] md:pl-0"
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
					<span className="col-start-1 md:col-start-10 col-span-12 md:col-span-3 mt-5 md:mt-0 md:ml-auto flex items-center md:justify-center">
						<div className="flex gap-x-[10px] gap-y-[10px] flex-wrap mb-5">
							<div
								id="area"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								220m2
							</div>
							<div
								id="bedrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								3 Bedrooms
							</div>
							<div
								id="bathrooms"
								className="bg-[#F5F5F5] rounded-[5px] p-[6px] text-xxs"
							>
								2 Bathrooms
							</div>
						</div>
					</span>
				</div>
			</div>
		</section>
	);
>>>>>>> baec7bc (fixed some sizing)
}

export default LatestProjects;
