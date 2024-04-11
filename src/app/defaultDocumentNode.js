import { Iframe } from "sanity-plugin-iframe-pane";

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc) {
  return doc?.slug?.current
    ? `${process.env.NEXT_PUBLIC_APP_URL}/projects/${doc.slug.current}`
    : `${process.env.NEXT_PUBLIC_APP_URL}/project`;
}

// Import this into the deskTool() plugin
export const defaultDocumentNode = (S) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => getPreviewUrl(doc),
      })
      .title("Preview"),
  ]);
};
