(function() {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error

	// Never use alert, use console.log instead
	let o = {
		a: 1,
		b: 2
	};

	o.prototype = {
		b: 3,
		c: 4
	};

	o.prototype.prototype = null;

	// Thus, the full prototype chain looks like:
	// {a:1, b:2} ---> {b:3, c:4} ---> null

	console.log(o.a); // 1
	// Is there an 'a' own property on o? Yes, and its value is 1.

	console.log(o.b); // 2
	// Is there a 'b' own property on o? Yes, and its value is 2.

	console.log(o.c); // 4
	// Is there a 'c' own property on o? No, check its prototype.
	// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

	console.log(o.d); // undefined
	// Is there a 'd' own property on o? No, check its prototype.
	// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
	// o.[[Prototype]].[[Prototype]] is null, stop searching,
	// no property found, return undefined

})();