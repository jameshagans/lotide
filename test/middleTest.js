const assertArraysEqual = require('../assertArraysEqual'); 
const middle = require('../middle'); 

let oddArr = [1, 5, 7, 9, 0, 5, 7];
let evenArr = [4, 7, 6, 2, 5, 6];


assertArraysEqual(middle(oddArr), [9]);
assertArraysEqual(middle(evenArr), [6, 2]);
