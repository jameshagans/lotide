const assertArraysEqual = require('../assertArraysEqual'); 

assertArraysEqual([1, 2, 5], [1, 2, 3]);



assertArraysEqual([1, 2, 3], [1, 2, 3]); // output expected: pass
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // output expected: pass 
assertArraysEqual([1, 2, 3], [3, 2, 1]); // output expected: fail 
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // output expected: fail 