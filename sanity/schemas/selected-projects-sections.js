export const selectedProjectsSections = {
	name: "selected-projects",
	title: "Selected Projects",
	type: "document",
	fields: [
		{
			name: "mainImageCol",
			title: "Main Image Column",
			type: "string",
			description:
				"Choose which column you would like the larger image to sit in",
			options: {
				list: ["First", "Third"],
			},
		},

		{
			title: "Main Project",
			name: "mainProject",
			type: "reference",
			to: [{ type: "page" }],
		},
		{
			name: "mainImage",
			title: "Main Image",
			type: "image",
		},

		{
			title: "Second Project",
			name: "firstProject",
			type: "reference",
			to: [{ type: "page" }],
		},
		{
			name: "image1",
			title: "Image 1",
			type: "image",
		},
		{
			title: "Third Project",
			name: "secondProject",
			type: "reference",
			to: [{ type: "page" }],
		},
		{
			name: "image2",
			title: "Image 2",
			type: "image",
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
			title: "Projects Row",
		}),
	},
};

