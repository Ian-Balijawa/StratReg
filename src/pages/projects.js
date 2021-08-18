import PaginationHeader from "../components/Dashboard/pagination-header/pagination-header";
import Sidebar from "../components/Dashboard/sidebar/sidebar";
import HeaderDashboard from "./../components/Dashboard/HeaderDashboard/header-dashboard";
const Projects = () => {
	return (
		<div className='container'>
			<Sidebar />
			<div className='main'>
				<HeaderDashboard />
				<div className='main__card__container'>
					<div className='pagination__header'>
						<PaginationHeader />
					</div>
				</div>
			</div>
			<div className='main2'></div>
		</div>
	);
};

export default Projects;
