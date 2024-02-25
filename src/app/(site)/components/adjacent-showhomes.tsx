// @ts-nocheck

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllShowhomes } from "../../../../sanity/sanity-utils";

export default async function AdjacentShowhomes() {
	// Function to get the next and previous projects
	const getAdjacentShowhomes = async (currentShowhomeSlug: string) => {
		const showhomes = await getAllShowhomes();

		// Find the index of the current project

		const currentIndex = showhomes.findIndex(
			// @ts-ignore
			(showhome) => showhome.slug.current === currentShowhomeSlug
		);

		// Calculate the index of the next and previous projects
		const nextIndex = currentIndex + 1;
		const prevIndex = (currentIndex + showhomes.length) % showhomes.length;

		// Get the next and previous showhomes
		const nextProject = showhomes[nextIndex];
		const prevProject = showhomes[prevIndex];

		return { nextProject, prevProject };
	};

	// Example usage
	const currentProjectSlug = ""; // Replace with the actual slug of the current project
	const { nextProject, prevProject } = await getAdjacentShowhomes(
		currentProjectSlug
	);

	return (
		<div className="col-span-12 grid grid-cols-12 gap-x-5 border-grey border-dashed border-t border-1 text-xs-medium mb-[200px]">
			{/* <div className="col-span-6 md:col-span-3 flex flex-col mt-[10px]">
				<div className="flex justify-between w-full mb-9 text-xxs md:text-xs">
					<div>Previous Showhome</div>
					<div>{prevProject.title}</div>
				</div>
				<Image
					className="w-full mb-5"
					width={1000}
					height={1000}
					src={prevProject.image}
					alt={prevProject.title}
				/>
				<Link
					href={`/project/${prevProject.slug}`}
					className="w-fit bg-[#F5F5F5] rounded-[5px] flex text-xxs p-[10px] cursor-pointer hover:opacity-50"
				>
					View Project
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
			</div> */}

			<div className="col-span-6 col-start-7 md:col-span-3  md:col-start-10 flex flex-col mt-[10px]">
				<div className="flex justify-between w-full mb-9 text-xxs md:text-xs">
					<div>Next Showhome</div>

					<div>{nextProject.title}</div>
				</div>
				<Image
					className="w-full mb-5"
					width={1000}
					height={1000}
					src={nextProject.image}
					alt={prevProject.title}
				/>

				<Link
					href={`/showhome/${nextProject.slug}`}
					className="w-fit bg-[#F5F5F5] rounded-[5px] flex text-xxs p-[10px] cursor-pointer hover:opacity-50"
				>
					View Project
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
		</div>
	);
}
