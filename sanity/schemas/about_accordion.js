export const about_accordion = {
	name: "about_accordion",
	title: "About Accordions",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
		},
	},
};
