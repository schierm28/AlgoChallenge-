//return all prime numbers up
// to 'num' in an array
// 20 should return [2, 3, 5, 7, 11, 13, 17, 19]

function sieveOfEratosthenes(n) {
  var primes = [];
  for (var i = 0; i <= n; i++) {
    // primes array contains all [i] leading up to n
    primes[i] = true;
  }

  primes[0] = false; // 0 and 1 can never be prime numbers
  primes[1] = false;
  // outer loop
  for (var i = 2; i <= Math.sqrt(n); i++) {
    // start at 2 because 0 1 index are never primes
    for (j = 2; i * j <= n; j++) {
      // nested loop mark multiles past as false
      primes[i * j] = false;
    }
  }

  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
}

console.log(sieveOfEratosthenes(25));
