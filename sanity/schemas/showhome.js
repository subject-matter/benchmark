import { defineArrayMember, defineField, defineType } from "sanity";

export const showhome = {
	name: "showhome",
	title: "Showhomes",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title" },
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			title: "Features",
			name: "features",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			title: "Points of Interest",
			name: "interest_points",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "landscape_hero",
			title: "Landscape Hero Image",
			type: "image",
			description: "Image that shows on the Showhomes page",
		},
		{
			name: "address",
			title: "Address",
			type: "string",
		},
		{
			title: "Maps Location",
			name: "location",
			type: "geopoint",
		},
		defineField({
			name: "pageBuilder",
			type: "array",
			title: "Image Blocks",
			of: [
				defineArrayMember({
					name: "fullLandscape",
					type: "fullLandscape",
				}),
				defineArrayMember({
					name: "bigPortrait",
					type: "bigPortrait",
				}),
				defineArrayMember({
					name: "mediumLandscape",
					type: "mediumLandscape",
				}),
				defineArrayMember({
					name: "smallPortrait",
					type: "smallPortrait",
				}),
				defineArrayMember({
					name: "individualImage",
					type: "individualImage",
				}),
			],
		}),
		{
			name: "showhome_times",
			title: "Showhome Times",
			type: "array",
			of: [{ type: "openTimes" }],
		},
		{
			title: "SEO / Share Settings",
			name: "seo",
			type: "seo",
		},
	],
};
