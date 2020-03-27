function reverseWords(string) {
  var wordsArr = string.split(' '); // ['There', 'are', 'spaces', 'between', 'these', 'words']
  var reversedWordsArr = []; //stores our reversed words

  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      // nested for loop
      // -1 we start from end of  each individual word // i-- we loop backwords from end of the word
      reversedWord += word[i]; // ['There'] = ['erehT']
    }
    reversedWordsArr.push(reversedWord);
  });
  return reversedWordsArr.join(' ');
}

// Reverse letters in each word without reversed order of words
console.log(reverseWords('There are spaces between these words'));

function reverseInPlace(str) {
  return str
    .split(' ') // ['cat', 'dog', 'skunk']
    .reverse() // ['skunk' 'dog', 'cat']
    .join(' ') // 'skunk, dog, cat
    .split('') //['s''k'u''n''k']
    .reverse()
    .join('');
}

console.log(reverseInPlace('there is a cat here'));
