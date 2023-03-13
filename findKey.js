const findKey = function (object, callback) {

  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
}




const assertEqual = function (expression, expected) {
  if (expression === expected) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${expression} === ${expected}`);
  }
  return console.log(`❌❌❌ Assertion Failed: ${expression} !== ${expected}`);
};



console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)) // => "noma"


const movies = {
  wars: { rating: 9 },
  trek: { rating: 10 }

}

findKey(movies, function (x) {
  return x.rating > 9;
})

console.log(assertEqual(findKey(movies, function (x) {
  return x.rating > 9;
}), 'trek'))