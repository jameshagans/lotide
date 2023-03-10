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


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const words = ["ground", "control", "to", "major", "tom"];
const result = map(words, word => word[0]);
console.log(result)

const drinks = ['coke', 'pepsi', 'sprite']
const plurals = map(drinks, drink => drink + 's')
console.log(plurals)

const colors = ['red', 'green', 'blue', 'yellow'];
const black = map(colors, c => c = 'black');
console.log(black)


assertArraysEqual(result, ['g', 'c', 't', 'm', 't'])

assertArraysEqual(plurals, ['cokes', 'pepsis', 'sprites'])

assertArraysEqual(black, ['black', 'black', 'black', 'black'])


