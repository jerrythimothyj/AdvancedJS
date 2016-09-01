(function() {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error

	// Never use alert, use console.log instead
	let a = {a: 1};
	// a ---> Object.prototype ---> null

	let b = Object.create(a);
	// b ---> a ---> Object.prototype ---> null
	console.log(b.a); // 1 (inherited)

	let c = Object.create(b);
	// c ---> b ---> a ---> Object.prototype ---> null

	let d = Object.create(null);
	// d ---> null
	console.log(d.hasOwnProperty); 
	// undefined, because d doesn't inherit from Object.prototype

})();