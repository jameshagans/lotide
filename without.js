// let assertArraysEqual = function (a, b) {
//   return eqArrays(a, b);
// }


// function eqArrays(arr1, arr2) {
//   // check the length of arrays as if they're not the same they can't be equal 
//   if (arr1.length !== arr2.length) {
//     return console.log(`❌❌❌ Assertion Failed: The arrays have a different length`);
//   } else {

//     // comparing each element of array 
//     for (let i = 0; i < arr1.length; i++) {

//       if (arr1[i] !== arr2[i]) {
//         return console.log(`❌❌❌ Assertion Failed: The arrays do not match!`);
//       }
//     }

//   }
//   return console.log(`🟢🟢🟢 Assertion Passed: The arrays are a match! `);
// }


const without = function (source, itemsToRemove) {
  let remainingItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i]))
      remainingItems.push(source[i]);
  }
  return remainingItems;
}



// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"])

// const words = ["hello", "world", "lighthouse"];
// // without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);

module.exports = without; 


