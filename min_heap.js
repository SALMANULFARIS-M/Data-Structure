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
    shiftUp(currIdx) {
      let parentIdx = this.parent(currIdx);
      while (
        currIdx > 0 &&
        this.minHeap[parentIdx] > this.minHeap[currIdx]
      ) {
        this.swap(currIdx, parentIdx);
        currIdx = parentIdx;
        parentIdx = this.parent(currIdx);
      }
    }
    insert(val) {
      this.minHeap.push(val);
      this.shiftUp(this.minHeap.length - 1);
    }
    remove() {
      // romevo from top and shiftdown
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
      for (let j = 0; j < this.minHeap.length; j++) {
        console.log(this.minHeap[j]);
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