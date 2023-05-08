function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nToSort = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > nToSort) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = nToSort;
  }
  return arr;
}
// Big O = O(n^2)

const array = [10, 5, 6, 3, 8, 2, 1];
const a = insertionSort(array);

console.log(a);
