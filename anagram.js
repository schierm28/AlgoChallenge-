//Solve using Frequency COunter O(n) runtime
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('cat', 'tac'));

///////////////////////////////////////////////////
///////////////////////////////////////////////////

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let unique = {};

  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    if (unique[letter]) {
      unique[letter] += 1;
    } else {
      unique[letter] = 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    if (!unique[letter]) {
      return false;
    } else {
      unique[letter] -= 1;
    }
  }
  return true;
}

console.log(isAnagram('cat', 'dog'));

/////////////////////////////////////////
