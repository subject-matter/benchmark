'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ContactForm from './contact-form';

export default function ProcessesList({ processes, walkthroughs }: any) {
  const [isInView, setIsInView] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
		const bgObserver = new IntersectionObserver(
			([entry]) => {
				if (!isWhite && entry.isIntersecting) {
					setIsWhite(true);
				} else {
					setIsWhite(false);
				}
			},
			{ threshold: 0.1 }
		);

		if (backgroundRef.current) {
			bgObserver.observe(backgroundRef.current);
		}

		return () => {
			if (backgroundRef.current) {
				bgObserver.unobserve(backgroundRef.current);
			}
		};
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!isInView && entry.isIntersecting) {
					setIsInView(true);
					
				} else {
					setIsInView(false);
				}
			},
			{ threshold: 0.6 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	useEffect(() => {
		const processContainer = document.getElementById("processes-container");

		const checkScrollPos = () => {
			const title = document.getElementById("process-title");
			const titleIndex = document.getElementById("process-title-index") as any;
			const processElements = document.querySelectorAll(".process");

			let highestVisibleIndex = -1;
			processElements.forEach((process, index) => {
				const processRect = process.getBoundingClientRect();
				if (
					processRect.bottom > 0 &&
					processRect.top < window.innerHeight / 2.5
				) {
					highestVisibleIndex = index;
				}
			});

			if (!titleIndex) {
				return;
			}

			if (highestVisibleIndex !== -1) {
				if (highestVisibleIndex === processElements.length - 1) {
					titleIndex.innerText = "+";
				} else {
					titleIndex.innerText =
						highestVisibleIndex < 9
							? `0${highestVisibleIndex + 1}`
							: `${highestVisibleIndex + 1}`;
				}

				if (title && processes[highestVisibleIndex]) {
					title.innerText = processes[highestVisibleIndex].title;
				}
			}
		};

		if (processContainer) {
			window.addEventListener("scroll", checkScrollPos);
		}

		return () => {
			if (processContainer) {
				window.removeEventListener("scroll", checkScrollPos);
			}
		};
	}, [processes]);

	return (
    <>
      <div className="relative md:flex ">
        <div className="custom-full-height bg-black pt-[150px] text-white md:hidden">
          <h1 className="mb-[90px] mt-0 px-[10px] text-sm-xl font-medium md:px-5 md:text-xl ">
            Our <br /> Process
          </h1>
        </div>
        <div className="sticky top-0 z-20 bg-black md:relative md:w-1/2">
          <div
            className={`fade-in-section top-0 z-20 h-[115px] w-full md:sticky md:h-screen ${
              isWhite ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            <div
              className={`fade-in-section relative z-[20] flex h-full flex-row items-end pb-5 pl-3 md:flex-col md:items-start  md:justify-end `}
            >
              <h1
                className="me-5  text-sm font-medium md:absolute md:top-[40%] md:mb-medium md:me-0 md:text-xl"
                id="process-title-index"
              >
                01
              </h1>
              <h1
                className="text-wrap text-sm  font-medium md:w-1/2 md:text-xl"
                id="process-title"
              >
                {processes ? processes[0].title : ''}
              </h1>
            </div>
          </div>
        </div>
        <div className={` fade-in-section md:w-1/2`}>
          <h1 className="mb-[90px] mt-0 hidden px-[10px] text-sm-xl font-medium md:mt-6 md:block md:px-5 md:text-xl">
            Our <br /> Process
          </h1>
          {processes.map((process: any, index: number) => (
            <div
              key={index}
              className={`process w-full ${
                index === processes.length - 1
                  ? 'fade-in-section ' + (isInView ? 'bg-black text-white' : '')
                  : 'px-[10px] md:px-5 '
              }`}
              ref={index === processes.length - 1 ? sectionRef : null}
            >
              {index == processes.length - 1 ? <div className=""></div> : ''}
              <div
                className={`${
                  index === processes.length - 1
                    ? `fade-in-section mt-[50px] px-[10px] pt-[400px] md:px-5  `
                    : `border-1 mt-[50px] border-t border-dashed border-grey md:mt-large `
                } flex flex-col `}
              >
                {index == processes.length - 1 ? (
                  ' '
                ) : (
                  <div className="mb-10 mt-[10px] text-xs-medium">
                    {index < 10 ? `0${index + 1}` : index}
                  </div>
                )}
                <Image
                  className="mb-[10px] aspect-[3/2] h-auto w-full object-cover"
                  src={process.hero_image.imageUrl}
                  alt="Process Image"
                  width={1000}
                  height={1000}
                  priority
                />
                <div className="mb-[10px] whitespace-pre-line text-xs md:mb-5">
                  {process.description}
                </div>
              </div>
            </div>
          ))}
          <div
            className={`text-xs—medium fade-in-section grid gap-x-[2px] px-5 pt-large  md:grid-cols-2 md:px-0 md:pb-[44px] md:text-xs ${
              isWhite ? 'bg-white text-black' : 'bg-black text-white'
            } `}
          >
            <p className="mb-5 font-medium md:px-5 ">Virtual Walkthroughs</p>
            {walkthroughs.props.walkthroughs.map(
              (walkthrough: any, index: number) => (
                <div
                  key={index}
                  className={`${
                    index % 2 == 0
                      ? 'col-start-1 md:ml-5 md:pr-[9px]'
                      : 'md:col-start-2 md:mr-5 md:pl-[9px]'
                  } border-1 mb-14 flex flex-col border-t border-dashed border-grey`}
                >
                  <p className="mt-[10px] font-medium">{walkthrough.title}</p>
                  <p className="mb-4">{walkthrough.location}</p>
                  <div className="relative z-10">
                    <iframe
                      className="vimeo h-auto w-full"
                      src={walkthrough.url}
                      allow="autoplay; fullscreen; picture-in-picture"
                      title="Benchmark Homes - Chisnell - Oxford"
                    ></iframe>
                  </div>
                </div>
              )
            )}
            {walkthroughs.props.walkthroughs.length % 2 != 0 ? (
              <div className="border-1 mr-5 border-t border-dashed border-grey"></div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div
        className="ml-auto grid grid-cols-2 items-end gap-[10px] p-5 text-xxs md:w-1/2  md:gap-[15px] "
        ref={backgroundRef}
      >
        <p className="col-span-2 mb-48 w-full text-sm-xl md:mt-[20vh] md:text-xl">
          Get In Touch
        </p>
        <ContactForm />
      </div>
    </>
  );
}
