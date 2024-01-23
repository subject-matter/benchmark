

import Image from "next/image";
import { SelectedProject } from "../../../../types/SelectedProject";
import Link from "next/link";
import { getSelectedProjects } from "../../../../sanity/sanity-utils";
import LenisScroll from "../components/lenis-provider";

export default async function SelectedProjects() {
	const selectedProjects = await getSelectedProjects();


	return (
		<>
			<LenisScroll>
				<div>
					<h1 className="mx-[10px] font-medium text-sm-3xl md:text-3xl py-24 md:pt-3 md:pb-large ">
						Selected <br /> Projects
					</h1>
					<div className="col-span-12 selected-projects w-full">
						{selectedProjects.map((project: any, index: number) => (
							<div
								key={index}
								className="mx-[10px] md:mx-5 mb-12 "
							>
								<div className="grid grid-cols-12 gap-x-[10px] md:gap-x-5 text-xs-medium mx-auto w-full md:border-grey border-dashed md:border-t border-1 pb-[60px] md:pb-[200px]">
									<div
										className={`col-span-12 md:col-span-6 md:row-start-1 flex-col flex pb-[60px] md:pb-0 border-grey border-dashed border-y border-1 md:border-0 ${
											project.mainImageCol == "First"
												? "md:col-start-1"
												: project.mainImageCol == "Second"
												? "md:col-start-4"
												: "md:col-start-7 row-start-2 md:row-start-1"
										}`}
									>
										<Link
											href={`projects/${project.mainProjectSlug}`}
											className="mb-9 mt-2"
										>
											{project.mainProjectTitle}
										</Link>

										<Link
											href={`projects/${project.mainProjectSlug}`}
											className="selected-projects-image-container relative"
										>
											<Image
												className="selected-projects-image w-full object-cover"
												src={project.mainImage}
												alt={project.mainProjectTitle}
												width={1000}
												height={1000}
											/>
											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</Link>
									</div>
									<div
										className={`col-span-6 md:col-span-3  flex-col flex ${
											project.mainImageCol == "First"
												? "md:col-start-7 sm:row-start-2 md:row-start-1"
												: "md:col-start-1 md:row-start-1"
										}`}
									>
										<Link
											href={`projects/${project.imageOneSlug}`}
											className="mb-9 mt-2"
										>
											{project.imageOneTitle}
										</Link>

										<Link
											href={`projects/${project.imageOneSlug}`}
											className="selected-projects-image-container relative"
										>
											<Image
												className="selected-projects-image"
												src={project.imageOne}
												alt={project.imageOneTitle}
												width={1000}
												height={1000}
											/>

											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</Link>
									</div>
									<div
										className={`col-span-6 md:col-span-3 flex-col flex ${
											project.mainImageCol == "Third"
												? "md:col-start-4 md:row-start-1"
												: "md:col-start-10 sm:row-start-2 md:row-start-1"
										}`}
									>
										<Link
											href={`projects/${project.imageTwoSlug}`}
											className="mb-9 mt-2"
										>
											{project.imageTwoTitle}
										</Link>

										<Link
											href={`projects/${project.imageTwoSlug}`}
											className="selected-projects-image-container relative"
										>
											<Image
												className="selected-projects-image"
												src={project.imageTwo}
												alt={project.imageTwoTitle}
												width={1000}
												height={1000}
											/>

											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</LenisScroll>
		</>
	);
}
