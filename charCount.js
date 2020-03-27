// Find how many times each letter is called in a string

function charCount(str) {
  var lowerCaseString = str.toLowerCase();
  var result = {};

  for (var i = 0; i < lowerCaseString.length; i++) {
    var current = lowerCaseString[i];
    if (/[a-z]/.test(current)) {
      if (result[current] > 0) {
        result[current]++;
      } else {
        result[current] = 1;
      }
    }
  }

  return result;
}
console.log(charCount('JoHHHHnn25434242NNNy'));
