// 1st way
const fizzBuzz = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else console.log(i);
  }
};

//console.log(fizzBuzz(20));

//2nd way
/*function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else console.log(i);
  }
}
fizzBuzz(20); */

///////////////////////////////////////////////////
///////////////////////////////////////////////////

function fizzBuzz2(num) {
  for (var x = 0; x <= num; x++) {
    switch (true) {
      case x % 5 === 0 && x % 3 === 0:
        console.log('FizzBuzz');
        break;
      case x % 3 === 0:
        console.log('Fizz');
        break;
      case x % 5 === 0:
        console.log('Buzz');
        break;
      default:
        console.log(x);
        break;
    }
  }
}

//console.log(fizzBuzz2(20));
