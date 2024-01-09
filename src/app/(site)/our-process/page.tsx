import React from "react";
import {
	getAllProcesses,
	getAllWalkthroughs,
} from "../../../../sanity/sanity-utils";
import ProcessesList from "@/app/(site)/components/processes_list";

import LenisScroll from "../components/lenis-provider";

export default async function OurProcess() {
	const processes = await getAllProcesses();
	const walkthroughs = await getAllWalkthroughs();

	return (
		<>
			<LenisScroll>
				<section className="bg-white">
					<div id="processes-container">
						<ProcessesList
							processes={processes.props.processes}
							walkthroughs={walkthroughs}
						/>
					</div>
				</section>
			</LenisScroll>
		</>
	);
}
