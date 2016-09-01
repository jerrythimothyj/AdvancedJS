(function() {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error

	// Never use alert, use console.log instead
	// Number
	console.log(100);

	// String
	console.log('Hello');

	// Boolean
	console.log(true);

	// Array
	// Use let instead of var
	// Use camelCase for variables and keys
	// Use meaningful names for variables and keys
	let sampleArray = ['apple', 'mango', 'orange'];
	console.log(sampleArray);

	// Keyed Array
	let keyedArray = [];
	keyedArray['personName'] = 'John Doe';
	console.log(keyedArray);

	// Object
	// The block right side of equal to symbol is called a JSON Object
	let sampleObject = {
		id: 1,
		name: 'Besant Tech',
		address: {
			doorNo: '9',
			floorNo: '2',
			street: 'Kundanahalli',
			area: 'Whitefield',
			city: 'Bangalore',
			pincode: '560066'
		}
	};
	console.log(sampleObject);

	// Null
	console.log(null);

	// Undefined
	console.log(a);

})();