function partition(array, low, high) {
  // type your code in here
  let pivotIdx = low;
  for (let i = low + 1; i <= high; i++) {
    if (array[i] < array[low]) {
      [array[i], array[pivotIdx + 1]] = [array[pivotIdx + 1], array[i]];
      pivotIdx++;
    }
  }
  [array[low], array[pivotIdx]] = [array[pivotIdx], array[low]];
  return pivotIdx;
}

function quicksort(array, low = 0, high = array.length - 1) {
  // type your code here
  if (low < high) {
    let pivotIdx = partition(array, low, high);
    quicksort(array, low, pivotIdx - 1);
    quicksort(array, pivotIdx + 1, high);
  }
  return array;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
