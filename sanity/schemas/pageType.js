// ./schemas/pageType.ts

import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
	name: "page",
	type: "document",
	title: "All Projects",
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
			title: "SEO / Share Settings",
			name: "seo",
			type: "seo",
		},
	],
});
