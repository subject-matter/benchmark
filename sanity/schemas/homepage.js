export const homepage = {
	name: "homepage",
	title: "Homepage",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative Text",
				},
			],
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "projectSlider",
			title: "Project Slider",
			description: "Projects that will feature on the slider",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ "type": "page" }],
				},
			],
		},
		{
			name: "Accordions",
			title: "Accordions",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ "type": "about_accordion" }],
				},
			],
		},
		{
			name: "reviews",
			title: "Reviews",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ "type": "reviews" }],
				},
			],
		},
		{
			title: "SEO / Share Settings",
			name: "seo",
			type: "seo",
		},
	],
	preview: {
		select: {
			description: "description", // Use the actual field name for the title
		},
		prepare: ({ description }) => ({
			title: "Home",
		}),
	},
};

