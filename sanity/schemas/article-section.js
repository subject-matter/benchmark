// imageGallery.js

import { defineField, defineType } from 'sanity';

export const articleSection = defineType({
  name: 'articleSection',
  type: 'object',
  title: 'Paragraph',
  fields: [
    defineField({
      name: 'Subtitle',
      type: 'string',
    }),
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
});
