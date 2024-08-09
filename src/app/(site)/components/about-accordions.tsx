import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { getAccordions } from "../../../../sanity/sanity-utils";

function AboutAccordions() {
  const [accordions, setAccordions] = useState([]);
  useEffect(() => {
    const fetchAccordions = async () => {
      try {
        const fetchedAccordions = await getAccordions();
        setAccordions(fetchedAccordions);
      } catch (error) {
        throw error;
      }
    };
    fetchAccordions();
  }, []);

  return (
    <div>
      <Accordion type="single" collapsible>
        {accordions.map((accordion: any, index: number) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{accordion.title}</AccordionTrigger>
            <AccordionContent>{accordion.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AboutAccordions;
