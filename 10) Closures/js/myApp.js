(function() {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error

	// Never use alert, use console.log instead
	// Use Arrow Functions instead of Classic Functions
	// A closure is a function having access to the parent scope, even after the parent function has closed.

	let makeAdder = (a) => {
		return (b) => {
			return a + b;
		};
	}

	let x = makeAdder(5);
	let y = makeAdder(20);
	console.log(x(6)); // ?
	console.log(y(7)); // ?

})();