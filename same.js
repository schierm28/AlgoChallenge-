//bad long run time O(n^2) quadratic time because of nested loop indexOf inside of for loop
// if we have 1000 outer loop 1000 inner loop would be 1 million iterations!

//FrequencyCOunter pattern
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    //console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

//console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

//good fast run time
// if we have 1000 for 2 loops here will only be 2000
// linear time O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}; // count frequency of individual values in array
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // 1 2 3 4 5 keys
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; //1 2 3 4 5 keys
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(same([1, 1, 2, 3, 4], [1, 1, 4, 9, 16]));
