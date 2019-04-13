var Stack = function () {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;


 
  // Implement the methods below
<<<<<<< HEAD
  someInstance.push = function (value) {
    return storage[Object.keys(storage).length + 1] = value;
  };

  someInstance.pop = function () {
    var output = storage[Object.keys(storage).length];
    delete storage[Object.keys(storage).length];
    return output;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
=======
  someInstance.push = function(value) {
    storage[key] = value; 
    //{0 : val1}
    key++;
    //key = 1 
  };
//{0 : val1, 1 : val2, 2 : val3}
  someInstance.pop = function() {
    var lastVal = storage[key - 1] 
    //key = 1
    //lastVal = storage[0] => val1
    if (key > 0) {
      delete storage[key - 1];
      key--; 
    }
    return lastVal; 
  };

  someInstance.size = function() {
    return key;
>>>>>>> a514b3591012966cd19fdcb2eea46e8a881107a6
  };

  return someInstance;
};
