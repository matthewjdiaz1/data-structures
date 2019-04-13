var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;


 
  // Implement the methods below
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
  };

  return someInstance;
};