
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == null) return [];
  for(let i = 1; i < matrix.length; i +=2) {
          matrix[i].reverse();
      }
      let res = matrix.flat();
      return res;
  }
