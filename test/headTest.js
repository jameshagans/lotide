const assertEqual = require('../assertEqual');
const head = require('../head')





console.log(assertEqual(head([5, 4, 6]), 5));
console.log(assertEqual(head([]), undefined)); 
