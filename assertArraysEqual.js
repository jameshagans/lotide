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

assertArraysEqual([1, 2, 5], [1, 2, 3]);



assertArraysEqual([1, 2, 3], [1, 2, 3]); // output expected: pass
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // output expected: pass 
assertArraysEqual([1, 2, 3], [3, 2, 1]); // output expected: fail 
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // output expected: fail 