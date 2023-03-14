

const letterPositions = function (sentence) {
  const results = {};
  let count = 0;
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(count);
      } else {
        results[letter] = [count];
      }

    }
    count++
  }
  return results;

};



module.exports = letterPositions;