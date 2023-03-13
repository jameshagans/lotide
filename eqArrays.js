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


module.exports = eqArrays; 

