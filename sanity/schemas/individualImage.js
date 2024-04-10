import { defineField, defineType } from "sanity";

export const individualSmallImageType = defineType({
  name: 'individualImage',
  type: 'object',
  title: 'Individual Small Image',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Individual Image',
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
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          { title: 'Image Left', value: 'left' },
          { title: 'Image Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
  ],
});
