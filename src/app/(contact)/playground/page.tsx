import React from "react";
import { getHouses } from "../../../../sanity/sanity-utils";
import { ProjectSlide } from "@/app/types/project";
import Link from "next/link";
import Image from "next/image";

export default async function Playground() {
	const houses: ProjectSlide[] = await getHouses();

	// Use nested map functions to iterate through houses and projectSlider
	const allData = houses.map((house) => {
		return house.projectSlider.map((item) => {
			return {
				title: item.title,
				image: item.image,
				features: item.features,
			};
		});
	});

	// Flatten the array of arrays into a single array of objects
	const flattenedData = allData.flat();


	return (
		<div>
			<h1>House List</h1>
			<div>
				{flattenedData.map((item) => (
					<div key={item.title}>
						<h3>Title: {item.title}</h3>
						<img src={item.image} alt={`Image for ${item.title}`} />
						<ul>
							{item.features.map((feature: string) => (
								<li key={feature}>Feature: {feature}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
