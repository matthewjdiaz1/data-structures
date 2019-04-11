class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.key = 0;
  }

  enqueue(value) {
  	this.storage[this.key] = value;
    this.key++;
  }

  dequeue() {
  	var arr = Object.keys(this.storage);
    var first = arr[0];
    var placeHolder = this.storage[first];
    delete this.storage[first];
    return placeHolder;
  }

  size() {
  	return Object.keys(this.storage).length; 
  }

}
