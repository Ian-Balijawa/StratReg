import SidebarNav from "./sidebar-nav";
import SidebarProfile from "./sidebar-profile";
import "./styles/sidebar.css";

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<SidebarProfile />
			<SidebarNav />
		</div>
	);
};

export default Sidebar;
