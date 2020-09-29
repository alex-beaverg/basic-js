const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {  
  if (typeof sampleActivity === 'string' && 
      sampleActivity < 9000 && 
      sampleActivity !== NaN &&
      sampleActivity > 0 &&
      Math.ceil(sampleActivity) / sampleActivity === 1) {
    return Math.ceil(Math.log(sampleActivity / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD));
  } else return false;
};
