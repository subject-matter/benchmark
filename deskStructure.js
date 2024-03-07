import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { HomeIcon } from '@sanity/icons';
import { FolderIcon } from '@sanity/icons';

export const myStructure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.divider(),
      S.listItem()
        .title('Home')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('edcbeb59-42da-4f6d-bd32-bbc9d995c79c')
        ),
      S.listItem()
        .title('About Us')
        .child(
          S.document()
            .schemaType('about_info')
            .documentId('cccc9700-b126-41bc-826c-a0fddb77eb06')
        ),
      orderableDocumentListDeskItem({
        type: 'selected-projects',
        title: 'Selected Projects',
        S,
        context,
        icon: FolderIcon,
      }),
      ...S.documentTypeListItems().filter((listItem) =>
        ['showhome', 'upcoming_project', 'process', 'post'].includes(
          listItem.getId()
        )
      ),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) =>
        ['page'].includes(listItem.getId())
      ),
    ]);
