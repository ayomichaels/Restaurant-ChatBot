const mainMenu = [
	{ number: 1, text: "Place An Order" },
	{ number: 99, text: "Checkout Order" },
	{ number: 98, text: "Check Order History" },
	{ number: 97, text: "Check Current Order" },
	{ number: 0, text: "Cancel Order" },
];

const foodMenu = [
	{ number: 1, food: "Asaro Elemi Meje", price: 4500 },
	{ number: 2, food: "Catfish peppersoup with crab and yam", price: 8500 },
	{ number: 3, food: "Ofada Rice with Grilled Turkey", price: 5500 },
	{ number: 4, food: "Beans and Plantain with Fish", price: 4000 },
	{ number: 5, food: "Smokey Jollof with Chicken and Plantain", price: 6000 },
	{ number: 6, food: "Yam and egg sauce and fish crumbs", price: 3000 },
];

module.exports = {
	mainMenu,
	foodMenu,
};
