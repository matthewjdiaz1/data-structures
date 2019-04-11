var Stack = function(value) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.key = 0;
  someInstance.storage = {}; //{1 : a, 2 :b}
  extend(someInstance, stackMethods);

  return someInstance;


};

var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
}

var stackMethods = {};

stackMethods.push = function(value) {
    this.storage[this.key] = value; 
    //{0 : val1}
    this.key++;
    //key = 1 
  };

 stackMethods.pop = function() {
    var lastVal = this.storage[this.key - 1] 
    //key = 1
    //lastVal = storage[0] => val1
    if (this.key > 0) {
      delete this.storage[this.key - 1];
      this.key--; 
    }
    return lastVal; 
  };

 stackMethods.size = function() {
    return this.key;
  };


