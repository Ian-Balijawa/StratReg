import { useState, useContext } from "react";
import data from "../../../fixtures/tableData.json";
import "./styles/table.css";

export default function Table({ handleSearch }) {
	const [checkeditem, setCheckedItem] = useState(false);
	const [dataList, setDataList] = useState([]);
	const [searchElement, setSearchElement] = useState("");

	const handleSort = sortColumn => {
		const newData = [...data];

		// if (sortColumn in newData) {
		// 	const a = newData["sortColumn"];
		// 	const b = newData["sortColumn"];
		// 	const sorted = newData.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));
		// 	setData(sorted);
		// }
	};

	const headleSearch = searchKey => {
		const filtered = data.filter(element => element.id === 2);
		setDataList(filtered);
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
							onKeyDown={() => handleSearch(searchElement)}
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
								<th> {} </th>
								<th> {} </th>
								<th onClick={id => handleSort(id)}> Id </th>
								<th onClick={first_name => handleSort(first_name)}>
									First Name
								</th>
								<th onClick={last_name => handleSort(last_name)}>
									{" "}
									Last Name
								</th>
								<th onClick={institution => handleSort(institution)}>
									Institution
								</th>
								<th onClick={email => handleSort(email)}> Email </th>
								<th onClick={phone => handleSort(phone)}> Phone</th>
								<th onClick={projects => handleSort(projects)}>
									{" "}
									Projects{" "}
								</th>
								<th onClick={supervisor => handleSort(supervisor)}>
									Academic Supervisor
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map(item => (
								<tr key={item.id}>
									<td>
										<input
											type='checkbox'
											value={item}
											onChange={({ target }) => {
												setCheckedItem(target.value);
											}}
										/>
									</td>
									<td>
										{<img src='/images/admin.jpg' alt='avatar' />}
									</td>
									<td> {item.id} </td>
									<td> {item.first_name} </td>
									<td> {item.last_name} </td>
									<td> {item.institution} </td>
									<td> {item.email} </td>
									<td> {item.phone} </td>
									<td> {item.projects} </td>
									<td> {item["academic supervisor"]} </td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
