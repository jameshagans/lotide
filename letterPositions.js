

const letterPositions = function (sentence) {
  const results = {};
  let count = 0;
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(count);
      } else {
        results[letter] = [count];
      }

    }
    count++
  }
  return results;

};




letterPositions("lighthouse in the house");


let assertArraysEqual = function (a, b) {
  return eqArrays(a, b);
}



function eqArrays(arr1, arr2) {
  // check the length of arrays as if they're not the same they can't be equal 
  if (arr1.length != arr2.length) {
    return `❌❌❌ Assertion Failed: The arrays have a different length`;
  } else {

    // comparing each element of array 
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return `❌❌❌ Assertion Failed: The arrays do not match!`;
      }
    }
    return `🟢🟢🟢 Assertion Passed: The arrays are a match! `;
  }
}


console.log(assertArraysEqual(letterPositions("hello").e, [1]));






// const letterPositions = function (sentence) {
//   const results = {};
//   let count = 0;
//   for (const letter of sentence) {
//     if (results[letter]) {
//       results[letter].push(count);
//       count++
//     } else {
//       results[letter] = [count];
//       count++;
//     }
//   }

//   console.log(results);
//   return results;

// };
