function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(l, r) {
  const sorted = [];
  while (l.length && r.length) {
    if (l[0] <= r[0]) {
      sorted.push(l.shift());
    } else {
      sorted.push(r.shift());
    }
  }
  return [...sorted, ...l, ...r];
}

//Big O= O(nlogn)

const array = [10, 5, 6];
const a = mergeSort(array);

console.log(a);
