const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {    
  constructor(f) {
    this.f = f;      
  }  
  encrypt(message, key) {    
    if (message === undefined || key === undefined) throw Error;
    let result = '';
    let alpha = [];
    let ab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let abeth = 'ZABCDEFGHIJKLMNOPQRSTUVWXY';
    let abethNew = '';
    for (let i = 0; i < abeth.length; i++) {
        alpha.push(abeth.charAt(i));
      alpha[i] = [];
      abethNew = abeth.slice(i+1) + abeth.slice(0, i+1);
        for (let j = 0; j < abeth.length; j++) {       
        alpha[i].push(abethNew.charAt(j));
      }
    }   
    let password = '';
    let key0 = '';
    for (let i = 0; i < message.length; i++) {
        key0 += key;
    }
    key0 = key0.toUpperCase().slice(0, message.length);
    for (let i = 0; i < message.length; i++) {
        if (message.toUpperCase().codePointAt(i) > 64 && message.toUpperCase().codePointAt(i) < 91) {   
        password += key0.charAt(i);
      } else {
        password += message.charAt(i);
        key0 = ' ' + key0;
      }
    }   
    for (let i = 0; i < message.length; i++) {
        if (message.toUpperCase().codePointAt(i) > 64 && message.toUpperCase().codePointAt(i) < 91) {
                result += alpha[ab.indexOf(String(message.toUpperCase().charAt(i)))][ab.indexOf(String(password.toUpperCase().charAt(i)))];
      } else {
        result += message.charAt(i);
      }
    }   
    if (this.f === false) {
      let revResult = '';
      for (let char of result) {
        revResult = char + revResult;
      }
      return revResult;
    } else return result;
  }  
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw Error;
    let result = '';
    let alpha = [];
    let ab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let abeth = 'ZABCDEFGHIJKLMNOPQRSTUVWXY';
    let abethNew = '';
    for (let i = 0; i < abeth.length; i++) {
        alpha.push(abeth.charAt(i));
      alpha[i] = [];
      abethNew = abeth.slice(i+1) + abeth.slice(0, i+1);
        for (let j = 0; j < abeth.length; j++) {       
        alpha[i].push(abethNew.charAt(j));
      }
    }   
    let password = '';
    let key0 = '';
    for (let i = 0; i < message.length; i++) {
        key0 += key;
    }
    key0 = key0.toUpperCase().slice(0, message.length);
    for (let i = 0; i < message.length; i++) {
        if (message.toUpperCase().codePointAt(i) > 64 && message.toUpperCase().codePointAt(i) < 91) {   
        password += key0.charAt(i);
      } else {
        password += message.charAt(i);
        key0 = ' ' + key0;
      }
    }   
    for (let i = 0; i < message.length; i++) {
        if (message.toUpperCase().codePointAt(i) > 64 && message.toUpperCase().codePointAt(i) < 91) {
          result += alpha[0][alpha[ab.indexOf(String(password.toUpperCase().charAt(i)))].indexOf(String(message.toUpperCase().charAt(i)))];
      } else {
        result += message.charAt(i);
      }
    }   
    if (this.f === false) {
      let revResult = '';
      for (let char of result) {
        revResult = char + revResult;
      }
      return revResult;
    } else return result;
  }
}

module.exports = VigenereCipheringMachine;