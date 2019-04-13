var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

// An .add() method, takes any string and adds it to the set
setPrototype.add = function(item) {
  this._storage.push(item);
};

// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  if (this._storage.includes(item)) { return true; }
  return false;
};

// A .remove() method, takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
