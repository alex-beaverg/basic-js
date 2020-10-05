const CustomError = require("../extensions/custom-error");

module.exports = function(str, options = { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator }) {
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  let result = '';
  let halfResult = ''; 
  if (options.addition === undefined) {
  	halfResult = '';  	
  } else {
  	for (let i = 0; i < options.additionRepeatTimes; i++) {
    	if (i === 0) halfResult = String(options.addition);
    	else halfResult += options.additionSeparator + String(options.addition);
  	}
  }  
  if (options.additionRepeatTimes === undefined && options.addition !== undefined) halfResult = String(options.addition);  
  for (let i = 0; i < options.repeatTimes; i++) {
    if (i === 0) result = String(str) + halfResult;
    else result += options.separator + String(str) + halfResult;
  }
  if (options.repeatTimes === undefined) result = String(str) + halfResult;
  return result;
};
  