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
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ "type": "page" }],
				},
			],
		},
	],
	preview: {
		select: {
			description: "description", // Use the actual field name for the title
		},
		prepare: ({ description }) => ({
			title: "Homepage Info",
		}),
	},
};

