import Sidebar from "../Dashboard/sidebar/sidebar";
import HeaderDashboard from "../Dashboard/HeaderDashboard/header-dashboard";
import PaginationHeader from "../Dashboard/pagination-header/pagination-header";
import Table from "./table/table";
import "./index.css";
import Card from "./../Dashboard/card/card";

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

					<div className='card__intern__preview'>
						<Card />
						<Card />
						<Card />
						<Card />
					</div>

					<div className='main__intern__table'>
						<Table />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intern;
