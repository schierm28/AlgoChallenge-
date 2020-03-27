//1st way longer covers spacing and extra characters

function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split(''); // ['m','a','d','a','m']
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(''); //['a','b','c','d']

  var lettersArr = []; // store valid letters in here
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  }); // now we have our array with valid letters that passed the test  a - z

  return lettersArr.join('') === lettersArr.reverse().join(''); // 'madam' === 'madam'
}

console.log(isPalindrome("Madam, I'm Adam")); //Madam, I'm Adam

///////////////////////////////////////////////////
///////////////////////////////////////////////////

const palindrome = str => {
  str = str.toLowerCase();
  return (
    str ===
    str
      .split('') // ['a','b','c'...]
      .reverse() // ['c','b','a'...]
      .join('') // 'cba'
  );
};

console.log(palindrome('racecar'));
