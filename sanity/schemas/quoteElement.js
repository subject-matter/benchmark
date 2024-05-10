import { defineField, defineType } from "sanity";
import { BlockquoteIcon } from '@sanity/icons';

export const quoteElement = defineType({
  name: 'quoteElement',
  type: 'document',
  icon: BlockquoteIcon,
  title: 'Quote Element',
  description: 'Quote element',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quoteImage',
      type: 'image',
      fields: [defineField({ name: 'alt', type: 'string' })],
      validation: (rule) => rule.required(),
    }),
  ],
});
