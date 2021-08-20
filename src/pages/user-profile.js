import { useContext } from "react";
import PaginationHeader from "./../components/Dashboard/pagination-header/pagination-header";
import HeaderDashboard from "./../components/Dashboard/HeaderDashboard/header-dashboard";
import Sidebar from "./../components/Dashboard/sidebar/sidebar";
import { FirebaseContext } from "../context/firebase";
import "./styles/profile.css";
import useUsers from "../hooks/use-users";

const UserProfile = () => {
	const users = useUsers();
	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};

	const activeUser = users.find(u => u.email === user.email);

	console.log(activeUser);

	return (
		<div className='container'>
			<Sidebar />
			<div className='main'>
				<HeaderDashboard />
				<div className='main__card__container'>
					<div className='pagination__header'>
						<PaginationHeader />
					</div>
					<div className='profile__container'>
						<div className='profile__card'>
							<img
								src={`/images/avatars/${user.photoURL}.png`}
								alt='profile pic'
							/>
							<p>
								{" "}
								{activeUser &&
									`${activeUser.first_name} ${activeUser.last_name}`}{" "}
							</p>
						</div>
						<div className='user__info'>
							<div>
								<p>First Name</p>
								<p>
									{activeUser &&
										`${activeUser.first_name.toUpperCase()}`}{" "}
								</p>
							</div>
							<div>
								<p>Last Name</p>
								<p>
									{activeUser &&
										`${activeUser.last_name.toUpperCase()}`}{" "}
								</p>
							</div>
							<div>
								<p>Phone</p>
								<p>{activeUser && `${activeUser.phone || "Unknown"}`} </p>
							</div>
							<div>
								<p>Email</p>
								<p>{activeUser && `${activeUser.email}`}</p>
							</div>

							<div>
								<p>Institution</p>
								<p>{activeUser && `${activeUser.institution}`}</p>
							</div>
							<div>
								<p>Course</p>
								<p>{activeUser && `${activeUser.first_name}`} </p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='main2'></div>
		</div>
	);
};

export default UserProfile;
