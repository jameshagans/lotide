const assertEqual = function (expression, expected) {
  if (expression === expected) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${expression} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${expression} !== ${expected}`);
};


function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}



// function eqArrays(arr1, arr2) {
//   // check the length of arrays as if they're not the same they can't be equal 
//   if (arr1.length != arr2.length) {
//     return `❌❌❌ Assertion Failed: The arrays have a different length`;
//   } else {

//     // comparing each element of array 
//     for (let i = 0; i < arr1.length; i++) {

//       if (arr1[i] !== arr2[i]) {
//         return `❌❌❌ Assertion Failed: The arrays do not match!`;
//       }
//     }
//     return `🟢🟢🟢 Assertion Passed: The arrays are a match! `;
//   }
// }



console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => should PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true)); // => should FAIL


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


