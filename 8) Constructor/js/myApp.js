(function() {
	'use strict';

	// Always follow IIFE method to avoid conflicts and strict mode to stop execution when error

	// Never use alert, use console.log instead
	function Graph() {
		this.vertices = [];
		this.edges = [];
	}

	Graph.prototype = {
		addVertex: function(v) {
			this.vertices.push(v);
		}
	};

	let g = new Graph();
	g.addVertex(10);
	console.log(g.vertices);
	// g is an object with own properties 'vertices' and 'edges'.
	// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.

})();