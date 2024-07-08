'use client';

import CountUp from 'react-countup';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import CountScrollTrigger from 'react-scroll-trigger';
import AboutAccordions from '../components/about-accordions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function ScrollingNumbers() {
  const [countersOn, setCountersOn] = useState([false, false, false]);
  gsap.registerPlugin(ScrollTrigger);

  const handleEnterViewport = (index) => {
    setCountersOn((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.awards', { y: '70vh' });
      gsap.set('.houses', { y: '50vh' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.group',
          pin: true,
          start: 'top-=10 top',
          end: () => '+=' + window.innerHeight,
          scrub: 1,
        },
      });

      tl.to('.awards', { y: 0 }, '-=0.2');
      tl.to('.houses', { y: 0 }, '-=0.2');
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="group">
        <div className="numbers z-[2] col-span-2 mx-[10px]   bg-white pb-8 lg:col-span-1  lg:mx-5">
          <div className={`z-[1] col-span-2  hidden lg:col-span-1  lg:block`}>
            <p className="text-xs-medium text-black lg:py-5 ">About Us</p>
          </div>
          <h4 className="border-t border-dotted border-grey  pt-3 text-xs-medium">
            Years of Experience
          </h4>
          <CountScrollTrigger onEnter={() => handleEnterViewport(0)}>
            {countersOn[0] ? (
              <CountUp
                start={0}
                end={25}
                duration={1}
                suffix="+"
                className="text-sm-2xl font-medium lg:text-2xl "
              />
            ) : (
              <p className="text-sm-2xl font-medium lg:text-2xl ">25</p>
            )}
          </CountScrollTrigger>
        </div>

        <div className="awards relative  z-[3] col-span-2 mx-[10px] border-t border-dotted border-grey bg-white  pb-8 pt-3 lg:col-span-1 lg:mx-5 ">
          <h4 className="pt-3 text-xs-medium">Master Builders Awards</h4>

          <CountScrollTrigger onEnter={() => handleEnterViewport(1)}>
            {countersOn[1] ? (
              <CountUp
                start={0}
                end={200}
                duration={0.75}
                suffix="+"
                className="mb-24 text-sm-2xl font-medium lg:text-2xl"
              />
            ) : (
              <p className="text-sm-2xl font-medium lg:text-2xl ">20</p>
            )}
          </CountScrollTrigger>
        </div>
      </div>

      <div
        className={`houses fade-in-section relative z-[5] mx-[10px] border-t border-dotted border-grey  bg-white pt-3 lg:mx-5 lg:pb-24`}
      >
        <h4 className="pt-3 text-xs-medium">Houses Built</h4>

        <CountScrollTrigger onEnter={() => handleEnterViewport(2)}>
          {countersOn[2] ? (
            <CountUp
              start={0}
              end={1500}
              duration={0.5}
              separator=""
              suffix="+"
              className="mb-24 text-sm-2xl font-medium lg:text-2xl"
            />
          ) : (
            <p className="mb-24 text-sm-2xl font-medium lg:text-2xl">1500</p>
          )}
        </CountScrollTrigger>
        <div
          className={`fade-in-section sticky  top-0 bg-white px-[10px] py-32 lg:mb-0 lg:px-0 `}
        >
          <AboutAccordions />
          <a
            href="/about-us"
            className="col-span-6  mt-[60px] flex w-fit cursor-pointer rounded-[5px] bg-[#F5F5F5] p-[10px] text-xxs text-black hover:opacity-50"
          >
            Learn more
            <div className="ml-[50px] flex items-center">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
                  fill="black"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ScrollingNumbers;
