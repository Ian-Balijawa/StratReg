import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	height: 64px;
	padding: 18px 0;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`})
		top left / cover no-repeat;

	@media (max-width: 1100px) {
		${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background:none;`}
	}
`;

export const Logo = styled.div`
	height: 32px;
	width: 108px;
	margin-right: 40px;
	font-size: 26px;
	color: black;
	text-transform: uppercase;

	&:hover {
		text-decoration: underline;
	}
	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
	}
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
`;

export const ButtonLink = styled(ReactRouterLink)`
	font-weight: 500;
	background: transparent;
	transition: all 0.3s ease;
	position: relative;
	box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
		7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
	outline: none;
	border: none;
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
	background-color: rgb(92, 211, 181);
	height: fit-content;
	color: white;
	font-size: 15px;
	text-align: center;
	display: block;
	width: 84px;
	border: 0;
	border-radius: 2px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;
	box-sizing: border-box;

	&:hover {
		background-color: rgb(37, 255, 200);
	}
`;

export const Link = styled.p`
	color: white;
	text-decoration: none;
	margin-right: 30px;
	font-weight: ${({ active }) => (active ? "700" : "normal")};
	cursor: pointer;

	&:hover {
		font-weight: bold;
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	position: relative;

	button {
		cursor: pointer;
	}
`;

export const Text = styled.p`
	color: white;
	font-size: 22px;
	line-height: normal;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	margin: 0;
`;
