"use client";

import Image from "next/image";
import Photo from "../assets/images/35ac116a8b1e821cb1bf3bd1e004e6a4-cover-large.jpg";
import CountUp from "react-countup";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CountTrigger from "react-scroll-trigger";
import Link from "next/link";
import ReviewCards from "./reviewcards";
import AboutAccordions from "./about-accordions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutSection() {
	const [countersOn, setCountersOn] = useState([false, false, false]);

	const handleEnterViewport = (index: any) => {
		setCountersOn((prev) => {
			const newState = [...prev];
			newState[index] = true;
			return newState;
		});
	};

	const [isInView, setIsInView] = useState(false);
	const sectionRef = useRef(null);

	let mm = gsap.matchMedia();

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(".awards", { y: "70vh" });
			gsap.set(".houses", { y: "50vh" });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".group",
					pin: true,
					start: "top-=10 top",
					end: () => "+=" + window.innerHeight,
					scrub: 1,
				},
			});

			tl.to(".awards", { y: 0 });
			tl.to(".houses", { y: 0 }, "-=0.3");
		});
		return () => ctx.revert();
	}, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ threshold: 0.15 }
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

	const processes = [
		"Meeting/<br/> Design",
		"Concept<br/> Plan",
		"Formal<br/> Drafting",
		"Price<br/> Presentation",
		"Contract<br/> Signing",
		"Build",
		"Virtual<br/> Reality",
	];

	const [currentProcessIndex, setCurrentProcessIndex] = useState(0);
	const processRefs = useRef<any>(processes.map(() => React.createRef()));
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setCurrentProcessIndex(
							Number(entry.target.getAttribute("data-index"))
						);
					}
				});
			},
			{ threshold: 0.5 }
		);

		processRefs.current.forEach((ref: any) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, [processes]);

	useEffect(() => {
		setIsVisible(false);
		const timeout = setTimeout(() => setIsVisible(true), 150); // Short delay for the fade effect
		return () => clearTimeout(timeout);
	}, [currentProcessIndex]);

	return (
		<section className={`col-span-12 fade-in-section mt-[300px] `}>
			<div className="grid grid-cols-2 min-h-screen relative">
				<div className={`row-span-4 col-span-2 md:col-span-1`}>
					<div className="group">
						<div
							className={`hidden md:block bg-white z-[1] pb-10  mx-[10px] md:mx-5 col-span-2  md:col-span-1`}
						>
							<p className="text-black text-xs-medium md:py-5 ">About Us</p>
						</div>

						<div className="numbers pb-8 bg-white z-[2] border-t md:border-b border-dotted border-grey pt-3  mx-[10px] md:mx-5 col-span-2  md:col-span-1">
							<h4 className="pt-3 text-xs-medium">Years of Experience</h4>
							<CountTrigger onEnter={() => handleEnterViewport(0)}>
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
							</CountTrigger>
						</div>

						<div className="awards pb-8  z-[3] relative bg-white border-t border-dotted border-grey pt-3  mx-[10px] md:mx-5 col-span-2 md:col-span-1 ">
							<h4 className="pt-3 text-xs-medium">Master Builders Awards</h4>

							<CountTrigger onEnter={() => handleEnterViewport(1)}>
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
							</CountTrigger>
						</div>

						<div
							className={`relative houses z-[5] border-t border-dotted border-grey pt-3 pb-24  mx-[10px] md:mx-5 fade-in-section bg-white`}
						>
							<h4 className="pt-3 text-xs-medium">Houses Built</h4>

							<CountTrigger onEnter={() => handleEnterViewport(2)}>
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
									<p className="font-medium text-sm-2xl md:text-2xl mb-24">
										1500
									</p>
								)}
							</CountTrigger>
							<div
								className={`sticky top-0  py-32 md:mb-0 px-[10px] md:px-5 fade-in-section bg-white `}
							>
								<AboutAccordions />
							</div>
						</div>
					</div>
				</div>

				<div
					className={`process bg-black text-white min-h-screen z-[5] pl-3 pb-10 col-span-2 md:col-span-1 md:row-start-6 border-r border-grey border-dotted md:sticky top-0 row-span-6 `}
				>
					<div className={`h-screen flex flex-col justify-end sticky top-0`}>
						<p className="absolute top-5 left-5">Our Process</p>
						<div
							className={`font-medium text-sm-xl md:text-xl text-wrap fade-in ${
								isVisible ? "visible" : ""
							}`}
						>
							<h1 className="font-medium text-sm-xl md:text-xl mb-medium">
								{currentProcessIndex == processes.length - 1
									? "+"
									: currentProcessIndex + 1}
							</h1>
							<h1
								className="font-medium text-sm-xl md:text-xl text-wrap"
								dangerouslySetInnerHTML={{
									__html: processes[currentProcessIndex],
								}}
							></h1>
						</div>

						<Link
							href="/about-us"
							className="mt-[60px] mb-5 w-fit bg-[#F5F5F5] rounded-[5px] flex text-xxs p-[10px] cursor-pointer hover:opacity-50 col-span-6 text-black"
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
						</Link>
					</div>
					{processes.map((process, index) => (
						<div
							className="h-screen flex flex-col justify-end"
							ref={processRefs.current[index]}
							data-index={index}
							key={index}
						></div>
					))}
				</div>

				<div className="md:bg-black  col-span-2 row-start-1 md:col-start-2 row-span-5 relative order-1 ">
					<p className="block md:hidden text-black text-xs-medium md:py-5 p-[10px]">
						About Us
					</p>
					<div className="bg-black md:sticky top-0 z-[6]">
						<Image
							className=" object-cover"
							src={Photo}
							alt="Richard and Sam"
							width={2000}
							height={1000}
						/>
					</div>
				</div>
				<div className="bg-black z-[6] md:row-start-6 md:col-start-2 h-screen col-span-2 md:col-span-1 flex justify-center items-center top-0 row-span-6 md:sticky">
					<p className="absolute left-5 top-5 text-white">Reviews</p>
					<ReviewCards />
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
