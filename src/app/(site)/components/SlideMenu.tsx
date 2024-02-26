"use client";

import { X } from "lucide-react";
import React, { useEffect } from "react";
import SocialIcons from "./social-icons";

export default function SlideMenu() {
	const closeMenu = () => {
		const menu = document.getElementById("menu");
		const glass = document.getElementById("glass");
		const body = document.body;
		if (menu && glass) {
			menu.classList.remove("open");
			glass.style.opacity = "0";

			body.classList.remove("overflow-y-hidden");

			setTimeout(() => {
				glass.style.visibility = "hidden";
			}, 500);
		}

		console.log("Function ran");
	};

	useEffect(() => {
		const button = document.getElementById("closeMenuButton");
		if (button) {
			button.addEventListener("click", closeMenu);
		}
	}, []);

	return (
		<section
			className="w-full h-screen fixed top-0 left-0 grid grid-cols-2 z-20 transform translate-x-full transition ease-in-out duration-500"
			id="menu"
		>
			<button
				className="flex items-center fixed top-2 right-[10px] md:right-5 text-xxs bg-white bg-opacity-20 backdrop-blur-lg h-[30px] md:h-[35px] px-[10px] rounded-[5px] z-10 text-white transition duration-500 hover:bg-opacity-50"
				id={"closeMenuButton"}
			>
				Close{" "}
				<div className="ml-12">
					<X size={15} />
				</div>
			</button>
			<div className="bg-transparent hidden md:block z-[3]"></div>
			<div className="bg-black flex flex-col col-span-2 md:col-span-1">
				<div className="menulink text-white text-base md:text-lg flex flex-col m-[10px]  h-fit relative z-1 mt-24 md:m-5 ">
					<a
						href="/"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Home
					</a>
					<a
						href="/selected-projects"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Selected Projects
					</a>
					<a
						href="/showhomes"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Showhomes
					</a>
					<a
						href="/upcoming-projects"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Upcoming Projects
					</a>
					<a
						href="/our-process"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Our Process
					</a>
					<a
						href="/about-us"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						About Us
					</a>
					<a
						href="/updates"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Updates
					</a>
					<a
						href="/contact-us"
						className="hover:opacity-50 transition duration-250 w-fit"
					>
						Contact
					</a>
					<div className="absolute bottom-0 right-0 flex gap-x-1 invert">
						<SocialIcons />
					</div>
				</div>
				<div className="mt-auto flex justify-between flex-col md:flex-row text-xxs md:text-xs text-white m-5">
					<div className="flex flex-col mb-3 md:mb-0">
						<a
							href="tel:033438260"
							className="hover:opacity-50 transition duration-250 w-fit"
						>
							03 343 8260
						</a>
						<a
							href="mailto:info@benchmarkhomes.co.nz"
							className="hover:opacity-50 transition duration-250 w-fit"
						>
							info@benchmarkhomes.co.nz
						</a>
					</div>
					<div className="sm:flex sm:justify-end">
						<div className="float-right ">
							12 Whitburn Ave, Milns Park,
							<br /> Halswell, Christchurch, New Zealand
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
