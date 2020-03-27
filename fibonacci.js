// recursion used here
// Fibonacci Sequence 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
// Bad O(2^n) runtime

function fibonacci(position) {
  if (position < 3) return 1;
  // we know that first two positions of fibonacci are 1 1
  //base case
  else return fibonacci(position - 1) + fibonacci(position - 2); //recursive case
}

console.log(fibonacci(6));
