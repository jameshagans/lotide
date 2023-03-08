let assertArraysEqual = function (a, b) {
  return eqArrays(a, b);
}


function eqArrays(arr1, arr2) {
  // check the length of arrays as if they're not the same they can't be equal 
  if (arr1.length !== arr2.length) {
    return console.log(`❌❌❌ Assertion Failed: The arrays have a different length`);
  } else {

    // comparing each element of array 
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return console.log(`❌❌❌ Assertion Failed: The arrays do not match!`);
      }
    }

  }
  return console.log(`🟢🟢🟢 Assertion Passed: The arrays are a match! `);
}



const middle = (arr) => {
  let resultArray = [];
  if (arr.length % 2 !== 0) {
    resultArray.push(arr[Math.floor((arr.length - 1) / 2)]);
    return resultArray;
  } else {
    console.log(arr);
    resultArray.push(arr[Math.floor((arr.length - 1) / 2)]);
    resultArray.push(arr[Math.floor((arr.length - 1) / 2) + 1]);
  }
  return resultArray;
}
let oddArr = [1, 5, 7, 9, 0, 5, 7];
let evenArr = [4, 7, 6, 2, 5, 6];


assertArraysEqual(middle(oddArr), [9]);
assertArraysEqual(middle(evenArr), [6, 2]);

















//code for odd number of items 
// var middle = arr[Math.round((arr.length - 1) / 2)];

//code for even number

// let newArr = [];
// newArr.push(evenArr[Math.floor((evenArr.length - 1) / 2)])
// newArr.push(evenArr[Math.floor((evenArr.length - 1) / 2) + 1])