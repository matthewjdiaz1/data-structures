class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(str) {
    return this.storage[Object.keys(this.storage).length + 1] = str;
  }

  pop() {
    var output = this.storage[Object.keys(this.storage).length];
    delete this.storage[Object.keys(this.storage).length];
    return output;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}