const assertEqual = function (expression, expected) {
  if (expression === expected) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${expression} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${expression} !== ${expected}`);
};

let tail = function (arr) {
  let newArray = arr.slice(1);
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);