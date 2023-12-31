import ProjectImages from "@/app/(site)/components/project_images";
import ProjectInfo from "@/app/(site)/components/project_info";
import AdjacentProjects from "@/app/(site)/components/adjacent_projects";
import {
	getAllProjects,
	getProjects,
} from "../../../../../sanity/sanity-utils";
import LenisScroll from "../../components/lenis-provider";

export default async function Project({ params }: { params: { id: string } }) {
	const projects = await getAllProjects();
	const selectedProjectsSections = await getProjects();

	return (
		<>
			<LenisScroll>
				<div className="grid grid-cols-12 gap-x-5 text-xs px-[10px] md:px-5 w-full pt-[10px] bg-white mb-5">
					<ProjectInfo projects={projects.props.projects} id={params.id} />
					<ProjectImages projects={projects.props.projects} id={params.id} />

					<AdjacentProjects projects={projects.props.projects} id={params.id} />
				</div>
			</LenisScroll>
		</>
	);
}
