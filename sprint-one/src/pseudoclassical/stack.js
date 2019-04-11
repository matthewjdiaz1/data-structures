var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};

};

Stack.prototype.push = function (str) {
  return this.storage[Object.keys(this.storage).length + 1] = str;
};

Stack.prototype.pop = function () {
  var output = this.storage[Object.keys(this.storage).length];
  delete this.storage[Object.keys(this.storage).length];
  return output;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};
