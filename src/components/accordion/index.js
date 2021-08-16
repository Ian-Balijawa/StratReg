import React, { useContext, useState } from "react";
import { Container, Title, Item, Header, Body, Inner } from "./styles/accordion";
import { AccordionToggleContext } from "../../context/toggle";

export default function Accordion({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<AccordionToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</AccordionToggleContext.Provider>
	);
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(AccordionToggleContext);

	return (
		<Header onClick={() => setToggleShow(toggleShow => !toggleShow)} {...restProps}>
			{children}
			{toggleShow ? (
				<img src='/images/icons/close-slim.png' alt='open' />
			) : (
				<img src='/images/icons/add.png' alt='close' />
			)}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(AccordionToggleContext);

	return toggleShow ? <Body {...restProps}> {children} </Body> : null;
};
