import Sidebar from "../Dashboard/sidebar/sidebar";
import HeaderDashboard from "../Dashboard/HeaderDashboard/header-dashboard";
import PaginationHeader from "../Dashboard/pagination-header/pagination-header";

const Intern = () => {
	return (
		<div className='container'>
			<Sidebar />
			<div className='main'>
				<HeaderDashboard />
				<div className='main__card__container'>
					<div className='pagination__header'>
						<PaginationHeader />
					</div>

					<div className='main__table'></div>
				</div>
			</div>
			<div className='main__manage__intern__table'></div>
		</div>
	);
};

export default Intern;
