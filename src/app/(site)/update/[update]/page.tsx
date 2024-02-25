import Image from "next/image";
import { getUpdate } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import AdjacentUpdates from "../../components/adjacent-updates";

type Props = {
	params: { update: string; body: any };
};

export default async function Update({ params }: Props) {
	const slug = params.update;
	const update = await getUpdate(slug);

	const components = {
		block: {
			p: ({ children }: any) => <p className="mb-5">{children}</p>,
		},
	};

	return (
		<section className={`col-span-12 overflow-x-clip pb-medium`}>
			<div className="grid grid-cols-2 min-h-screen relative">
				<div className="bg-black md:sticky top-0 h-screen overflow-hidden col-span-2 md:col-span-1 hidden md:block">
					<Image
						className="object-cover h-screen"
						src={update.image}
						alt={update.title}
						width={2000}
						height={2000}
						priority
					/>
				</div>

				<div className="col-span-2 md:col-span-1">
					<div className="relative md:min-h-screen mx-[10px] md:mx-5">
						<h4 className="text-xs-medium mt-5">Updates</h4>
						<h1 className="text-sm-lg md:text-lg md:w-2/3 mt-20 md:mt-[300px] mb-20 md:mb-large">
							{update.title}
						</h1>
						<Image
							className="md:hidden mb-20"
							src={update.image}
							alt={update.title}
							width={2000}
							height={2000}
							priority
						/>
						<h3 className="mb-7">{update.subtitle}</h3>
						<PortableText value={update.body} components={components} />
					</div>
				</div>
				{/* <AdjacentUpdates /> */}
			</div>
		</section>
	);
}
