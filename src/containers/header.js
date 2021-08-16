import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={ROUTES.HOME}>stratcom</Header.Logo>
				<Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	);
}
