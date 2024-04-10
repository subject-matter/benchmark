import { defineField, defineType } from "sanity";

export const fullLandscapeType = defineType({
  name: 'fullLandscape',
  type: 'object',
  title: 'Full Landscape',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Full Landscape',
      hidden: true,
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
