// @ts-nocheck


import { getShowhome } from "../../../../../sanity/sanity-utils";
import LenisScroll from "../../components/lenis-provider";
import Image from "next/image";
import Map from "../../components/ui/map";
import AdjacentShowhomes from "../../components/adjacent-showhomes";

type Props = {
	params: { project: string };
};

export default async function Showhome({ params }: Props) {
	const slug = params.project;
	const showhome = await getShowhome(slug);

	return (
		<>
			<LenisScroll>
				<div className="grid grid-cols-12 gap-x-5 text-xs px-[10px] md:px-5 w-full pt-[10px] bg-white mb-5 gap-y-20 md:gap-y-[110px] ">
					<div className="col-span-12 grid grid-cols-12 gap-x-5 bg-white">
						<div className="absolute mt-[10px]">{showhome.title}</div>
						<div className="md:col-start-5 col-span-7 md:col-span-2 mt-[10px] font-medium text-xxs md:text-xs mb-5 md:mb-0">
							Points of interest:
						</div>
						<div className=" col-span-12 md:col-span-4 mb-[50px] md:mb-[100px] grid grid-cols-6 gap-[10px] md:block">
							<div className="md:flex gap-x-[10px] gap-y-[10px]  mb-5 col-span-2">
								{showhome.features.map((feature: string, index: number) => (
									<div
										key={index}
										className="feature-pill md:col-span-2 mb-[7px]"
									>
										{feature}
									</div>
								))}
							</div>
							<div className="flex flex-col text-xxs md:text-xs col-start-3 col-span-4">
								<ul className="list-outside md:list-inside">
									{showhome.interest_points.map(
										(point: string, index: number) => (
											<li className="list-disc" key={index}>
												{point}
											</li>
										)
									)}
								</ul>
							</div>
						</div>
						<div className="row-start-1 md:row-start-3 col-span-12 text-sm-lg md:text-lg mb-20  mt-20 md:mt-0">
							<div>{showhome.description}</div>
						</div>
					</div>

					<div className="col-span-12 flex flex-col-reverse md:flex-row gap-x-5 mb-[110px] md:mb-[500px]">
						<div className="md:w-1/2 md:flex gap-x-5 items-center">
							<div className="w-full md:w-1/2  grid-cols-3 gap-x-5">
								<div className="col-span-3 mb-5 text-xxs font-medium md:text-xs-medium">
									Open Hours
								</div>
								{showhome.showhome_times.map(
									(occurrence: DateTimeOccurrence, index: number) => (
										<div
											key={index}
											className="col-span-3 grid grid-cols-3 gap-x-5 text-xxs md:text-xs"
										>
											<div className="col-span-1">{occurrence.day_range}</div>
											<div className="col-span-2 col-start-2">
												{occurrence.time_range}
											</div>
										</div>
									)
								)}
							</div>
							<div className="w-full md:w-1/2 flex flex-col text-xxs md:text-xs-medium mt-5 md:mt-0">
								Address:
								<div className="mt-5 text-xxs md:text-xs">
									{showhome.address}
								</div>
							</div>
						</div>
						<Map lat={showhome.lat} lng={showhome.lng} />
					</div>

					{showhome.pageBuilder &&
						showhome.pageBuilder.map((item: any, itemIndex: number) => (
							<div className="col-span-12" key={itemIndex}>
								{item._type === "fullLandscape" && item.image && (
									<Image
										src={item.image}
										alt={item.alt}
										width={600}
										height={600}
										className="w-full"
									/>
								)}

								{item._type === "bigPortrait" &&
									item.bigImage &&
									item.smallImage && (
										<div className={`grid grid-cols-4 gap-[10px] md:gap-5`}>
											<Image
												className={`col-span-2 w-full ${
													item.layout == "left" ? "" : "col-start-3"
												}`}
												src={item.bigImage}
												alt={item.bigImageAlt}
												width={600}
												height={600}
											/>
											<Image
												className={`col-span-2 md:col-span-1${
													item.layout == "left"
														? "col-start-4"
														: "col-start-1 row-start-1"
												}`}
												src={item.smallImage}
												alt={item.smallImageAlt}
												width={600}
												height={600}
											/>
										</div>
									)}

								{item._type === "mediumLandscape" &&
									item.landscapeImage &&
									item.smallImage && (
										<div className="grid grid-cols-4 gap-[10px] md:gap-5">
											<Image
												className={`w-full col-span-2 ${
													item.layout == "left"
														? "col-start-1"
														: "col-start-3 row-start-1"
												}`}
												src={item.landscapeImage}
												alt={item.landscapeImageAlt}
												width={600}
												height={600}
											/>
											<Image
												className={`w-full col-span-2 md:col-span-1 ${
													item.layout == "left"
														? "col-start-4"
														: "col-start-1 row-start-1"
												}`}
												src={item.smallImage}
												alt={item.smallImageAlt}
												width={600}
												height={600}
											/>
										</div>
									)}

								{item._type === "individualImage" && item.image && (
									<div className="grid grid-cols-4 gap-[10px] md:gap-5">
										<Image
											className={`w-full col-span-2 md:col-span-1 ${
												item.layout == "left"
													? "col-start-1 md:col-start-2"
													: "col-start-3"
											}`}
											src={item.image}
											alt={item.alt}
											width={600}
											height={600}
										/>
									</div>
								)}

								{item._type === "smallPortrait" &&
									item.smallImage &&
									item.smallImage2 &&
									item.landscapeImage && (
										<div className="grid grid-cols-4 gap-[10px] md:gap-5">
											<Image
												className={`w-full col-span-2 md:col-span-1 ${
													item.layout == "left"
														? "col-start-1"
														: "col-start-3 row-start-1"
												}`}
												src={item.smallImage1}
												alt={item.smallImage1Alt}
												width={600}
												height={600}
											/>
											<Image
												className={`w-full col-span-2 md:col-span-1 ${
													item.layout == "left" ? "" : "col-start-4 row-start-1"
												}`}
												src={item.smallImage2}
												alt={item.smallImage2Alt}
												width={600}
												height={600}
											/>
											<Image
												className={`${
													item.layout == "left"
														? "col-start-4"
														: "col-start-1 row-start-1"
												}`}
												src={item.landscapeImage}
												alt={item.landscapeImageAlt}
												width={600}
												height={600}
											/>
										</div>
									)}
							</div>
						))}
					<AdjacentShowhomes />
				</div>
			</LenisScroll>
		</>
	);
}