'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const mas = [];
  for (const elem of array) {
    if (!mas.includes(elem)) {
      mas.push(elem);
    }
  }
  return mas;
};

module.exports = { unique };
