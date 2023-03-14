const assert = require('chai').assert; 
const middle = require('../middle'); 


let oddArr = [1, 5, 7, 9, 0, 5, 7];
let evenArr = [4, 7, 6, 2, 5, 6];



describe("#middle", () => {
  it("returns the middle element in the odd array", () => {
    assert.deepEqual(middle(oddArr), [9]);
  });

  it("returns middle 2 elements of even array]", () => {
    assert.deepEqual(middle(evenArr), [6, 2]); 
  });

});






// assertArraysEqual(middle(oddArr), [9]);
// assertArraysEqual(middle(evenArr), [6, 2]);
