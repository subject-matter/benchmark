import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { HomeIcon } from "@sanity/icons";
import { FolderIcon } from "@sanity/icons";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.divider(),
      // S.listItem()
      //   .title('Home')
      //   .child(
      //     S.document()
      //       .schemaType('homepage')
      //       .documentId('edcbeb59-42da-4f6d-bd32-bbc9d995c79c')
      //   ),
      ...S.documentTypeListItems().filter((listItem) =>
        ["homepage"].includes(listItem.getId())
      ),

      ...S.documentTypeListItems().filter((listItem) =>
        ["about_info"].includes(listItem.getId())
      ),
      // S.listItem()
      //   .title('About Us')
      //   .child(
      //     S.document()
      //       .schemaType('about_info')
      //       .documentId('cccc9700-b126-41bc-826c-a0fddb77eb06')
      //   ),
      orderableDocumentListDeskItem({
        type: "selected-projects",
        title: "Selected Projects",
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "upcoming_project",
        title: "Upcoming Projects",
        S,
        context,
      }),
      ...S.documentTypeListItems().filter((listItem) =>
        ["showhome", "process", "post"].includes(
          listItem.getId()
        )
      ),
      // S.listItem()
      //   .title('Contact')
      //   .child(
      //     S.document()
      //       .schemaType('contact')
      //       .documentId('367d8af0-66c1-4b99-9771-9d05cec99383')
      //   ),
      ...S.documentTypeListItems().filter((listItem) =>
        ["contact"].includes(listItem.getId())
      ),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) =>
        ["page"].includes(listItem.getId())
      ),
      ...S.documentTypeListItems().filter((listItem) =>
        ["tag"].includes(listItem.getId())
      ),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) =>
        ["site-info"].includes(listItem.getId())
      ),
    ]);
