import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Input = styled.input`
	background: transparent;
	color: #000000;
	border: 1px solid #e7e7e7;
	font-size: 1.5rem;
	outline: 0;
	height: 50px;
	line-height: 50px;
	padding: 5px 20px;
	margin-bottom: 20px;

	&:last-of-type {
		margin-bottom: 30px;
	}
`;

export const Group = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 600px;
	box-sizing: border-box;
	border: 1px solid #e2e2e2;
	width: 100%;
	margin: auto;
	max-width: 450px;
	padding: 60px 68px 40px;
	margin-bottom: 100px;
`;

export const Base = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 450px;
	width: 100%;
`;

export const Submit = styled.button`
	font-weight: 500;
	background: transparent;
	transition: all 0.3s ease;
	position: relative;
	box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
		7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
	outline: none;
	&:after {
		position: absolute;
		content: "";
		width: 0;
		height: 100%;
		top: 0;
		left: 0;
		direction: rtl;
		z-index: -1;
		box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
			7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
		transition: all 0.3s ease;
	}
	&:hover {
		color: #000;
	}
	&:hover:after {
		left: auto;
		right: 0;
		width: 100%;
	}
	&:active {
		top: 2px;
	}

	color: white;
	border: 0;
	background: rgb(37, 255, 200);
	box-shadow: 0 0 1rem rgb(37, 255, 200);
	font-size: 16px;
	font-weight: bold;
	margin: 24px 0 12px;
	cursor: pointer;
	padding: 16px;
	outline: 0;

	&:disabled {
		opacity: 0.3;
	}
`;

export const Text = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #000000;
`;

export const TextSmall = styled.p`
	margin-top: 10px;
	font-size: 13px;
	line-height: normal;
	color: #2e2c2c;
`;

export const Link = styled(ReactRouterLink)`
	color: #5a5a5a;
	text-decoration: none;

	&:hover {
		text-transform: underline;
	}
`;

export const Title = styled.h1`
	color: #000000;
	text-align: center;
	font-size: 32px;
	font-weight: bold;
	margin-bottom: 28px;
`;

export const Error = styled.div`
	background: #ff7676;
	font-size: 14px;
	margin: 0 0 16px;
	color: white;
	padding: 15px 20px;
	border-radius: 4px;
`;

export const Check = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export const Span = styled.span`
	text-decoration: none;
	box-sizing: border-box;
	outline: none;
	list-style: none;
	border: none;
	width: 100%;
	height: 5rem;
	color: var(--var-color-primary_light);
`;
