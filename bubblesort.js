function bubbleSort(array) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        swap = true;
      }
    }
  } while (swap);
  return array;
}
// Big O = O(n^2)

const array = [10, 5, 6, 3, 8, 2, 1,0];
const a = bubbleSort(array);

console.log(a);
