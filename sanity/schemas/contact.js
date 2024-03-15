export const contact = {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'contactImage',
      title: 'Contact Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    },
  ],
  preview: {
    select: {
      description: 'description', // Use the actual field name for the title
    },
    prepare: ({ description }) => ({
      title: 'Contact Page',
    }),
  },
};
