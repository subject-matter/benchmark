export const selectedProjectsSections = {
	name: "selected-projects",
	title: "Selected Projects Sections",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "mainImageCol",
			title: "Main Image Column",
			type: "string",
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
			title: "First Project",
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
			title: "Second Project",
			name: "secondProject",
			type: "reference",
			to: [{ type: "page" }],
		},
		{
			name: "image2",
			title: "Image 2",
			type: "image",
		},
	],
};

