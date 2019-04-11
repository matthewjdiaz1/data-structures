var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
   

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };
  //{0 : 'a', 1 : 'b'}
  //length = 2 
  //end = 2
  someInstance.dequeue = function() {
    var arr = Object.keys(storage);
    var first = arr[0];
    var placeHolder = storage[first];
    delete storage[first];
    return placeHolder;
  };

  someInstance.size = function() {
    return Object.keys(storage).length; 
  };

  return someInstance;
};
