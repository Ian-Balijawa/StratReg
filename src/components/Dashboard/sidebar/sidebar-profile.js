import "./styles/sidebar-profile.css";
const SidebarProfile = () => {
	return (
		<div className='sidebar__profile'>
			<img src='/images/admin.jpg' alt='' />
			<div className='sidebar__profile__text'>
				<p>Welcome Ian</p>
				<p>Super Admin</p>
			</div>
		</div>
	);
};

export default SidebarProfile;
