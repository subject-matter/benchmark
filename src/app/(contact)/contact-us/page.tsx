// @ts-nocheck

'use client';

import SocialIcons from '@/app/(site)/components/social-icons';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LenisScroll from '@/app/(site)/components/lenis-provider';
import ContactForm from '@/app/(site)/components/contact-form';
import { getContact } from '../../../../sanity/sanity-utils';

function Contact() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const fetchedInfo = await getContact();
        setInfo(fetchedInfo[0]);
      } catch (error) {
        throw error;
      }
    };

    fetchInfo();
  }, []);

  return (
    <>
      <LenisScroll>
        <section className="bg-white md:h-screen">
          <div>
            <div className="grid md:grid-cols-2">
              <div className="flex h-screen flex-col justify-between p-[10px] md:p-5">
                <div className="flex items-start justify-between">
                  <h1 className="mt-[68px] text-sm-xl md:mt-0 md:text-xl">
                    Contact
                  </h1>
                  <div className="absolute left-[10px] top-5 space-x-5 md:relative md:flex ">
                    <SocialIcons />
                  </div>
                </div>

                <ContactForm />
                <div className="grid grid-cols-6 text-xxs md:grid-cols-2 md:text-xs-medium">
                  <span className="col-span-4 col-start-3 md:col-start-1">
                    <p>
                      <span className="font-medium">
                        Office/Milns Park Showhome
                      </span>
                      <br />
                      Mon–Fri: 9am–5pm
                      <br />
                      <br />
                    </p>
                  </span>

                  <span className="col-span-6 mb-4 md:col-span-1 md:col-start-1 md:mb-0">
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
                    <br />
                  </span>
                  <span className="col-span-4 col-start-3 md:col-span-1 md:col-start-2">
                    <p>
                      {' '}
                      12 Whitburn Ave, Milns Park,
                      <br /> Halswell, Christchurch, New Zealand
                      <br />
                    </p>
                  </span>
                </div>
              </div>

              <div className="max-h-screen">
                <Image
                  className="h-full w-full object-cover"
                  src={info.image}
                  alt=""
                  width={1000}
                  height={900}
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
