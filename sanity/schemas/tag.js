import { TagIcon } from "@sanity/icons";

export const tag = {
  title: "Article Tags",
  name: "tag",
  icon: TagIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title,
    }),
  },
};
