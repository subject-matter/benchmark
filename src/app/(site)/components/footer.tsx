"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import SocialIcons from "./social-icons";


export default function Footer() {

	const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="min-h-[100svh] bg-transparent" id="footer">
      <div className="footer-container absolute bottom-0 mx-auto grid w-full grid-cols-12 gap-x-5 bg-white text-xs-medium md:p-5 ">
        <div className="col-start-10 row-start-1 md:col-span-2 md:col-start-1">
          <svg
            className="mt-[10px] md:mt-0"
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
        <div className="md col-span-9 col-start-1 flex flex-col p-[10px] text-base md:col-span-3 md:col-start-10 md:mb-[233px] md:p-0">
          <Link
            href="/"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Home
          </Link>
          <Link
            href="/selected-projects"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Selected Projects
          </Link>
          <Link
            href="/showhomes"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Showhomes
          </Link>
          <Link
            href="/upcoming-projects"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Upcoming Projects
          </Link>
          <Link
            href="/our-process"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Our Process
          </Link>
          <Link
            href="/about-us"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            About Us
          </Link>
          <Link
            href="/updates"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Updates
          </Link>
          <Link
            href="/contact-us"
            className="duration-250 w-fit transition hover:opacity-50"
          >
            Contact
          </Link>
        </div>
        <a
          target="_blank"
          href="https://buildertrend.net/"
          className="col-span-2 row-start-3 mx-[10px] mb-[80px] flex h-[35px] w-fit items-center rounded-[5px]  bg-[#F5F5F5] p-3 px-[10px]  text-xxs hover:opacity-50 md:ml-0"
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
        <div className="col-span-4 col-start-9 flex gap-x-1">
          <SocialIcons />
        </div>

        <div className="col-span-12 row-start-4 grid grid-cols-12 items-end gap-x-5">
          <div className="col-span-12 flex flex-col pl-[10px] text-xxs md:col-span-3 md:pl-0 md:text-xs-medium">
            <span>
              <Link
                href="tel:033438260"
                className="duration-250 w-fit transition hover:opacity-50"
              >
                +64 3 343 8260
              </Link>
              <br />
              <Link
                href="mailto:info@benchmarkhomes.co.nz"
                className="duration-250 w-fit transition hover:opacity-50"
              >
                info@benchmarkhomes.co.nz
              </Link>
            </span>
          </div>
          <div className="col-span-12 ml-auto pr-[10px] text-xxs md:col-span-3 md:col-start-4 md:ml-0 md:pr-0 md:text-xs-medium">
            12 Whitburn Ave, Milns Park,
            <br /> Halswell, Christchurch, New Zealand
          </div>
          <div className="col-span-12  mt-auto bg-black py-[10px] pl-[10px] text-[12px] font-medium leading-[14px]  text-[#999999] md:col-span-3 md:col-start-10 md:mt-0 md:bg-white md:py-0 md:text-xxs md:leading-normal md:text-black">
            Copyright © {year} Benchmark Homes | All Rights Reserved.{' '}
            <br className="hidden lg:block" />
            View <span className="underline">Privacy Policy</span> &{' '}
            <span className="underline">Email Disclaimer.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
