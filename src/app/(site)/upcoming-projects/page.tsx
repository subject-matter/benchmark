import UpcomingProjectsList from "@/app/(site)/components/upcoming_project_list";
import { getAllUpcomingProjects } from "../../../../sanity/sanity-utils";
import LenisScroll from "../components/lenis-provider";


export default async function UpcomingProjects() {
	const upcomingProjects = await getAllUpcomingProjects();

	return (
		<>
			<LenisScroll>
				<div>
					<div className="grid grid-cols-12 gap-x-5 text-xs px-[10px] md:px-5 ">
						<h1 className="font-medium text-sm-3xl md:text-3xl my-24 md:mt-0 md:mb-large ">
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
