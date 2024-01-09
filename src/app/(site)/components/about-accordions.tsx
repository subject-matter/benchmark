import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import { getAccordions } from "../../../../sanity/sanity-utils";

function AboutAccordions() {
	// const accordions = await getAccordions();

	return (
		<div>
			<Accordion type="single" collapsible>
				{/* {accordions.map((accordion: any, index: number) => (
					<AccordionItem key={index} value={`item-{index + 1}`}>
						<AccordionTrigger>{accordion.title}</AccordionTrigger>
						<AccordionContent>{accordion.description}</AccordionContent>
					</AccordionItem>
				))} */}

				<AccordionItem value="item-1">
					<AccordionTrigger>Experts in Design & Build</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>Experience & Diverse Team</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>Comprehensive process</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-4">
					<AccordionTrigger>Showhomes</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-5">
					<AccordionTrigger>Virtual Reality</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-6">
					<AccordionTrigger>Registered Master Builder</AccordionTrigger>
					<AccordionContent>
						Lorem ipsum dolor sit amet finibus. Nec mus nisl mi diam vivamus si.
						Nisi egestas per orci vel id adipiscing dictum tempus dolor
						sollicitudin dui.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default AboutAccordions;
