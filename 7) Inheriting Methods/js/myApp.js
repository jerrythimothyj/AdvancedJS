(function() {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error

	// Never use alert, use console.log instead
	let o = {
		a: 2,
		m: function(b) {
			return this.a + 1;
		}
	};

	console.log(o.m()); // 3
	// When calling o.m in this case, 'this' refers to o

	let p = Object.create(o);
	// p is an object that inherits from o

	p.a = 4; // creates an own property 'a' on p
	console.log(p.m()); // 5
	// when p.m is called, 'this' refers to p.
	// So when p inherits the function m of o, 
	// 'this.a' means p.a, the own property 'a' of p

})();