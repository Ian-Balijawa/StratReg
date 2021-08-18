import PaginationHeader from "./../components/Dashboard/pagination-header/pagination-header";
import HeaderDashboard from "./../components/Dashboard/HeaderDashboard/header-dashboard";
import Sidebar from "./../components/Dashboard/sidebar/sidebar";
import "./styles/profile.css";

const UserProfile = () => {
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
							<img src='/images/admin.jpg' alt='profile pic' />
							<p> Ian Balijawa </p>
						</div>
						<div className='user__info'>
							<div>
								<p>First Name</p>
								<p>IAN </p>
							</div>
							<div>
								<p>Last Name</p>
								<p>BALIJAWA </p>
							</div>
							<div>
								<p>Phone</p>
								<p>0756008970 </p>
							</div>
							<div>
								<p>Email Address</p>
								<p>ianbalijawa16@gmail.com</p>
							</div>

							<div>
								<p>Institution</p>
								<p>Makerere university</p>
							</div>
							<div>
								<p>Course</p>
								<p>Computer Science</p>
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
