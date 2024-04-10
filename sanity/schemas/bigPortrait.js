// imageGallery.js

import { defineField, defineType } from "sanity";

export const bigPortraitType = defineType({
  name: 'bigPortrait',
  type: 'object',
  title: 'Big Portrait',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Big Portrait',
      hidden: true,
    }),
    defineField({
      name: 'BigImage',
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
    defineField({
      name: 'SmallImage',
      type: 'image',
      description: 'Leave blank if you only want the main image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          { title: 'Big Portrait Left', value: 'left' },
          { title: 'Big Portrait Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
  ],
});
