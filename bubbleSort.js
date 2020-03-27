// return arrary sorted with bubble sort least to greatest
// starts at begenning of array and loops through the whole thing
// compare each number to neighbor to right
// compares 2 numbers on each iteration
// largest number bubbles up to the top of the array on each iteration
// runs untill all numbers are sorted in correct order
// largest number bubbles up to the end of the array on first go makes loop shorter every time
// # of passes: array.length -1 passes
// on Each pass of the array we stop one element shorter

function bubbleSort(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]));
