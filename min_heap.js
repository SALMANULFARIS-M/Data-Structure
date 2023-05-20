class MinHeap {
    constructor() {
      this.minHeap = [];
    }
    buildUp(arr) {
      this.minHeap = [...arr];
      let endIdx = this.minHeap.length - 1;
      for (let i = this.parent(endIdx); i >= 0; i--) {
        this.shiftDown(i);
      }
    }
    shiftDown(currIdx,endIdx = this.minHeap.length - 1) {
      let leftIdx = this.leftChild(currIdx);
      while (leftIdx <= endIdx) {
        let rightIdx = this.rightChild(currIdx);
        let idxToShift;
        if (
          rightIdx <= endIdx &&
          this.minHeap[rightIdx] < this.minHeap[leftIdx]
        ) {
          idxToShift = rightIdx;
        } else {
          idxToShift = leftIdx;
        }
        if (this.minHeap[currIdx] > this.minHeap[idxToShift]) {
          this.swap(currIdx, idxToShift);
          currIdx = idxToShift;
          leftIdx = this.leftChild(currIdx);
        }else{
          return
        }
      }
    }
    shiftUp(currentIdx) {
      let parentIdx = this.parent(currentIdx);
      while (
        currentIdx > 0 &&
        this.minHeap[parentIdx] > this.minHeap[currentIdx]
      ) {
        this.swap(currentIdx, parentIdx);
        currentIdx = parentIdx;
        parentIdx = this.parent(currentIdx);
      }
    }
    insert(value) {
      this.minHeap.push(value);
      this.shiftUp(this.minHeap.length - 1);
    }
    remove() {
      this.swap(0, this.minHeap.length - 1);
      this.minHeap.pop();
      this.shiftDown(0);
    }
    swap(currentIdx, shiftToIdx) {
      let temp = this.minHeap[currentIdx];
      this.minHeap[currentIdx] = this.minHeap[shiftToIdx];
      this.minHeap[shiftToIdx] = temp;
    }
    parent(currentIdx) {
      return Math.floor(currentIdx - 1 / 2);
    }
    leftChild(currentIdx) {
      return 2 * currentIdx + 1;
    }
    rightChild(currentIdx) {
      return 2 * currentIdx + 2;
    }
    display() {
      for (let i = 0; i < this.minHeap.length; i++) {
        console.log(this.minHeap[i]);
      }
    }
  }

  const heap = new MinHeap();
  const arr = [23, 5, 1, 2, 5, 64];
//   heap.buildUp(arr);
//   heap.insert(10);
  // heap.remove();
  heap.sort(arr)
  heap.display();