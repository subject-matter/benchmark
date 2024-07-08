// @ts-nocheck

"use client";

import SocialIcons from "@/app/(site)/components/social-icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LenisScroll from "@/app/(site)/components/lenis-provider";
import ContactForm from "@/app/(site)/components/contact-form";
import { getContact, getSiteInfo } from "../../../../sanity/sanity-utils";

function Contact() {
  const [info, setInfo] = useState([]);
  const [siteInfo, setSiteInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const fetchedInfo = await getContact();
        setInfo(fetchedInfo[0]);
      } catch (error) {
        throw error;
      }
    };

    const fetchSiteInfo = async () => {
      try {
        const fetchedSiteInfo = await getSiteInfo();
        setSiteInfo(fetchedSiteInfo[0]);
      } catch (error) {
        throw error;
      }
    };

    fetchInfo();
    fetchSiteInfo();
  }, []);

  return (
    <>
      <LenisScroll>
        <section className="bg-white lg:h-screen">
          <div>
            <div className="grid lg:grid-cols-2">
              <div className="flex h-screen flex-col justify-between p-[10px] lg:p-5">
                <div className="flex items-start justify-between">
                  <h1 className="mt-[68px] text-sm-xl lg:mt-0 lg:text-xl">
                    Contact
                  </h1>
                  <div className="absolute left-[10px] top-5 space-x-5 lg:relative lg:flex ">
                    <SocialIcons />
                  </div>
                </div>

                <ContactForm />
                <div className="grid grid-cols-6 text-xxs lg:grid-cols-2 lg:text-xs-medium">
                  

                  <span className="col-span-6 mb-4 lg:col-span-1 lg:col-start-1 lg:mb-0">
                    <a
                      href={`mailto:${siteInfo.email ? siteInfo.email : "info@benchmarkhomes.co.nz"}`}
                      className="duration-250 w-fit transition hover:opacity-50"
                    >
                      {siteInfo.email && siteInfo.email}
                    </a>
                    <br />
                  </span>
                  <div
                    className="col-span-6  lg:col-span-1 lg:col-start-2"
                    dangerouslySetInnerHTML={{
                      __html: `<p>${siteInfo.address}</p> <br/>
                      <p> Mon–Fri: 9am–5pm</p>`,
                    }}
                    
                  />
                </div>
              </div>

              <div className="max-h-screen">
                <Image
                  className="h-full w-full object-cover"
                  src={info.image}
                  alt=""
                  width={1000}
                  height={900}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </LenisScroll>
    </>
  );
}
export default Contact;
