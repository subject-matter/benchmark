import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export const selectedProjectsSections = {
  name: 'selected-projects',
  title: 'Selected Projects',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    {
      name: 'mainImageCol',
      title: 'Main Image Column',
      type: 'string',
      description:
        'Choose which column you would like the larger image to sit in',
      options: {
        list: ['First', 'Third'],
      },
    },
    {
      title: 'Main Project',
      name: 'mainProject',
      type: 'reference',
      to: [{ type: 'page' }],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    },

    {
      title: 'Second Project',
      name: 'firstProject',
      type: 'reference',
      to: [{ type: 'page' }],
    },
    {
      name: 'image1',
      title: 'Image 1',
      type: 'image',
    },
    {
      title: 'Third Project',
      name: 'secondProject',
      type: 'reference',
      to: [{ type: 'page' }],
    },
    {
      name: 'image2',
      title: 'Image 2',
      type: 'image',
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
    },
    orderRankField({ type: 'category', newItemPosition: 'before' }),
  ],
  preview: {
    select: {
      mainProjectTitle: 'mainProject.title',
      firstProjectTitle: 'firstProject.title',
      secondProjectTitle: 'secondProject.title',
    },
    prepare: ({ firstProjectTitle, mainProjectTitle, secondProjectTitle }) => ({
      title: 'Project Row',
      subtitle: `${mainProjectTitle}, ${firstProjectTitle ? firstProjectTitle : ''}, ${secondProjectTitle ? secondProjectTitle : ''}`,
    }),
  },
};
