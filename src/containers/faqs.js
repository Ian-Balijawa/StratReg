import React from "react";
import faqsData from "../fixtures/faqs.json";
import Accordion from "../components/accordion";

export default function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title> Frequenctly Asked Questions</Accordion.Title>
			{faqsData.map(item => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
