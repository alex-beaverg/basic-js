function countCats(arr) {  
  let count = 0;
  for (let subArr of arr) {
    for (let elem of subArr) {
      if (elem === '^^') {
        count++;
      }
    }
  }
  return count;
};