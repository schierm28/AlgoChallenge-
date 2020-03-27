// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
// -1 is a tree

function sortByHeight(arr) {
  let arr1 = []; // 0
  let arr2 = [];

  arr.forEach((value, i) => (value === -1 ? arr1.push(i) : arr2.push(value)));
  console.log(arr1);
  console.log(arr2);

  let sortedArr = arr2.sort((a, b) => a - b);
  console.log(sortedArr);

  arr1.forEach((val, i) => sortedArr.splice(arr1[i], 0, -1));
  return sortedArr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
