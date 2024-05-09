import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const contentElement = defineType({
  name: "contentElement",
  type: "document",
  icon: ImageIcon,
  title: "Content Element",
  fields: [
    defineField({
      name: "contentTitle",
      type: "string",
      title: "Title",
    }),
    {
      name: "content",
      title: "Content",
      type: "string",
    },
  ],
});
