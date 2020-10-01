const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = 2 ** disksNumber - 1;
  let second = Math.floor((turn / turnsSpeed) * 60 * 60);
  let obj = {
    turns: turn, 
    seconds: second
  };  
  return obj;
};