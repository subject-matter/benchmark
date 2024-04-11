const makeLivePreviewViews = (S) => [
  S.view
    .component(IFrame)
    .icon(RiImageFill)
    .options({
      url: async (doc) => {
        const previewUrl =
          new URL(process.env.SANITY_STUDIO_PREVIEW_URL) ||
          new URL(`${window.location.origin}/api/preview`);

        previewUrl.searchParams.append('_type', doc._type);
        previewUrl.searchParams.append('_id', doc._id);

        const previewPath = await fetch(previewUrl).then((res) => res.url);

        return previewPath;
      },
      reload: { revision: 300 },
    })
    .title('Preview'),
];
