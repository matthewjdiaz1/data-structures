class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  enqueue(str) {
    return this.storage[Object.keys(this.storage).length + 1] = str;
  }

  dequeue() {
    var output = this.storage[1];
    for (let i = 1; i <= Object.keys(this.storage).length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[Object.keys(this.storage).length];
    return output;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
