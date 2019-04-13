

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v]
  var bucket = [tuple];
  // if bucket at index is empty
  if (!Array.isArray(this._storage.get(index))) {
    // add bucket to index with tuple in the bucket
    this._storage.set(index, bucket);
  } else {
    // push the tuple to the already existing bucket
    var existingBucket = this._storage.get(index);
    existingBucket.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var output;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) { return undefined; }
  bucket.forEach((tuple) => {
    if (tuple[0] === k) { output = tuple[1] }
  });
  return output;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if only tuple in bucket
  var test = this._storage.get(index).length;
  // console.log(test);
  if (this._storage.get(index).length === 1){
    // delete tuple and bucket
    return this._storage.set(index, undefined);
  } else {
  // else delete tuple
    var bucket = this._storage.get(index);
    for(var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) { bucket.splice(i, 1) }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


