var Queue = function () {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function (value) {
    storage[Object.keys(storage).length + 1] = value;
    console.log(storage);
  };

  someInstance.dequeue = function () {
    if (Object.keys(storage).length === 0) return;
    var output = storage[1];
    var temp = storage[1]; 
    for (let i = 1; i <= Object.keys(storage).length; i++) {
      storage[i] = storage[i + 1]; 
    }
    delete storage[Object.keys(storage).length];
    return output;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};