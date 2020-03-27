function reverseInt(int) {
  const revString = int
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(revString);
}

console.log(reverseInt(227));

///////////////////////////////////////////////////
///////////////////////////////////////////////////
