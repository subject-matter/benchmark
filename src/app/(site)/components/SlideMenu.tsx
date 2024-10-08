import { X } from "lucide-react";
import React from "react";
import SocialIcons from "./social-icons";
import { getSiteInfo } from "../../../../sanity/sanity-utils";
import Script from "next/script";

export default async function SlideMenu() {
  const siteInfo = await getSiteInfo();

  return (
    <>
      <Script strategy="afterInteractive" id="close-menu">
        {`
            function closeMenu() {
                  var menu = document.getElementById("menu");
                  var glass = document.getElementById("glass");
                  var body = document.body;
                  if (menu && glass) {
                      menu.classList.remove("open");
                      glass.style.opacity = "0";

                      body.classList.remove("overflow-y-hidden");

                      setTimeout(function() {
                          glass.style.visibility = "hidden";
                      }, 500);
                  }
              }

              var button = document.getElementById("closeMenuButton");
              if (button) {
                  button.addEventListener("click", closeMenu);
              }
          `}
      </Script>
      <section
        className="fixed left-0 top-0 z-20 grid h-[100svh] w-full translate-x-full transform grid-cols-2 transition duration-500 ease-in-out overflow-hidden"
        id="menu"
      >
        <button
          className="fixed right-[10px] top-2 z-10 flex h-[30px] items-center rounded-[5px] bg-white bg-opacity-20 px-[10px] text-xxs text-white backdrop-blur-lg transition duration-500 hover:bg-opacity-50 md:right-5 md:h-[35px]"
          id={"closeMenuButton"}
        >
          Close{" "}
          <div className="ml-12">
            <X size={15} />
          </div>
        </button>
        <div className="z-[3] hidden bg-transparent md:block"></div>
        <div className="col-span-2 flex flex-col bg-black md:col-span-1">
          <div className="menulink z-1 relative m-[10px] mt-24 flex h-fit  flex-col text-base text-white md:m-5 md:text-lg ">
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
            <div className="absolute bottom-1 right-0 flex gap-x-1 invert">
              <SocialIcons />
            </div>
          </div>
          <div className="mx-[10px] lg:mx-5 mt-auto flex flex-col justify-between space-y-5 text-xxs text-white md:text-xs lg:flex-row pb-10px lg:pb-5">
            <div className="mb-3 flex flex-col md:mb-0">
              <a
                href={`tel:${siteInfo[0].phone}`}
                className="duration-250 w-fit transition hover:opacity-50"
              >
                {siteInfo[0].phone}
              </a>
              <a
                href={`mailto:${siteInfo[0].email}`}
                className="duration-250 w-fit transition hover:opacity-50"
              >
                {siteInfo[0].email}
              </a>
            </div>
            <div className="sm:flex sm:justify-end">
              <div
                className="w-2/3"
                dangerouslySetInnerHTML={{
                  __html: `<p className="float-right">${siteInfo[0].address}</p>`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
