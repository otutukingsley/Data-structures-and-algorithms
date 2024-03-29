//Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.


var setZeroes = function (matrix) {
  let rowSet = new Set();
  let colSet = new Set();

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (matrix[j][i] === 0) {
        rowSet.add(j);
        colSet.add(i);
      }
    }
  }

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (rowSet.has(j) || colSet.has(i)) {
        matrix[j][i] = 0;
      }
    }
  }

  return matrix;
};
