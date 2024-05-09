import { defineField, defineType } from "sanity";
import { DocumentVideoIcon } from "@sanity/icons";

export const mediaElement = defineType({
  name: "mediaElement",
  type: "document",
  icon: DocumentVideoIcon,
  title: "Media Element",
  description:
    "Image or video element for a post. Can be a Vimeo video or an image.",
  fields: [
    defineField({
      name: "mediaID",
      title: "Vimeo ID",
      type: "string",
    }),
    defineField({
      name: "mediaImage",
      type: "image",
      fields: [defineField({ name: "alt", type: "string" })],
    }),
  ],
});
