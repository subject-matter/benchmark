import { type } from "os";
import { title } from "process";
import { defineField } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const upcomingProject = {
	name: "upcoming_project",
	title: "Upcoming Projects",
	type: "document",
	orderings: [orderRankOrdering],
	preview: {
		select: {
			title: 'suburb',
			media: 'hero_image'
		}
	},
	fields: [
		orderRankField({ type: 'upcoming_project' }),
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