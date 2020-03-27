// runtime O(n) linear very good
// index: index of number in fibonacci sequence
// cache: an array used as memory
// Memoization:
//-Check to see if number already exists in cache
//-If number is in cahce use that number
//-If number is not in cache calculate it and put it in cache so it can be used multiple times in the future

function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  //base case
  else {
    if (index < 3) return 1;
    // recursive case
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

console.log(fibMemo(500));
