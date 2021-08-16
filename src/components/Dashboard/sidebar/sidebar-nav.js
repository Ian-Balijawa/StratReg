import { Link } from "react-router-dom";
import { HOME, INTERNS } from "../../../constants/routes";
import "./styles/sidebar-nav.css";

const SidebarNav = () => {
	return (
		<div className='sidebar__nav'>
			<ul>
				<li>
					<Link to={HOME}>
						<div className='list__item'>
							<div className='svg'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
								</svg>
							</div>
							<div>Overview</div>{" "}
						</div>
					</Link>
				</li>
				<li>
					<Link to='#'>
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
					<Link to='#'>
						<div className='list__item'>
							<div className='svg'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fill-rule='evenodd'
										d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z'
										clip-rule='evenodd'
									/>
								</svg>
							</div>
							<div>Meeting</div>{" "}
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
					<Link to='#'>
						<div className='list__item'>
							<div className='svg'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path d='M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z' />
								</svg>
							</div>
							<div>Ticket</div>{" "}
						</div>
					</Link>
				</li>
				<li>
					<Link to='#'>
						<div className='list__item'>
							<div className='svg'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-5 w-5'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
									<path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
								</svg>
							</div>
							<div>Message</div>{" "}
						</div>{" "}
					</Link>
				</li>
				<li>
					<Link to='#'>
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
