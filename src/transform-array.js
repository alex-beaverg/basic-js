const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {  
  if (!Array.isArray(arr)) throw Error;
  let arrRes=[];
  let flag = false;
  let flag2 = false;
  let flag3 = false;
  for (let item of arr) {    
    if (flag === true) {
      flag = false;          
      continue;
    }
    if (flag2 === true) {
      flag2 = false;
      arrRes.push(item);
      arrRes.push(item);
      flag = false;
      flag2 = false;
      flag3 = false;
      continue;
    }
    switch (item) {
      case '--discard-next':
        flag = true;
        flag3 = true;
        break;
      case '--discard-prev':
        if (arrRes.length === 0) continue;
        if (flag3 === true) {
          flag3 = false;
          continue;
        }
        arrRes.pop();
        flag = false;
        flag2 = false;
        flag3 = false;
        break;
      case '--double-next':
        flag2 = true;
        break;
      case '--double-prev':
        if (arrRes.length === 0) continue;
        if (flag3 === true) {
          flag3 = false;
          continue;
        }
        arrRes.push(arrRes[arrRes.length - 1]);
        flag = false;
        flag2 = false;
        flag3 = false;
        break;
      default:
        arrRes.push(item);
        flag = false;
        flag2 = false;
        flag3 = false;
    }    
  }
  return arrRes;
}