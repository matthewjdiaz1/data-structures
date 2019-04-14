var Stack = function (newStack) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {
  push: function (str) {
    return this.storage[Object.keys(this.storage).length + 1] = str;
  },

  pop: function () {
    var output = this.storage[Object.keys(this.storage).length];
    delete this.storage[Object.keys(this.storage).length];
    return output;
  },

  size: function () {
    return Object.keys(this.storage).length;
  }
}; 