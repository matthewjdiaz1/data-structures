

// Instantiate a new graph
var Graph = function() {
    this.edge = edge;
    this.node = node;
};

// Add a node to the graph, passing in the node's value.
// method that takes a new node and adds it to the graph
Graph.prototype.addNode = function(node) {
};

// Return a boolean value indicating if the value passed to contains 
//is represented in the graph.
// method that takes any node and returns a boolean reflecting whether 
//it can be found in the graph
Graph.prototype.contains = function(node) {
};

// Removes a node from the graph.
//  method that takes any node and removes it from the graph, 
// if present. All edges connected to that Node are removed as well.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are 
//connected.  Pass in the values contained in each of the two nodes.
// method that returns a boolean reflecting whether or not two nodes are connected
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
// method that creates a edge (connection) between two nodes if they 
//both are present within the graph
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
// method that removes the connection between two nodes
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
//method that traverses through the graph, calling a passed in function 
//once on each node
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


