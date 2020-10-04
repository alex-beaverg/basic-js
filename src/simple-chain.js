const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',    
  getLength() {
    
  },
  addLink(value) {    
      this.chain += '~~( ' + String(value) + ' )';
    return this;
  },
  removeLink(position) {
    if (position < 1 || typeof position != 'number') {
      this.chain = '';
      throw Error;
    }
    let chainArr = this.chain.split('~~');
    chainArr.shift();
    if (position >= chainArr.length) {
      this.chain = '';
      throw Error;
    }
    let count = 1;
    let chain2 = '';
    for (item of chainArr) {      
      if (count != position) chain2 += '~~' + item;
      count++;
    }
    this.chain = chain2;
    return this;
  },
  reverseChain() {
    let chainArr = this.chain.split('~~');
    chainArr.shift();    
    let count = 1;
    let chain2 = '';
    for (item of chainArr) {      
      chain2 = item + '~~' + chain2;
      count++;
    }
    if (chainArr.length === 0) {
      this.chain = '';
    } else {
      this.chain = '~~' + chain2.substr(0, chain2.length - 2);
    }
    return this;
  },
  finishChain() {
    let result = this.chain.substr(2);
    this.chain = '';
    return result;
  }
};

module.exports = chainMaker;