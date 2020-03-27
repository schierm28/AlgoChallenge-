function removeDuplicate(arr) {
  var exists = {}; // stores our key value pairs example:   1: true, 3: true
  var outArr = []; // 1 3 5

  for (var i = 0; i < arr.length; i++) {
    var elm = arr[i];
    if (!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;
}

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));

///////////////////////////////////////////////////
///////////////////////////////////////////////////

const arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5];

function removeDuplicates(arr) {
  let unique = {};

  arr.forEach(num => {
    if (!unique[num]) {
      unique[num] = true;
    }
  });

  return Object.keys(unique);
}

console.log(removeDuplicates(arr));

///////////////////////////////////////////////////
///////////////////////////////////////////////////

let arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5];

function removeDuplicates(arr) {
  let newArr = new Set(arr);
  return newArr;
}

console.log(removeDuplicates(arr));

///////////////////////////////////////////////////
///////////////////////////////////////////////////

let arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5];

function removeDuplicates(arr) {
  return arr.filter((a, b) => arr.indexOf(a) === b);
}

console.log(removeDuplicates(arr));
