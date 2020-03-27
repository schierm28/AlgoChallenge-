/* function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      // !==  -1 means counterpart exists in hashTable
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum); // always push currNum onto hashTable
  }

  return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7)); */

function twoSum(arr, sum) {
  var pairs = [];
  var hashTable = [];

  for (let i = 0; i < arr.length; i++) {
    var currentNum = arr[i];
    var counterPart = sum - currentNum;

    if (hashTable.indexOf(counterPart)) {
      pairs.push([currentNum, counterPart]);
    }
    hashTable.push(currentNum);
  }
  return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
