import { useState } from "react";
import "./form.css";

export const Form = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [institution, setInstitution] = useState("");
	const [course, setCourse] = useState("");

	const handleSubmit = ({ firstName, lastName, email, phone, institution, course }) => {
		const data = { firstName, lastName, email, phone, institution, course };
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<div className='container'>
			<div className='header'>
				<img src='/images/logo.png' alt='stratcom logo' />
				<h1>stratcom</h1>
				<p>Join Our Intership Community</p>
			</div>

			<div className='form__container'>
				<form onSubmit={handleSubmit}>
					<div className='form__input__name'>
						<input
							type='text'
							placeholder='FirstName'
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<input
							type='text'
							placeholder='LastName'
							value={lastName}
							onChange={({ target }) => setLastName(target.value)}
						/>
					</div>
					<input
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={({ target }) => setEmail(target.value)}
					/>
					<input
						name='phone'
						type='text'
						placeholder='Phone/WhatsApp'
						value={phone}
						onChange={({ target }) => setPhone(target.value)}
					/>
					<input
						name='institution'
						type='text'
						placeholder='Institution'
						value={institution}
						onChange={({ target }) => setInstitution(target.value)}
					/>
					<input
						name='course'
						type='text'
						placeholder='course'
						value={course}
						onChange={({ target }) => setCourse(target.value)}
					/>

					<div className='btn'>
						<button
							type='submit'
							onClick={() =>
								handleSubmit({
									firstName,
									lastName,
									email,
									phone,
									institution,
									course,
								})
							}>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Form;
