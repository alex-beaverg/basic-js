const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {  
  let count = 0;
  for (let subArr of matrix) {
    for (let elem of subArr) {
      if (elem === '^^') {
        count++;
      }
    }
  }
  return count;
};