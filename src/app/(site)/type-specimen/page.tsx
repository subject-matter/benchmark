"use client";

import Image from "next/image";

import Layout from "@/app/(site)/components/layout";

import { fade } from "@/app/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <m.article variants={fade}>
            <div className="flex flex-col space-y-12 mx-3">
              <p className="text-xxs">
                Moderat Regular 14/17 -1% - xxs
                <br />
                Non tempus mattis nibh lacus arcu dui ligula mi. Dapibus ad
                interdum nam id nec natoque curae cras purus. Commodo erat
                auctor phasellus leo sodales sociosqu. Letius consequat dis non
                ridiculus himenaeos.
              </p>
              <p className="text-xs">
                Moderat Regular 18/21 -1% - xs
                <br />
                Non tempus mattis nibh lacus arcu dui ligula mi. Dapibus ad
                interdum nam id nec natoque curae cras purus. Commodo erat
                auctor phasellus leo sodales sociosqu. Letius consequat dis non
                ridiculus himenaeos.
              </p>
              <p className="font-medium text-xs-medium">
                Moderat Medium 18/21 -1.2% - text-xs-medium
                <br />A curae viverra platea morbi etiam vivamus amet malesuada.
                Tempor finibus volutpat imperdiet tristique donec purus aenean
                ipsum mauris himenaeos. Sem eu malesuada egestas elit faucibus
                lobortis integer eros urna iaculis libero. Parturient auctor
                vivamus netus curae dolor potenti volutpat sed etiam vel. Class
                vivamus mi eleifend semper viverra a porttitor lorem suscipit
                torquent fusce. Sapien id lobortis lorem aliquet sit lacus
                fusce. Facilisis habitant taciti nulla consequat molestie
                facilisi morbi. Lacinia fringilla imperdiet eros himenaeos
                nostra scelerisque.
              </p>
              <p className="font-medium text-sm">
                Moderat Medium 22/25 -1.2% - text-sm
                <br />
                Non tempus mattis nibh lacus arcu dui ligula mi. Dapibus ad
                interdum nam id nec natoque curae cras purus. Commodo erat
                auctor phasellus leo sodales sociosqu. Letius consequat dis non
                ridiculus himenaeos.
              </p>
              <p className="font-medium text-base">
                Moderat Medium 27/30 -1.2% - text-base <br />
                Placerat in dui cras elit pretium quam morbi ex. Integer netus
                interdum ac primis auctor vulputate inceptos. Pede maecenas sed
                purus platea consectetuer turpis in convallis. Tincidunt euismod
                nam potenti platea morbi orci iaculis dictum quis litora mattis.
              </p>
              <p className="font-medium text-sm-lg md:text-lg">
                Moderat Medium 40/45 -1.2% - text-sm-lg text-lg
              </p>
              <p className="font-medium text-sm-xl md:text-xl">
                Moderat Medium 120/110 -3% - text-sm-xl text-xl
              </p>
              <p className="font-medium text-sm-2xl md:text-2xl">
                Medium 200/180 -4% - text-sm-2xl text-2xl
              </p>
              <p className="font-medium text-sm-3xl md:text-3xl">
                Medium 270/240 -4% text-sm-3xl text-3xl
              </p>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  );
}
