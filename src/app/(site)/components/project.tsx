import React from "react";
import Image from "next/image";

import Link from "next/link";

function Project(props: any) {
	return (
    <div
      id="projectImage"
      className=" relative col-span-12 flex w-full flex-col px-[10px]  md:px-5"
    >
      <Link href={props.url} className="">
        <Image
          className="scroll-section w-full object-cover aspect-video "
          src={props.image}
          alt="House"
          height={2000}
          width={1000}
          priority
        />
      </Link>
    </div>
  );
}

export default Project;
