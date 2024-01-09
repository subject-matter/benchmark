// imageGallery.js

import { defineField, defineType } from "sanity";

export const mediumLandscapeType = defineType({
	name: "mediumLandscape",
	type: "object",
	title: "Medium Landscape",
	fields: [
		defineField({
			name: "LandscapeImage",
			type: "image",
			options: { hotspot: true },
			fields: [
				defineField({
					name: "alt",
					type: "string",
					title: "Alternative text",
				}),
			],
		}),
		defineField({
			name: "SmallImage",
			type: "image",
			description: "Leave blank if you only want the main image",
			options: { hotspot: true },
			fields: [
				defineField({
					name: "alt",
					type: "string",
					title: "Alternative text",
				}),
			],
		}),
		{
			title: "Layout",
			name: "layout",
			type: "string",
			initialValue: "left",
			options: {
				list: [
					{ title: "Medium Landscape Left", value: "left" },
					{ title: "Medium Landscape Right", value: "right" },
				],
				layout: "radio",
				direction: "horizontal",
			},
		},
	],
});
