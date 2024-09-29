import { defineArrayMember, defineField } from "sanity";

export const post = {
  title: "Updates",
  name: "post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Main Featured Image",
      type: "image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "subtitle",
      title: "Intro Paragaph",
      type: "text",
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
    },
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    }),
    defineField({
      name: "updateContent",
      type: "array",
      title: "Content Elements",
      of: [
        defineArrayMember({
          name: "contentElements",
          type: "contentElement",
        }),
        defineArrayMember({
          name: "mediaElements",
          type: "mediaElement",
        }),
        defineArrayMember({
          name: "quoteElements",
          type: "quoteElement",
        }),
        defineArrayMember({
          name: "imageElements",
          type: "imageElement",
        }),
      ],
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Paragraphs",
      of: [
        defineArrayMember({
          name: "articleSection",
          type: "articleSection",
        }),
      ],
      hidden: true,
    }),
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
      hidden: true,
    },
    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
