import UpcomingProjectsList from "@/app/(site)/components/upcoming_project_list";
import { getAllUpcomingProjects } from "../../../../sanity/sanity-utils";
import LenisScroll from "../components/lenis-provider";

export default async function UpcomingProjects() {
  const upcomingProjects = await getAllUpcomingProjects();

  return (
    <>
      <LenisScroll>
        <div>
          <div className="grid grid-cols-12 gap-x-5 px-[10px] text-xs md:px-5 ">
            <h1 className="my-24 text-sm-3xl font-medium md:mb-large md:mt-0 lg:text-3xl ">
              Upcoming <br /> Projects
            </h1>
            <UpcomingProjectsList
              projects={upcomingProjects.props.upcomingProjects}
            />
          </div>
        </div>
      </LenisScroll>
    </>
  );
}
