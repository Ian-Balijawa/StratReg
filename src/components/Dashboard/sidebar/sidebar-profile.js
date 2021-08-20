import { useContext } from "react";
import { FirebaseContext } from "../../../context/firebase";
import "./styles/sidebar-profile.css";

const SidebarProfile = () => {
	const { firebase } = useContext(FirebaseContext);

	const user = firebase.auth().currentUser || {};

	return (
		<div className='sidebar__profile'>
			<img src={`/images/avatars/${user.photoURL}.png`} alt='profile_picture' />
			<div className='sidebar__profile__text'>
				<p>Welcome {user.displayName || "Intern"}</p>
				{/* <p>{}</p> */}
			</div>
		</div>
	);
};

export default SidebarProfile;
