var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // .addToTail() method, takes a value and adds it to the end of the list
  list.addToTail = function(value) {
    if (list.head === null){
      list.head = list.tail = Node(value);
    } else {
      var oldTail = list.tail;
      list.tail = Node(value);
      oldTail.next = list.tail;
    }
  };

  // .removeHead() method, removes the first node from the list and returns its value
  list.removeHead = function() {
    var output = list.head.value;
    list.head = list.head.next;
    return output;
  };

  // .contains() method, returns boolean reflecting whether 
  // or not the passed-in value is in the linked list
  list.contains = function(target) {
    var containsTarget = false;
    var checkNode = function(node) {
      if (node.next === null) { return containsTarget }
      if (node.value === target) {
        containsTarget = true;
      } else {
        checkNode(node.next);
      }
    }
    checkNode(list.head);
    return containsTarget;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */