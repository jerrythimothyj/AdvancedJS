(function() {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error

	// Never use alert, use console.log instead
	// Use Arrow Functions instead of Classic Functions
	// The below are constructor type functions that cannot be defined using arrow functions
	function Person(first, last) {
		this.first = first;
		this.last = last;
	}

	// Unnecessary space is saved when using prototype
	// Person.prototype is an object shared by all instances of Person
	// It forms part of a lookup chain (that has a special name, "prototype chain")
	// Dynamically the function definition can be modifed when using prototype
	Person.prototype.fullName = function() {
		return this.first + ' ' + this.last;
	};

	Person.prototype.fullNameReversed = function() {
		return this.last + ', ' + this.first;
	};

	let person = new Person("Simon", "Willison");
	console.log(person.fullName());
	console.log(person.fullNameReversed());

})();