let tail = function (arr) {
  let newArray = arr.slice(1);
  console.log(newArray)
  return newArray;
};
tail(["Hello", "Lighthouse", "Labs"])
module.exports = tail; 