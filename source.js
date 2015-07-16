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
// this is a git test!

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
  // this is just vanilla, does not need any other functions

  // var filter = function(collection, test){
  //    var returnArray = [];
  // // if will deal with arrays; the else case will deal with objects
  //     if (Array.isArray(collection)) {
  //         for (var i = 0; i < collection.length; i++) {
  //             if (test(collection[i])) {
  //                 returnArray.push(collection[i])
  //             };
  //         }
  //     } else {
  //     for (var key in collection) {
  //       if (test(collection[key])) {
  //                 returnArray.push(collection[key])
  //             };
  //     }
  //   }

  //     return returnArray;
  //   };

  // this uses each! such efficient. wow. notice how clear we have to be 
  // about passing value, index, list args down the line so all functions can see them
  var filter = function (collection, test) {
      if (collection instanceof Array) {
          var returnArray = [];
          each(collection, function (value, index, list) {
              if (test(value, index, list)) {
                  returnArray.push(value);
              }
          });
          return returnArray;
      } else {
          var returnObj = {};
          each(collection, function (value, index, list) {
              if (test(value, index, list)) {
                  returnObj[index] = value;
              }
          });
          return returnObj;
      }
  };

  //example use and test
  var filteredArray = filter(testArray, function(item, index, collection) {
    return item < 5;
  });

  var filteredObject = filter(testObject, function(item, index, collection) {
    return item < 5;
  });
  console.log("Filter [] test: the line below should be [2, 3, 4]")
  console.log(filteredArray);

  console.log("Filter {} test: the line below should be anything < 5")
  console.log(filteredObject);



  // Return the results of applying an iterator to each element.
  // this is just vanilla, does not need any other functions

  // var map = function(collection, iterator) {
  //   var returnArray = [];
  //   // each(collection, iterator(collection[i]))
  //     if (Array.isArray(collection)) {
  //         for (var i = 0; i < collection.length; i++) {
  //             returnArray.push(iterator(collection[i]));
  //         }
  //     } else {
  //     for (var key in collection) {
  //                 returnArray.push(iterator(collection[key]));
  //     }
  //   }

  //   return returnArray;
  // };


  // this uses each! such efficient. wow. notice how clear we have to be 
  // about passing value, index, list args down the line so all functions can see them
  var map = function(collection, iterator) {
      if (collection instanceof Array) {
          var returnArray = [];
          each(collection, function (value, index, list) {
              returnArray.push(iterator(value, index, list));
          });
          return returnArray;
      }      else {
          var returnObj = {};
          each(collection, function (value, index, list) {
              returnObj[index] = iterator(value, index, list);
          });
          return returnObj;
      }
  };





  var mappedArray = map(testArray, function(item, index, collection) {
   return item + 10;
  });

  var mappedObj = map(testObject, function(item, index, collection) {
   return item + 10;
  });
  console.log("Filter [] test: The line below should be [12, 13, 14, 15, 15]");
  console.log(mappedArray);

  console.log("Filter {} test: The line below should be items plus 10");
  console.log(testObject);
  console.log(mappedObj);
