var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// .addChild() method, takes any value, sets that as the target of a node, 
// and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));

  // console.log(this.children.push(Tree(value)));
};
// A .contains() method, takes any input and returns a boolean reflecting whether 
// it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  var containsTarget = false;
  var checkNode = function(node) {
    if (node.value === target) {
      containsTarget = true; 
    }
    if (node.children.length !== 0) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i]);
      }
    }
  }
  checkNode(this);
  return containsTarget;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

