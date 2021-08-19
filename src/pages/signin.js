import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer, FooterContainer } from "../containers";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

const Signin = () => {
	const { firebase } = useContext(FirebaseContext);
	const history = useHistory("");

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInValid = password === "" || emailAddress === "";

	const handleSignin = event => {
		event.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				history.push(ROUTES.DASHBOARD);
			})
			.catch(error => {
				setPassword("");
				setEmailAddress("");
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign in</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignin} method='POST'>
						<Form.Input
							type='email'
							value={emailAddress}
							placeholder='Email Address'
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type='password'
							value={password}
							placeholder='password'
							autocomplete='off'
							onChange={({ target }) => setPassword(target.value)}
						/>

						<Form.Submit disabled={isInValid} type='submit'>
							Sign-In
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						Don't have an account?
						<Form.Link to={ROUTES.SIGNUP}> Sign-up now</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by google reCAPTCHA to ensure you're not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default Signin;
