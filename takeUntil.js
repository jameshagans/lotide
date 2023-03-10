const assertArraysEqual = function (a, b) {

  if (!eqArrays(a, b)) {
    console.log(`❌❌❌ Assertion Failed : ${a} !== ${b}`);
    return false;
  }
  console.log(`🟢🟢🟢 Assertion Passed : ${a} === ${b}`);
  return true;
}



function eqArrays(arr1, arr2) {
  // check the length of arrays as if they're not the same they can't be equal 
  if (arr1.length != arr2.length) {
    return false;
  } else {

    // comparing each element of array 
    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}



const takeUntil = function (array, callback) {
  let result = [];
  for (let i of array) {
    if (callback(i)) {
      return result;
    }
    result.push(i);
  }
  return result
}



let nums = [4, 6, 5, 3, 4, 3, 6, 7, 9, 4, 6, 4];

let test = takeUntil(nums, num => num > 8)

console.log(test);



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);