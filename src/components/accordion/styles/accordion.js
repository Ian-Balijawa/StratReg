import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	border-bottom: 2px solid #ffeeee;
`;
export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	padding: 70px 45px;
	margin: auto;
	max-width: 815px;

	@media (max-width: 500px) {
		width: 100vw;
	}
`;

export const Item = styled.div`
	color: white;
	margin-bottom: 10px;
	max-width: 700px;
	width: 100%;
	margin-left: auto;

	@media (max-width: 1000px) {
		margin-left: auto;
	}
	&:first-of-type {
		margin-top: 3em;
	}
`;
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.8em;
	color: #000000;
	font-size: 18px;
	text-align: center;
	cursor: pointer;
	font-weight: normal;
	background: rgb(144, 253, 226);
	user-select: none;
	align-items: center;

	@media (max-width: 426px) {
		width: auto;
		margin: -0.3rem -3rem;
	}
	&:hover {
		background: rgb(37, 255, 200);
	}
	img {
		filter: brightness(0) invert(1);
		width: 24px;

		@media (max-width: 600px) {
			width: 16px;
		}
	}
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-top: 0;
	margin-left: 5rem;
	margin-bottom: 8px;
	color: #000000;
	text-align: center;

	@media (max-width: 1000px) {
		font-size: 35px;
	}
	@media (max-width: 500px) {
		margin-left: 0;
	}
	@media (max-width: 900px) {
		margin-left: 2rem;
	}
`;

export const Body = styled.p`
	max-height: 1200px;
	transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	background: rgb(37, 255, 200);
	padding: 2rem;
	color: #000000;
	margin: 0.3rem 0;
	white-space: pre-wrap;
	user-select: none;
	@media (max-width: 426px) {
		width: auto;
		margin: -0.3rem -3rem;
	}
	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;
