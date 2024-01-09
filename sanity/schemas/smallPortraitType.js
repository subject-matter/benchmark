// imageGallery.js

import { defineField, defineType } from "sanity";

export const smallPortraitType = defineType({
	name: "smallPortrait",
	type: "object",
	title: "Small Portraits/Landscape",
	fields: [
		defineField({
			name: "SmallImageOne",
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
			name: "SmallImageTwo",
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
			name: "LandscapeImage",
			type: "image",
			description: "Leave blank if you only want the two small images",
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
					{ title: "Two Images Left", value: "left" },
					{ title: "Two Images Right", value: "right" },
				],
				layout: "radio",
				direction: "horizontal",
			},
		},
	],
});
