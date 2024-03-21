import React from "react";
import Image from "next/image";

import Link from "next/link";

function Project(props: any) {
	return (
    <div
      id="projectImage"
      className=" relative col-span-12 flex w-full flex-col px-[10px] md:h-[85vh] md:px-5"
    >
      <Link href={props.url} className="">
        <Image
          className="scroll-section w-full object-cover md:h-[85vh]"
          src={props.image}
          alt="House"
          height={8000}
          width={1000}
          priority
        />
      </Link>
    </div>
  );
}

export default Project;
