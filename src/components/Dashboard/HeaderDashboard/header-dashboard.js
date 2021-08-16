import "./styles/header-dashboard.css";
import { useState } from "react";

const HeaderDashboard = () => {
	const [searchElement, setSearchElement] = useState("");

	const handleInput = e => {
		e.preventDefault();
		if (e.key === "Enter") {
			// perform a firebase/firestore call
		}
	};

	return (
		<div className='main__header'>
			<div className='logo__input'>
				<img src='/images/logo.png' alt='logo' />
				<input
					aria-label='search for item'
					type='text'
					value={searchElement}
					placeholder='Search'
					onChange={({ target }) => setSearchElement(target.value)}
					onKeyDown={handleInput}
				/>
			</div>
			<div className='header__profile'>
				<div className='profile__alert'>
					<div>
						<svg
							className='alert__icon'
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
						</svg>
					</div>
					<div>Set Alert</div>
				</div>
				<div className='profile__name'>
					<div>
						<img src='/images/admin.jpg' alt='profile_picture' />
					</div>
					<div>Balijawa Ian</div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-5 w-5'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fill-rule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clip-rule='evenodd'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default HeaderDashboard;
