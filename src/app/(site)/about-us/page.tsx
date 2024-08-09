"use client";

import { NextSeo } from "next-seo";
import React from "react";
import {
  getAboutPageInfo,
  getGroup,
  getStaff,
} from "../../../../sanity/sanity-utils";
import AboutPage from "../components/about-page";
import SmoothScrolling from "../components/SmoothScrolling";

export default async function About() {
  const info = await getAboutPageInfo();
  const fetchedStaff = await getGroup();
  const fetchedTeam = await getStaff();

  return (
    <>
      <SmoothScrolling>
        <NextSeo title="About" />
        <AboutPage
          info={info.props.info}
          staff={fetchedStaff[0]}
          team={fetchedTeam}
        />
      </SmoothScrolling>
    </>
  );
}
