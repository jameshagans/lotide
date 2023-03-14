

const findKeyByValue = function (obj, value) {

  let keys = Object.keys(obj);

  for (let item of keys) {
    if (value === obj[item]) {
      return item;
    }
  }
  return undefined;
}








// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue; 