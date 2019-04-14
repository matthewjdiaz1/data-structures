var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
  enqueue: function (str) {
    return this.storage[Object.keys(this.storage).length + 1] = str;
  },

  dequeue: function () {
    var output = this.storage[1];
    for (let i = 1; i <= Object.keys(this.storage).length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[Object.keys(this.storage).length];
    return output;
  },

  size: function () {
    return Object.keys(this.storage).length;
  }
};