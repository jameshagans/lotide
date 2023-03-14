

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



// const words = ["ground", "control", "to", "major", "tom"];
// const result = map(words, word => word[0]);
// console.log(result)

// const drinks = ['coke', 'pepsi', 'sprite']
// const plurals = map(drinks, drink => drink + 's')
// console.log(plurals)

// const colors = ['red', 'green', 'blue', 'yellow'];
// const black = map(colors, c => c = 'black');
// console.log(black)


// assertArraysEqual(result, ['g', 'c', 't', 'm', 't'])

// assertArraysEqual(plurals, ['cokes', 'pepsis', 'sprites'])

// assertArraysEqual(black, ['black', 'black', 'black', 'black'])


module.exports = map; 