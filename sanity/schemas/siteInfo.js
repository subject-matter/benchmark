import { CogIcon } from "@sanity/icons";

export const siteInfo = {
  title: "Site Info",
  name: "site-info",
  icon: CogIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
  ],
};
