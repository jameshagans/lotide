const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns the correct length of the tail array", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);