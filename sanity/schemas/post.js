export const post = {
	title: "Updates",
	name: "post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "image",
			title: "Main Featured Image",
			type: "image",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title" },
		},
		{
			name: "subtitle",
			title: "Sub Title",
			type: "string",
		},
		{
			name: "body",
			title: "Body",
			type: "array",
			of: [
				{
					type: "block",
				},
			],
		},
	],
	preview: {
		select: {
			title: "title",
		},
	},
};
