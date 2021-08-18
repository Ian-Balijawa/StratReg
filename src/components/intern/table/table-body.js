import "./styles/table-body.css";
import { useState } from "react";

export default function TableBody() {
	const [item, setItem] = useState("");
	const [internList, setInternList] = useState([]);

	const handleSearch = (e, element) => {
		e.preventDefault();

		const newData = [...data];
		const filtered = newData.filter(data => data.id === element);
		setInternList(filtered);
	};

	return (
		<tbody>
			{internList.map(item => (
				<tr key={item.id}>
					<td>
						<input
							type='checkbox'
							value={item}
							onChange={({ target }) => {
								setItem(target.value);
							}}
						/>
					</td>
					<td>{<img src='/images/admin.jpg' alt='avatar' />}</td>
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
	);
}
