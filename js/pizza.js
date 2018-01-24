//Javascript Document
/*jslint browser:true*/
"use strict";



var pizza = {

	crust: "thin",
	toppings: "cheese",
	size: "small",
	flour: "4 cups",
	toppingAmount: "1lb",



	buildPizza: function() {
		var pizzaText = "This is a " + pizza.size + " pizza with a " + pizza.crust + " crust, topped with " + pizza.toppings + ".";
		console.log(pizzaText);
		document.getElementById("textArea").innerHTML = pizzaText;
	}, // end of method

	shoppingList: function() {
		var shoppingText = "You will need to purchase " + pizza.flour + " of flour, and " + pizza.toppingAmount + " of " + pizza.toppings + ".";
		console.log(shoppingText);
		document.getElementById("textArea").innerHTML = shoppingText;
	} // end of method

}; // end of object



pizza.buildPizza();