import { PUBLIC_PREVIEW_MODE } from '$env/static/public';

const isPreviewMode = PUBLIC_PREVIEW_MODE == 'true';

export default isPreviewMode;

