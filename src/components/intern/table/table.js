import { useState, useContext } from "react";
import useUsers from "../../../hooks/use-users";
import { firebase } from "../../../lib/firebase.prod";
import "./styles/table.css";

export default function Table() {
	const [searchElement, setSearchElement] = useState("");
	const users = useUsers();
	const [userList, setUserList] = useState(users);

	const handleSearch = searchKey => {
		firebase
			.firestore()
			.collection("users")
			.where("first_name", "==", searchKey)
			.get()
			.then(snap => {
				setUserList(snap.docs);
			})
			.catch(error => console.log(error));
	};

	return (
		<>
			<div className='table__container'>
				<div>
					<div className='table__actions'>
						<input
							type='text'
							placeholder='search for interns'
							value={searchElement}
							onKeyDown={e => {
								if (e.key === "Enter") {
									handleSearch(searchElement);
								}
							}}
							onChange={({ target }) => {
								setSearchElement(target.value);
							}}
						/>
						<div className='action__btns'>
							<button>Add</button>
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</div>

					<table>
						<thead>
							<tr>
								<th> Avatar </th>
								<th> Id </th>
								<th>First Name</th>
								<th> Last Name</th>
								<th>Institution</th>
								<th> Email </th>
								<th> Phone</th>
								<th> Projects </th>
								<th>Academic Supervisor</th>
							</tr>
						</thead>
						<tbody>
							{userList.map(item => (
								<tr key={item.id}>
									<td>
										{
											<img
												src={`/images/avatars/${
													Math.floor(Math.random() * 5) + 1
												}.png`}
												alt='avatar'
											/>
										}
									</td>
									<td> {item.id} </td>
									<td> {item.first_name} </td>
									<td> {item.last_name} </td>
									<td> {item.institution} </td>
									<td> {item.email} </td>
									<td> {item.phone || "Unknown"} </td>
									<td> {item.projects || "Unassigned"} </td>
									<td>
										{" "}
										{item["academic supervisor"] ||
											"Not Provided"}{" "}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
