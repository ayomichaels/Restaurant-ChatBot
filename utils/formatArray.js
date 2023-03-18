const formatArray = (msg, list) => {
	let arrayMsg = "";

	if (msg == "mainMenu") {
		arrayMsg = list
			.map((item) => {
				return `${item.number}: To ${item.text}`;
			})
			.join(`<br>`);
		arrayMsg = `Please enter a number from the options below: <br>` + arrayMsg;
		return arrayMsg;
	}

	arrayMsg = list
		.map((item, index) => {
			return `${index + 1}: ${item.food} - #${item.price} `;
		})
		.join(`<br>`);

	arrayMsg = `${msg}: <br>` + arrayMsg;
	return arrayMsg;
};

module.exports = formatArray;
