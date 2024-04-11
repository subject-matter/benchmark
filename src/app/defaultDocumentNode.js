import { Iframe } from "sanity-plugin-iframe-pane";

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc) {
  return doc?.slug?.current
    ? `${window.location.origin}/projects/${doc.slug.current}`
    : `${window.location.origin}/project`;
}

// Import this into the deskTool() plugin
export const defaultDocumentNode = (S, data) => {
  console.log(data);
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
