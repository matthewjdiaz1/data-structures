var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[Object.keys(storage).length + 1] = value;
  };

  someInstance.dequeue = function () {
    // save first value to be returned & edge case
    //if (Object.keys(storage).length === 0) { return; }
    var output = storage[1];
    for (let i = 1; i <= Object.keys(storage).length; i++) {
      storage[i] = storage[i + 1]; // b
    }
    // delete the last key with now empty value
    delete storage[Object.keys(storage).length];
    // return saved first  value
    return output;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};
