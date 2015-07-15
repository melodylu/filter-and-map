  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  
  var testArray = [0, 1, 2, 3, 4];
  var testObject = {
    spoons: 2,
    forks: 4,
    knives: 8
  };


  var each = function(collection, iterator) {
    if (collection instanceof Array) {
      for(var i = 0; i < collection.length; i++)
      iterator(collection[i], i, collection);
    } else {
      for (var key in collection) 
        iterator(collection[key], key, collection);
    }
  };

  // example use and test
  each(testArray, function(item, index, collection) {
    collection[index] = item + 2;
  });
  each(testObject, function(item, index, collection) {
    collection[index] = item + 2;
  })
  console.log("The line below should be [2, 3, 4, 5, 6]")
  console.log(testArray);
  console.log("The line below should be {spoons: 4, forks: 6, knives: 10}");
  console.log(testObject);

  // Return all elements of an array that pass a truth test.
  var filter = function(collection, test){
    // your code here
  };

  //example use and test
  var filteredArray = filter(testArray, function(item, index, collection) {
    return item < 5;
  });
  console.log("The line below should be [2, 3, 4]")
  console.log(filteredArray);

  // Return the results of applying an iterator to each element.
  var map = function(collection, iterator) {
    // code goes here
    
  };

  var mappedArray = map(testArray, function(item, index, collection) {
   return item + 10;
  });

  console.log("The line below should be [12, 13, 14, 15, 15]");
  console.log(mappedArray);