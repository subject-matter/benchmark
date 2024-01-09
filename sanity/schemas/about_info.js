export const about_info = {
	name: "about_info",
	title: "About Us",
	type: "document",
	fields: [
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "over_the_years",
			title: "Over the Years",
			type: "text",
		},
		{
			name: "team_description",
			title: "Our Team Description",
			type: "text",
		},
	],
	preview: {
		select: {
			description: "description", // Use the actual field name for the title
		},
		prepare: ({ description }) => ({
			title: "About Info",
		}),
	},
};
  