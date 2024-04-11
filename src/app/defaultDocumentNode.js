import { Iframe } from 'sanity-plugin-iframe-pane';

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc) {
  return doc?.slug?.current
    ? `http://benchmarkhomes.co.nz/projects/${doc.slug.current}`
    : `http://benchmarkhomes.co.nz/project`;
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
      .title('Preview'),
  ]);
};
