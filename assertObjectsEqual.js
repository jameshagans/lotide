function assertEqual(expression, expected) {
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




// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
function eqObjects(obj1, obj2) {

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // Compare each key-value pair in the objects
  for (let key of keys1) {
    // If the key exists in both objects and the values don't match, the objects don't match
    if (obj2.hasOwnProperty(key)) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        // If both values are arrays, compare each element in the arrays
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        // If values are not arrays, compare them directly
        return false;
      }
    } else {
      // If the key doesn't exist in the second object, the objects don't match
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(obj2)}`);


  //check if the objects match
  if (!eqObjects(obj1, obj2)) {
    console.log(`❌❌❌ Assertion Failed : ${inspect(obj1)} !== ${inspect(obj2)}`);
    return false;
  }
  console.log(`🟢🟢🟢 Assertion Passed : ${inspect(obj1)} === ${inspect(obj2)}`);
  return true;
};



const p1 = {
  name: 'James',
  age: 24
}

const p2 = {
  name: 'James',
  age: 24
}

const p3 = {
  name: 'chloe',
  age: 30
}




assertObjectsEqual(p1, p3); 