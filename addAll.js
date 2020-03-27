var arr = [1, 2, 3, 4];

function total(arr) {
  return arr.reduce((a, b) => a + b);
}
console.log(total([2, 4, 6, 8]));

///////////////////////////////////////////////////
///////////////////////////////////////////////////
var arr2 = [1, 2, 3, 4, 5];

function getTotal(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(getTotal(arr2));

///////////////////////////////////////////////////
///////////////////////////////////////////////////

var arr3 = [1, 2, 3, 4];

function totalSum(arr3) {
  let total = 0;
  arr3.forEach(num => {
    total += num;
  });
  return total;
}

console.log(totalSum(arr3));

///////////////////////////////////////////////////
///////////////////////////////////////////////////

var arr5 = [1, 2, 3, 4, 5, 6, 7];

function totalDivided(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let average = total / 2;
  return average;
}

console.log(totalDivided(arr5));

///////////////////////////////////////////////////
///////////////////////////////////////////////////
