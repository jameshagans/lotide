const assertEqual = require('../assertEqual'); 
const tail = require('../tail'); 

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);