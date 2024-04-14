import { Iframe } from "sanity-plugin-iframe-pane";

export const defaultDocumentNode = (S, data) => {
  console.log(data.schemaType);
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => getPreviewUrl(doc, data.schemaType), // Pass schemaType to getPreviewUrl
        reload: {
          button: true,
        },
        attributes: {
          allow: 'fullscreen',
        },
      })
      .title('Preview'),
  ]);
};

// Modified getPreviewUrl function with switch-case statement
function getPreviewUrl(doc, schemaType) {
  switch (schemaType) {
    case 'page':
      return doc?.slug?.current
        ? `${window.location.origin}/projects/${doc.slug.current}`
        : `${window.location.origin}/projects/`;
    case 'post':
      return doc?.slug?.current
        ? `${window.location.origin}/update/${doc.slug.current}`
        : `${window.location.origin}/update/`;
    case 'showhome':
      return doc?.slug?.current
        ? `${window.location.origin}/showhome/${doc.slug.current}`
        : `${window.location.origin}/showhome/`;
    case 'selected-projects':
      return `${window.location.origin}/selected-projects`;
    case 'upcoming_project':
      return `${window.location.origin}/upcoming-projects`;
    case 'process':
      return `${window.location.origin}/our-process`;
    case 'contact':
      return `${window.location.origin}/contact`;
    case 'homepage':
      return `${window.location.origin}`;
    case 'about_info':
      return `${window.location.origin}/about-us`;
  }
}
