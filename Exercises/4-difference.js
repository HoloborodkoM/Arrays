'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];

// Результат: [7, -2, 5]
const difference = (array1, array2) => {
  const res = [];
  for (const elem of array1) {
    if (!array2.includes(elem)) {
      res.push(elem);
    }
  }
  return res;
};
const result = difference(array1, array2);
console.log(result);
module.exports = { difference };
