import { useState, useContext } from "react";
import useUsers from "../../../hooks/use-users";
import { firebase } from "../../../lib/firebase.prod";
import "./styles/table.css";

export default function Table() {
	const [searchElement, setSearchElement] = useState("");
	const users = useUsers();
	return (
		<>
			<div className='table__container'>
				<div>
					<div className='table__actions'>
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
								<th> Course </th>
								<th> Phone</th>
								<th> Projects </th>
								<th>Academic Supervisor</th>
							</tr>
						</thead>
						<tbody>
							{users.map(item => (
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
									<td> {item.course} </td>
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
