"use client";

import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProjectImage {
	imageUrl: string;
}

interface Project {
	hero_image: ProjectImage;
	featured_image_1: ProjectImage;
	featured_image_2: ProjectImage;
	images: ProjectImage[];
	suburb: string;
}
export default function UpcomingProjectsList({ projects }: any) {
	return (
		<div className="col-span-12">
			{projects.map((upcomingProject: Project, index: number) => (
				<div
					key={index}
					className="border-grey border-dashed border-t border-1 mb-[60px] grid grid-cols-6 md:grid-cols-12 gap-x-5 col-span-12"
				>
					<div className="col-span-3 md:col-span-2 mt-[10px] mb-9">Suburb</div>
					<div className="col-span-3 md:col-span-10 mt-[10px] md:col-start-3">
						{upcomingProject.suburb}
					</div>

					<Image
						alt=""
						src={upcomingProject.featured_image_1.imageUrl}
						className="cursor-pointer upcoming-project order-2 md:order-1 my-3 md:my-0 md:row-start-2 col-span-3 md:col-span-2 col-start-4 md:col-start-1 w-full"
						width={1000}
						height={1000}
					/>
					<Image
						alt=""
						src={upcomingProject.featured_image_2.imageUrl}
						className="cursor-pointer upcoming-project order-3 md:order-2 my-3 md:my-0 md:row-start-2 col-span-3 md:col-span-2 col-start-4 md:col-start-3  w-full"
						width={1000}
						height={1000}
					/>

					<Image
						alt=""
						src={upcomingProject.hero_image.imageUrl}
						className="cursor-pointer upcoming-project col-span-6 md:col-start-7
						"
						width={1000}
						height={1000}
					/>

					<div
						className="hidden fixed top-0 left-0 w-full h-screen bg-opacity-20 backdrop-blur-2xl"
						id="lightbox"
					>
						<button className="flex items-center fixed top-2 right-[10px] md:right-5 text-xxs bg-white bg-opacity-20 backdrop-blur-lg  p-[10px] rounded-[5px] z-[50] text-black transition duration-500 hover:bg-opacity-50">
							Close{" "}
							<div className="ml-12">
								<X size={15} />
							</div>
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
