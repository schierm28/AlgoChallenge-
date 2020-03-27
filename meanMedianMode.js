function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
}

function getMean(array) {
  var sum = 0;

  array.forEach(num => {
    sum += num;
  });

  var mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  var median;

  if (array.length % 2 !== 0) {
    // if there are odd amount of numbers in our array grab middle element
    median = array[Math.floor(array.length / 2)]; // gives us index of middle element
  } else {
    // if our array has even number of elements
    var mid1 = array[array.length / 2 - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array) {
  var modeObj = {}; //hash table

  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0; // add our number in modeObj
    modeObj[num]++; // increment by 1 everytime we come across number
  });

  // create array of modes
  var maxFrequency = 0; // how often current mode shows up
  var modes = []; // holds all of our modes
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      // we reset our modes [] with most frequen numbrer
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

console.log(meanMedianMode([9, 10, 23, 10, 23, 9]));
