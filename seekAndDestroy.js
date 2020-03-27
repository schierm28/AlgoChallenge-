// remove args from array

function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy([1, 2, 2, 3, 'fun', 7], 1, 3));
