import { homepage } from "./schemas/homepage";
import { selectedProjectsSections } from "./schemas/selected-projects-sections";
import { showhome } from "./schemas/showhome";
import { openTimes } from "./schemas/open-times";
import { upcomingProject } from "./schemas/upcoming-project";
import { process } from "./schemas/process";
import { walkthrough } from "./schemas/walkthrough";
import { about_info } from "./schemas/about_info";
import { staff_member } from "./schemas/staff_member";
import { about_accordion } from "./schemas/about_accordion";
import { review } from "./schemas/review";
import { reviews } from "./schemas/reviews";
import { pageType } from "./schemas/pageType";
import { fullLandscapeType } from "./schemas/fullLandscapeType";
import { bigPortraitType } from "./schemas/bigPortrait";
import { mediumLandscapeType } from "./schemas/mediumLandscape";
import { smallPortraitType } from "./schemas/smallPortraitType";
import { individualSmallImageType } from "./schemas/individualImage";
import { seo } from "./schemas/seo";
import { post } from "./schemas/post";
import { contact } from './schemas/contact';
import { articleSection } from './schemas/article-section';

export const schema = {
  types: [
    pageType,
    fullLandscapeType,
    bigPortraitType,
    mediumLandscapeType,
    smallPortraitType,
    individualSmallImageType,
    homepage,
    selectedProjectsSections,
    showhome,
    upcomingProject,
    openTimes,
    process,
    walkthrough,
    about_info,
    staff_member,
    about_accordion,
    review,
    reviews,
    seo,
    post,
    contact,
    articleSection,
  ],
};
