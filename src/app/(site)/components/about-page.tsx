// @ts-nocheck

"use client";

import Image from "next/image";
import CountUp from "react-countup";
import CountScrollTrigger from "react-scroll-trigger";
import { useEffect, useRef, useState } from "react";
import AboutAccordions from "./about-accordions";
import AboutTeam from "./about-team";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutSection({ info, staff, team }: any) {
  const [countersOn, setCountersOn] = useState([false, false, false]);
  const sectionRef = useRef(null);
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".awards", { y: "70vh" });
      gsap.set(".houses", { y: "50vh" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".group",
          pin: true,
          start: "top-=100 top",
          end: () => "+=" + window.innerHeight,
          scrub: 1,
        },
      });

      tl.to(".awards", { y: 0 }, "-=0.2");
      tl.to(".houses", { y: 0 }, "-=0.2");

      const sectionRefAnimation = gsap.to(sectionRef.current, {
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 0.3,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        animation: sectionRefAnimation,
        toggleActions: "play none none reverse",
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const bgObserver = new IntersectionObserver(
      ([entry]) => {
        if (!isWhite && entry.isIntersecting) {
          setIsWhite(true);
        } else {
          setIsWhite(false);
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      bgObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        bgObserver.unobserve(sectionRef.current);
      }
    };
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
      <div className="relative grid min-h-screen grid-cols-2">
        <div className="top-0 col-span-2 hidden h-screen overflow-hidden bg-black lg:sticky lg:col-span-1 lg:block">
          <Image
            className="h-screen object-cover"
            src={staff.team}
            alt={staff.teamAlt}
            width={1000}
            height={1000}
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="mx-[10px]  bg-white lg:mx-5 lg:min-h-screen">
            <h1 className="col-span-11 mb-medium mt-16 text-sm-xl font-medium lg:col-span-1 lg:mt-0 lg:text-xl">
              About Us
            </h1>
            <div className="mb-5 text-xs-medium lg:mb-[50vh] lg:text-base">
              {info.description}
            </div>

            <div className="mb-20 block h-[75vh] lg:mb-32 lg:hidden">
              <Image
                src={staff.team}
                alt={staff.teamAlt}
                width={1000}
                height={1000}
                className=""
              />
            </div>

            <div className="my-3 pt-6 text-xxs font-medium lg:my-7 lg:text-xs-medium ">
              Over the Years
            </div>
            <div className="mb-[48px] whitespace-pre-line text-xxs  lg:text-xs">
              {info.over_the_years}
            </div>
            <div className="mb-medium flex justify-between text-xxs lg:mb-large lg:text-xs">
              <div className="me-5 font-medium lg:me-0">Magazine</div>
              <div>
                <p>
                  Want to learn more about us? Check out our magazine{" "}
                  <span>
                    {" "}
                    <a className="underline" target="_blank" href="/magazine">
                      here
                    </a>
                  </span>
                  <span>
                    <a
                      className="underline"
                      target="_blank"
                      href="/magazine"
                    ></a>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="numbers z-[2] col-span-2 mx-[10px] border-t  border-dotted border-grey bg-white  pb-8 pt-3 lg:col-span-1  lg:mx-5">
              <h4 className="pt-3 text-xs-medium">Years of Experience</h4>
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
            className={`houses fade-in-section relative z-[5] mx-[10px] border-t border-dotted border-grey  bg-white pb-24 pt-3 lg:mx-5`}
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
                <p className="mb-24 text-sm-2xl font-medium lg:text-2xl">
                  1500
                </p>
              )}
            </CountScrollTrigger>
            <div
              className={`fade-in-section sticky  top-0 bg-white  py-32 lg:mb-0  `}
            >
              <AboutAccordions />
            </div>
          </div>

          <div ref={sectionRef}>
            <div
              className={`lg:h-min-screen fade-in-section z-[7] pt-[50px] ${
                isWhite ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <AboutTeam info={info} team={team} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
