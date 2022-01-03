'use strict';

const removeElements = (array, ...items) => {
  for (const value of items) {
    const index = array.indexOf(value);
    if (index !== -1) array.splice(index, 1);
  }
};

module.exports = { removeElements };
