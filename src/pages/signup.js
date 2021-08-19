import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer, FooterContainer } from "../containers";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

const Signup = () => {
	const { firebase } = useContext(FirebaseContext);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [repassword, setRepassword] = useState("");
	const [course, setCourse] = useState("");
	const [institution, setInstitution] = useState("");
	const [error, setError] = useState("");

	const isInValid =
		firstName === "" ||
		password === "" ||
		emailAddress === "" ||
		repassword !== password ||
		institution === "" ||
		course === "" ||
		lastName === "";

	const handleSignup = async e => {
		e.preventDefault();

		try {
			const result = await firebase
				.auth()
				.createUserWithEmailAndPassword(emailAddress, password);
			result.user.updateProfile({
				displayName: firstName || "user",
				photoURL: Math.floor(Math.random() * 5) + 1,
			});

			firebase
				.firestore()
				.collection("users")
				.add({
					first_name: firstName,
					last_name: lastName,
					email: emailAddress,
					institution,
					course,
				})
				.then(ref => {
					console.log(`added a user with id ${ref.id}`);
				});
		} catch (error) {
			setFirstName("");
			setLastName("");
			setPassword("");
			setError(error.message);
		}
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignup} method='POST'>
						<Form.Input
							placeholder='First Name'
							type='text'
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							placeholder='Last Name'
							type='text'
							value={lastName}
							onChange={({ target }) => setLastName(target.value)}
						/>
						<Form.Input
							placeholder='Email Address'
							type='email'
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							placeholder='password'
							type='password'
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Input
							type='password'
							value={repassword}
							placeholder='confirm password'
							autocomplete='off'
							onChange={({ target }) => setRepassword(target.value)}
						/>
						<Form.Input
							type='text'
							value={course}
							placeholder='Course'
							autocomplete='off'
							onChange={({ target }) => setCourse(target.value)}
						/>
						<Form.Input
							type='text'
							value={institution}
							placeholder='Institution'
							autocomplete='off'
							onChange={({ target }) => setInstitution(target.value)}
						/>

						<Form.Submit disabled={isInValid} type='submit'>
							Sign up
						</Form.Submit>
						<Form.Text>
							Already a User?
							<Form.Link to={ROUTES.SIGNIN}> Sign In Now</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by google reCAPTCHA to ensure you're
							not a bot. Learn more.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default Signup;
