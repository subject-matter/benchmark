'use client';

import Image from 'next/image';
import Photo from '../assets/images/35ac116a8b1e821cb1bf3bd1e004e6a4-cover-large.jpg';
import CountUp from 'react-countup';
import CountScrollTrigger from 'react-scroll-trigger';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import AboutAccordions from './about-accordions';
import AboutTeam from './about-team';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AboutSection({ info }: any) {
  const [countersOn, setCountersOn] = useState([false, false, false]);

  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.awards', { y: '70vh' });
      gsap.set('.houses', { y: '50vh' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.group',
          pin: true,
          start: 'top-=100 top',
          end: () => '+=' + window.innerHeight,
          scrub: 1,
        },
      });

      tl.to('.awards', { y: 0 }, '-=0.2');
      tl.to('.houses', { y: 0 }, '-=0.2');

      const sectionRefAnimation = gsap.to(sectionRef.current, {
        backgroundColor: 'black',
        color: 'white',
        duration: 0.3,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        animation: sectionRefAnimation,
        toggleActions: 'play none none reverse',
      });
    });
    return () => ctx.revert();
  }, []);

  const handleEnterViewport = (index: number) => {
    setCountersOn((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <section className={`col-span-12 overflow-x-clip`}>
      <div className="grid grid-cols-2 min-h-screen relative">
        <div className="bg-black md:sticky top-0 h-screen overflow-hidden col-span-2 md:col-span-1 hidden md:block">
          <Image className="object-cover" src={Photo} alt="Richard and Sam" width={2000} height={1000} priority />
        </div>
        <div className=" mt-6 col-span-2 md:col-span-1">
          <div className="bg-white  md:min-h-screen mx-[10px] md:mx-5">
            <h1 className="font-medium text-sm-xl md:text-xl col-span-11 mb-medium  md:col-span-1 mt-16 md:mt-0">
              About Us
            </h1>
            <div className="text-xs-medium md:text-base mb-5 md:mb-[50vh]">{info.description}</div>
            <div className="text-xxs font-medium md:text-xs-medium my-3 md:my-7 pt-6 ">Over the Years</div>
            <div className="text-xxs md:text-xs mb-[48px]  whitespace-pre-line">{info.over_the_years}</div>
            <div className="text-xxs md:text-xs flex justify-between mb-medium md:mb-large">
              <div className="me-5 md:me-0 font-medium">Magazine</div>
              <div className="inline-block">
                Want to learn more about us? Check out our magazine
                <a target="_blank" href="" className="inline-block ms-2">
                  {' '}
                  here{' '}
                  <span className="inline-block">
                    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.65685 5.65685L0 0L0.00012207 11.3138L5.65685 5.65685Z" fill="#999999" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <Image
            src={Photo}
            alt="Richard and Sam"
            width={2000}
            height={1000}
            priority
            className="block md:hidden mb-20 md:mb-32"
          />

          <div className="group">
            <div className="numbers pb-8 bg-white z-[2] border-t md:border-b border-dotted border-grey pt-3  mx-[10px] md:mx-5 col-span-2  md:col-span-1">
              <h4 className="pt-3 text-xs-medium">Years of Experience</h4>
              <CountScrollTrigger onEnter={() => handleEnterViewport(0)}>
                {countersOn[0] ? (
                  <CountUp
                    start={0}
                    end={25}
                    duration={1}
                    suffix="+"
                    className="font-medium text-sm-2xl md:text-2xl "
                  />
                ) : (
                  <p className="font-medium text-sm-2xl md:text-2xl ">25</p>
                )}
              </CountScrollTrigger>
            </div>

            <div className="awards pb-8  z-[3] relative bg-white border-t border-dotted border-grey pt-3  mx-[10px] md:mx-5 col-span-2 md:col-span-1 ">
              <h4 className="pt-3 text-xs-medium">Master Builders Awards</h4>

              <CountScrollTrigger onEnter={() => handleEnterViewport(1)}>
                {countersOn[1] ? (
                  <CountUp
                    start={0}
                    end={20}
                    duration={0.75}
                    suffix="+"
                    className="font-medium text-sm-2xl md:text-2xl mb-24"
                  />
                ) : (
                  <p className="font-medium text-sm-2xl md:text-2xl ">20</p>
                )}
              </CountScrollTrigger>
            </div>
          </div>

          <div
            className={`relative houses z-[5] border-t border-dotted border-grey pt-3 pb-24  mx-[10px] md:mx-5 fade-in-section bg-white`}
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
                  className="font-medium text-sm-2xl md:text-2xl mb-24"
                />
              ) : (
                <p className="font-medium text-sm-2xl md:text-2xl mb-24">1500</p>
              )}
            </CountScrollTrigger>
            <div className={`sticky top-0  py-32 md:mb-0 px-[10px] md:px-5 fade-in-section bg-white `}>
              <AboutAccordions />
            </div>
          </div>

          <div ref={sectionRef}>
            <div className="z-[7] md:h-min-screen pt-[50px]">
              <AboutTeam info={info} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
