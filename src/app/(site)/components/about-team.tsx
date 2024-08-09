import React from "react";

import Image from "next/image";

function AboutTeam({ info, team }: any) {
  return (
    <div className="p-[10px] py-32 text-xxs lg:p-5 lg:pb-[228px] lg:text-xs">
      <div className="mb-[80px] lg:mb-24">
        <div className=" mb-3  font-medium lg:mb-7 ">Our Team</div>
        <div className=" mb-[48px] whitespace-pre-line">
          {info.team_description}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-5 gap-y-6">
        {team.map((teamMember: any, index: number) => (
          <div
            className={`col-span-6 lg:col-span-4  ${
              index % 2 !== 0 ? "lg:col-start-9" : "lg:col-start-5"
            }`}
            key={index}
          >
            <div className="pb-full relative w-full ">
              <Image
                src={teamMember.image}
                alt="Richard and Sam"
                width={2000}
                height={1000}
                priority={true}
              />
            </div>
            <p className="mt-2">{teamMember.name}</p>
            <p className="">{teamMember.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;
