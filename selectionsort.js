function selectionSort(a) {
    for (let i = 0; i < a.length; i++) {
       let min = i;
       for (let j = i+1; j < a.length; j++) {
        if (a[j]<a[min]) {
            min = j
        }
        if (min !== i) {
            let temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
       }
    }
    return a
}

//Big O = O(n^2)

const array = [10, 5, 6, 3, 8, 2];
const a = selectionSort(array);

console.log(a);