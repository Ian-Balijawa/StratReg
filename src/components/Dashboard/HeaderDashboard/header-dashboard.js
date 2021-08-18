import { Link } from "react-router-dom";
import { HOME } from "../../../constants/routes";
import "./styles/header-dashboard.css";

const HeaderDashboard = () => {
	return (
		<div className='main__header'>
			<div className='logo__input'>
				<Link to={HOME}>
					<img src='/images/logo.png' alt='logo' />
				</Link>
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
				</div>
			</div>
		</div>
	);
};

export default HeaderDashboard;
