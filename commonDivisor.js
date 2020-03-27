function greatestCommonDivisor(a, b) {
  var divisor = 2; // 3 , 4 5 6 7
  var greatestDivisor = 1; //2 7

  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2) return 1;

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

console.log(greatestCommonDivisor(14, 21));
