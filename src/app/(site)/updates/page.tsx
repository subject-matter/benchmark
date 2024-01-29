import React from "react";
import LenisScroll from "../components/lenis-provider";
import {
	getSelectedProjects,
	getUpdates,
} from "../../../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";

export default async function Updates() {
	const updates = await getUpdates();
	return (
		<>
			<LenisScroll>
				<div className="mx-[10px] mb-large">
					<h1 className=" font-medium text-sm-3xl md:text-3xl py-24 md:pt-3 md:pb-large ">
						Updates
					</h1>

					<div className="col-span-12 selected-projects w-full">
						<div className="text-xxs feature-pill mx-[5px] md:m-[10px]">
							Latest Update
						</div>
						<div className=" md:mx-5 mb-12 ">
							<div className="grid grid-cols-12 gap-x-[10px] md:gap-x-5 text-xs-medium mx-auto w-full md:border-grey border-dashed md:border-t border-1 pb-[60px] md:pb-[200px]">
								{updates.map((update: any, index: number) => (
									<div
										key={index}
										className={`mt-[15px] mb-10 ${
											index == 0
												? "col-span-12 md:col-span-8 "
												: index == 1
												? "col-span-6 md:col-span-4"
												: "col-span-6 md:col-span-3 "
										} `}
									>
										<div className="mb-10">
											<Link href={`update/${update.slug}`}>{update.title}</Link>
										</div>

										<Link
											href={`update/${update.slug}`}
											className="selected-projects-image-container relative"
										>
											<Image
												className="selected-projects-image w-full object-cover"
												src={update.image}
												alt={update.title}
												width={1000}
												height={1000}
											/>
											<div className="selected-projects-image-blur absolute w-full h-full top-0 left-0"></div>
										</Link>
										<Link
											href={`update/${update.slug}`}
											className="mt-5 w-fit bg-[#F5F5F5] rounded-[5px] flex text-xxs p-[10px] cursor-pointer hover:opacity-50 col-span-6 text-black"
										>
											Read more
											<div className="ml-[50px] flex items-center">
												<svg
													width="7"
													height="12"
													viewBox="0 0 7 12"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M6.3131 5.65685L0.65625 0L0.656372 11.3138L6.3131 5.65685Z"
														fill="black"
													/>
												</svg>
											</div>
										</Link>
										{index % 4 === 3 && (
											<div className="col-span-12 md:border-grey border-dashed md:border-t border-1 pb-[60px]"></div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</LenisScroll>
		</>
	);
}

