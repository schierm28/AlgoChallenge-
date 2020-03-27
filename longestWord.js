// return the longest word

function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );
  return longestWordArr;

  // Check if more than one array val
  /* if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }*/
}

console.log(longestWord('what is the longest word googlerrrrrr googlerrrrrr '));
