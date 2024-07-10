import { type } from "os";
import { title } from "process";

export const upcomingProject = {
	name: "upcoming_project",
	title: "Upcoming Projects",
	type: "document",
	fields: [
		{
			name: "hero_image",
			title: "Hero Image",
			type: "image",
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
			  {
				type: 'block',
			  },
			],
		},
		{
			name: "images",
			title: "Display Images",
			type: "array",
			of: [{ type: "image" }],
		},
		{
			name: "suburb",
			title: "Suburb",
			type: "string",
		},
	],
};