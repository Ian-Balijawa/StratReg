const data = require("../fixtures/tableData.json");

const filtered = data.filter(
	e => e.id === 2 && e.institution.toLowerCase() == "makerere"
);

// console.log(data);
console.log(filtered);
