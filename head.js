const assertEqual = function (expression, expected) {
  if (expression === expected) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${expression} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${expression} !== ${expected}`);
};

let head = function (arr) {
  return arr[0];
};
console.log(assertEqual(head([5, 4, 6]), 5));
console.log(assertEqual(head([]), undefined)); 
