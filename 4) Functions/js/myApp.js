(function() {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error

	// Never use alert, use console.log instead
	// Use Arrow Functions instead of Classic Functions
	let add = (arg1, arg2) => {
		return arg1 + arg2;
	}

	console.log(add(2, 3));

})();