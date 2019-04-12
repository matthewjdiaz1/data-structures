// Instantiate a new graph
var Graph = function() {
	this.storage = {};
};

// Add a node to the graph, passing in the node's value.
// method that takes a new node and adds it to the graph
Graph.prototype.addNode = function(node) {
	var key = node;
	var edges = [];
	this.storage[key] = edges; 
};

// Return a boolean value indicating if the value passed to contains 
//is represented in the graph.
// method that takes any node and returns a boolean reflecting whether 
//it can be found in the graph
Graph.prototype.contains = function(node) {
	// input - node
	// output - boolean
	var hasNode = false;
	if (this.storage[node]) {
		hasNode = true;
	}
	return hasNode;
};

// Removes a node from the graph.
//  method that takes any node and removes it from the graph, 
// if present. All edges connected to that Node are removed as well.
Graph.prototype.removeNode = function(node) {
	var edges = [];
	for(var i = 0; i < this.storage[node].length; i++){
		edges.push(this.storage[node][i][1]);
	}
	edges.forEach((el) => {
		for(var i = 0; i < this.storage[el].length; i++){
			if(this.storage[el][i][1] === node){
				this.storage[el][i].splice(i, 1);
			}
		}
	});
	delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are 
//connected.  Pass in the values contained in each of the two nodes.
// method that returns a boolean reflecting whether or not two nodes are connected
Graph.prototype.hasEdge = function(fromNode, toNode) {
	// input - two nodes
	// output - boolean
	var hasEdge = false;
	this.storage[fromNode].forEach((el) => {
		if(el[0] === fromNode && el[1] === toNode){
			hasEdge = true;
		}
	});
	return hasEdge;
};

// Connects two nodes in a graph by adding an edge between them.
// method that creates a edge (connection) between two nodes if they 
//both are present within the graph
Graph.prototype.addEdge = function(fromNode, toNode) {
		this.storage[fromNode].push([fromNode, toNode]);
		this.storage[toNode].push([toNode, fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
// method that removes the connection between two nodes
Graph.prototype.removeEdge = function(fromNode, toNode) {
	for(var i = 0; i < this.storage[fromNode].length; i++){
		if(this.storage[fromNode][i][0] === fromNode && this.storage[fromNode][i][1] === toNode){
			this.storage[fromNode].splice(i, 1);
		}
	}
	for(var i = 0; i < this.storage[toNode].length; i++){
		if(this.storage[toNode][i][0] === toNode && this.storage[toNode][i][1] === fromNode){
			this.storage[toNode].splice(i, 1);
		}
	}
};

// Pass in a callback which will be executed on each node of the graph.
//method that traverses through the graph, calling a passed in function 
//once on each node
Graph.prototype.forEachNode = function(cb) {
	// input - function
	// output - none
	var keys = Object.keys(this.storage);
	for(var i = 0; i < keys.length; i++){
		cb(Number(keys[i]));
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


