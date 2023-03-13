const eqArrays = require('./eqArrays'); 
const assertArraysEqual = function (a, b) {

  if (!eqArrays(a, b)) {
    console.log(`❌❌❌ Assertion Failed : ${a} !== ${b}`);
    return false;
  }
  console.log(`🟢🟢🟢 Assertion Passed : ${a} === ${b}`);
  return true;
}



module.exports = assertArraysEqual; 

