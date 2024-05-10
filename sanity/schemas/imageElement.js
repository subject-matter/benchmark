import { defineField, defineType, defineArrayMember } from "sanity";
import { ImagesIcon } from '@sanity/icons';

export const imageElement = defineType({
  name: 'imageElement',
  type: 'document',
  icon: ImagesIcon,
  title: 'Multi Image Element',
  description: 'Multi Image Element',
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'images',
          type: 'image',
        }),
      ],
    }),
  ],
});
