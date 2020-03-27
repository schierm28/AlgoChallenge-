// IFFY Immedietly invoked function expression
// function is executed right after it is created

console.log(
  (function doubleNumber(num) {
    return num * 2;
  })(10)
);

(function() {
  function getTotal(a, b) {
    return a + b;
  }

  var $ = 'currency';

  if (true) console.log('hello world');
})(2, 2);
