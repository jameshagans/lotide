const assertEqual = function (expression, expected) {
  if (expression === expected) {
   return  console.log(`🟢🟢🟢 Assertion Passed: ${expression} === ${expected}`);
    
  }
  return console.log(`❌❌❌ Assertion Failed: ${expression} !== ${expected}`);

};


module.exports = assertEqual; 