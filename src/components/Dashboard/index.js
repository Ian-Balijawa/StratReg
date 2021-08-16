import "./styles/dashboard.css";
import Sidebar from "./sidebar/sidebar";
import Card from "./card/card";
import PaginationHeader from "./pagination-header/pagination-header";
import HeaderDashboard from "./HeaderDashboard/header-dashboard";

export default function Dashboard() {
	return (
		<div className='container'>
			<Sidebar />
			<div className='main'>
				<HeaderDashboard />
				<div className='main__card__container'>
					<div className='pagination__header'>
						<PaginationHeader />
					</div>

					<div className='main__card'>
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
			<div className='main2'></div>
		</div>
	);
}
