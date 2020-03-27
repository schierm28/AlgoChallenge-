// Runs O (log n) runtime very performent
// Search for a given value (key) inside of a list (numArray)
// Recursion is when a function calls itself
// All recursive functions have two cases inside the codeblock
// recursive case is where function calls itself and the base case is where the function will not call the recursive function
// Can search through a huge array very quickly because the recursion keeps cutting it in half

//Factorial (!)
// 4! = 4 * 3 * 2 * 1 = 24

// a recursive function continues to call itself untill the base case is satisfied

//function factorial(num) {
//  if (num === 1) {
//    // base case
//    return num;
//  } else {
//   // recursive case
//    return num * factorial(num - 1); // 4 3 2 1   // 12 8 4 = 24
//  }
//}

//console.log(factorial(4));

///////////////////////////////////////////////////
// Given array must be sorted already from least to greatest

function binarySearch(numArray, key) {
  var middleIdx = Math.floor(numArray.length / 2); // With Binary Search we split array by middle index
  var middleElem = numArray[middleIdx];

  if (middleElem === key) return true;
  // base case
  else if (middleElem < key && numArray.length > 1) {
    // recursive case
    return binarySearch(numArray.splice(middleIdx, numArray.length), key); // recursive callback // cut numArray in half again from middle to end
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key); // recursive callback // cut numArray in half from  start to middle
  } else return false; // if the key is not present in our array we return false
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5));
