const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {  
  num = 1;
  arr2 = [];
  x = true;
  calculateDepth(arr) {        
    if (this.x) this.num = 1;    
    for (let item of arr) {
      if (Array.isArray(item)) {                       
        this.x = false;
        this.num += 1;
        this.arr2 = arr.flat();
        return this.calculateDepth(this.arr2);
      }      
    }
    this.x = true;    
    return this.num;
  }  
};