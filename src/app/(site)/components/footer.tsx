import React from "react";
import SocialIcons from "./social-icons";
import { getSiteInfo } from "../../../../sanity/sanity-utils";

export default async function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  const siteInfo = await getSiteInfo();

  return (
    <footer className="bg-transparent" id="footer">
      <div className="footer-container mx-auto grid w-full grid-cols-12 gap-x-5 bg-white text-xs-medium lg:p-5 ">
        <div className="col-start-10 row-start-1 lg:col-span-2 lg:col-start-1">
          <svg
            className="mt-[10px] lg:mt-0"
            width="80"
            height="20"
            viewBox="0 0 80 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 0L0 20V0H20ZM20 0L40 20H80L60 0H20Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="lg col-span-9 col-start-1 flex flex-col p-[10px] text-base lg:col-span-3 lg:col-start-10 lg:mb-[233px] lg:p-0">
          <a
            href="/"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Home
          </a>
          <a
            href="/selected-projects"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Completed Projects
          </a>
          <a
            href="/showhomes"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Showhomes
          </a>
          <a
            href="/upcoming-projects"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Upcoming Projects
          </a>
          <a
            href="/our-process"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Our Process
          </a>
          <a
            href="/about-us"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            About Us
          </a>
          <a
            href="/updates"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Updates
          </a>
          <a
            href="/contact-us"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Contact
          </a>
        </div>
        <a
          target="_blank"
          href="https://buildertrend.net/"
          className="col-span-2 row-start-3 mx-[10px] mb-[80px] flex h-[35px] w-fit items-center rounded-[5px]  bg-[#F5F5F5] p-3 px-[10px]  text-xxs hover:opacity-50 lg:ml-0"
        >
          <span>Login</span>
          <div className="ml-[50px] flex items-center">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
                fill="black"
              />
            </svg>
          </div>
        </a>
        <div className="col-span-4 col-start-9 md:col-start-10 flex gap-x-1">
          <SocialIcons />
        </div>

        <div className="col-span-12 row-start-4 grid grid-cols-12 items-end gap-x-5">
          <div className="col-span-12 flex flex-col pl-[10px] text-xxs lg:col-span-3 lg:pl-0 lg:text-xs-medium">
            <span>
              <a
                href={`tel:${siteInfo[0].phone}`}
                className="duration-250 w-fit transition hover:opacity-50"
              >
                {siteInfo[0].phone}
              </a>
              <br />
              <a
                href="mailto:info@benchmarkhomes.co.nz"
                className="duration-250 w-fit transition hover:opacity-50"
              >
                {siteInfo[0].email}
              </a>
            </span>
          </div>
          <div
            className="col-span-12 ml-auto pr-[10px] text-xxs lg:col-span-3 pl-[10px] lg:col-start-4 lg:ml-0 lg:pr-0 lg:text-xs-medium"
            dangerouslySetInnerHTML={{
              __html: `<p>${siteInfo[0].address}</p>`,
            }}
          />
          <div className="col-span-12  mt-auto bg-black py-[10px] pl-[10px] text-[12px] font-medium leading-[14px]  text-[#999999] lg:col-span-3 lg:col-start-10 lg:mt-0 lg:bg-white lg:py-0 lg:text-xxs lg:leading-normal lg:text-black">
            Copyright © {year} Benchmark Homes | All Rights Reserved.{" "}
            <br className="hidden lg:block" />
            View{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a href="/email-disclaimer" className="underline">
              Email Disclaimer.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
