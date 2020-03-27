// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

/*function flattenArray(arrays) {
  return arrays.reduce((a, b) => a.concat(b));
}
console.log(flattenArray([[2, 3, 4], [4, 5, 6], [95, 5, 5]]));

function flattenArr(arrs) {
  return arrs.reduce((a, b) => a.concat(b));
}
reduce();
console.log(flattenArr([[2, 3, 4], [4, 5, 6], [95, 5, 5]]));*/

function flatenArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
}
console.log(flatenArray([[2, 3, 4], [4, 5, 6], [95, 5, 5]]));

///////

// SOLUTION 2
// return [].concat.apply([], arrays);
// SOLUTION 3
// return [].concat(...arrays);
// SOLUTION 4  return arrays.flat(Infinity);
