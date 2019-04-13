var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.storage = {};

};


Stack.prototype.push = function(value) {
    this.storage[this.key] = value; 
    //{0 : val1}
    this.key++;
    //key = 1 
};

Stack.prototype.pop = function() {
    var lastVal = this.storage[this.key - 1] 
    //key = 1
    //lastVal = storage[0] => val1
    if (this.key > 0) {
      delete this.storage[this.key - 1];
      this.key--; 
    }
    return lastVal; 
 };

Stack.prototype.size = function() {
    return this.key;
 };