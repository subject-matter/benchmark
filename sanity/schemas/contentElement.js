import { defineField, defineType } from "sanity";
import { TextIcon } from '@sanity/icons';

export const contentElement = defineType({
  name: 'contentElement',
  type: 'document',
  icon: TextIcon,
  title: 'Content Element',
  fields: [
    defineField({
      name: 'contentTitle',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 4,
    }),
  ],
});
