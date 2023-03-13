
const middle = (arr) => {
  let resultArray = [];
  if (arr.length % 2 !== 0) {
    resultArray.push(arr[Math.floor((arr.length - 1) / 2)]);
    return resultArray;
  } else {
    console.log(arr);
    resultArray.push(arr[Math.floor((arr.length - 1) / 2)]);
    resultArray.push(arr[Math.floor((arr.length - 1) / 2) + 1]);
  }
  return resultArray;
}
module.exports = middle; 

