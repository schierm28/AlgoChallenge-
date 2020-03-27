function caesarCipher(str, num) {
  num = num % 26; // this workaround is incase we use big number 300 dont want it looping 300 times
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); // ['a','b','c'...]
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      // solve possible space problems
      newString += currentLetter; // our final result 'Zoo Keeper' has space = 'Bqq Mggrgt' uses space
      continue;
    }

    var currentIndex = alphabet.indexOf(currentLetter); // matching the currentLetter to alpabet string[i]
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26; // if > 25 restart loop from start of alphabet array
    if (newIndex < 0) newIndex = 26 + newIndex; // if < 0 restart loop from start of alphabet array
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  return newString;
}
console.log(caesarCipher('Zoo Keeper', 2)); // Bqq Mggrgt

////////////////////////////////////////////////////////////////////////
