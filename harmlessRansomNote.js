// Linear Time Complexity O(n)
// Because there are two loops which are (not) nested
// 'this is some noteText text'
// 'this is some of the magzineText text do you think there are enough words to make note?'

function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' '); // ['asdfds', 'bfsdf', 'cfsdf'...]
  var magazineArr = magazineText.split(' '); // ['asfdf', 'bsdfsd', 'csdfsd'...]
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0; //place word inside magazineObj hash table
    magazineObj[word]++; //
  });

  //after magazineArr.forEach is done we have our magazineObj = {'hey', 'you', 'hows' 'everything'}
  // all the words in our magainze
  // now we have to see if there are enough words for our note to be possible
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--; // subtract the word because we are using it for our note
      if (magazineObj[word] < 0) noteIsPossible = false; // if magzineObj does not have word not is impossible
    } else noteIsPossible = false;
  });
  return noteIsPossible;
}

console.log(
  harmlessRansomNote(
    'this is all',
    'this is all the magazine text in the magazine'
  )
);
