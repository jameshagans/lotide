// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly'); 
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil')
const without = require('./without')

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countOnly: countOnly,
  countLetters: countLetters,
  findKey: findKey,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without
};