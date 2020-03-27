function chunkArray(arr, len) {
  // // Init chunked arr
  const chunkedArr = [];
  // Set index
  let i = 0;

  // // Loop while index is less than the array length
  while (i < arr.length) {
    // Slice out from the index to the index + the chunk length and push on to the chunked array
    chunkedArr.push(arr.slice(i, i + len));
    // Increment by chunk length
    i += len;
  }

  return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

///////////////////////////////////////////////////
///////////////////////////////////////////////////

function chunkArr(arr, len) {
  let chunkedArr = [];
  let i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArr;
}

console.log(chunkArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
