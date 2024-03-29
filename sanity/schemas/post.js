import { defineArrayMember, defineField, defineType } from 'sanity';

export const post = {
  title: 'Updates',
  name: 'post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Main Featured Image',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'subtitle',
      title: 'Intro Paragaph',
      type: 'text',
    },
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Paragraphs',
      of: [
        defineArrayMember({
          name: 'articleSection',
          type: 'articleSection',
        }),
      ],
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
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
