// Check to see if its a prime number
function isPrime(n) {
  var divisor = 2; // 3 // 4 // 5
  while (n > divisor) {
    // 5 > 2 true //
    if (n % divisor == 0) {
      //
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}

console.log(isPrime(5));

//console.log(25 % 5);

///////////////////////////////////////////////////
///////////////////////////////////////////////////

//Find all the prime factors of a number
function primeFactors(n) {
  var factors = []; //
  var divisor = 2; // 2

  while (n > 2) {
    //5
    if (n % divisor == 0) {
      //5 5
      factors.push(divisor); // 2
      n = n / divisor; // 5
    } else {
      divisor++;
    }
  }
  return factors;
}

//console.log(primeFactors(10));

//console.log(25 % 5);
