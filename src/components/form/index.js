import React from "react";
import {
	Container,
	Error,
	Title,
	Text,
	TextSmall,
	Input,
	Link,
	Check,
	Base,
	Submit,
	Group,
	Span,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Form.Group = function FormGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

Form.Span = function FormSpan({ children, ...restProps }) {
	return <Span {...restProps}>{children}</Span>;
};

Form.Error = function FormError({ children, ...restProps }) {
	return <Error {...restProps}>{children}</Error>;
};

Form.Container = function FormContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

Form.Link = function FormLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
	return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Base = function FormBase({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>;
};

Form.Check = function FormCheck({ children, ...restProps }) {
	return <Check {...restProps}>{children}</Check>;
};
