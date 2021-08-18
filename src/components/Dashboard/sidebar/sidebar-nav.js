import { Link } from "react-router-dom";
import { PROJECTS, INTERNS, PROFILE } from "../../../constants/routes";
import "./styles/sidebar-nav.css";

const SidebarNav = () => {
	return (
		<div className='sidebar__nav'>
			<ul>
				<li>
					<Link to={PROJECTS}>
						<div className='list__item'>
							<div className='svg'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fill-rule='evenodd'
										d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z'
										clip-rule='evenodd'
									/>
								</svg>
							</div>
							<div>Projects</div>{" "}
						</div>
					</Link>
				</li>
				<li>
					<Link to={INTERNS}>
						<div className='list__item'>
							<div className='svg'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
								</svg>
							</div>
							<div>View Interns</div>{" "}
						</div>
					</Link>
				</li>

				<li>
					<Link to={PROFILE}>
						<div className='list__item'>
							<div className='svg'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fill-rule='evenodd'
										d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
										clip-rule='evenodd'
									/>
								</svg>
							</div>
							<div>Profile</div>{" "}
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SidebarNav;
