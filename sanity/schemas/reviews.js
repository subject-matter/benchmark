export const reviews = {
	name: "reviews",
	title: "Reviews",
	type: "document",
	fields: [
		{
			name: "reviewer",
			title: "Reviewer Name",
			type: "string",
		},
		{
			name: "review",
			title: "Review",
			type: "text",
		},
	],
	preview: {
		select: {
			title: "reviewer", // Use the field containing the reviewer's name
			subtitle: "review", // Use the field containing the review text as a subtitle
		},
	},
};