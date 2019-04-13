var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = newTree.right = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// .insert() method, which accepts a value and places it 
//in the tree in the correct position.
treeMethods.insert = function(value) {
	var newNode = BinarySearchTree(value);
	//if parent node is greater than input value 
	if (this.value > value) {
		// if parent nodes left child is empty
		if (this.left === null){
			// put new node into parent node.left
			this.left = newNode;
			// else check this.children.left to see if it's empty
		} else {
			// recurse
			this.left.insert(value);
		}
	} else {
		if (this.right === null) {
			this.right = newNode;
		} else {
			// recurse
			this.right.insert(value);
		}
	}
};

// .contains() method, which accepts a value and returns a 
//boolean reflecting whether or not the value is contained 
//in the tree.
treeMethods.contains = function(target) {
	// input - value
	// output - bool

	// if node value = target return true
	if (this.value === target) { return true; }
	// if target > node value search right
	if (target > this.value && this.right !== null) {
		return this.right.contains(target);
	} else if (this.left !== null) {
		return this.left.contains(target);
	}
	return false;
};

// .depthFirstLog() method, which accepts a callback and 
//executes it on every value contained in the tree.
treeMethods.depthFirstLog = function(func) {
	// pass parent value thru func
	func(this.value);
		// if parent has left recurse this.left
		if (this.left !== null) {
			// pass left value thru func
			this.left.depthFirstLog(func);
			// if parent has right
		} 
		if (this.right !== null) {
			// pass right value thru func
			this.right.depthFirstLog(func);
		}

};

// 
/*
 * Complexity: What is the time complexity of the above functions?
 */
