function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

//Worst case = O(n^2)
//Avg case = O(logn)
const array = [10, 5, 6, 3, 8, 2, 1,0];
const a = quickSort(array);

console.log(a);
