/*
create a node program called calculator.js
	create a calculator object with the following methods
		-add(x,y) => result
		-subtract(x,y) => result
		-multiply(x,y) => result
		-divide(x,y) => result

	call all the methods of the calculator for x = 100 and y = 50 and print the results
*/
var calculator = {
	add : function(x,y){
		return x + y;
	},
	subtract(x,y){
		return x - y;
	},
	multiply(x,y){
		return x * y;
	},
	divide(x,y){
		return x / y;
	}
}

var x = 100, y = 50;
console.log(calculator.add(x,y));
console.log(calculator.subtract(x,y));
console.log(calculator.multiply(x,y));
console.log(calculator.divide(x,y));


