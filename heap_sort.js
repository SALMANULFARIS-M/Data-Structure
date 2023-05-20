class HeapSort {
    constructor() {
      this.maxHeap = [];
    }
    buildUp(array) {
      this.maxHeap = [...array];
      let endIdx = this.maxHeap.length - 1;
      for (let i = this.parent(endIdx); i >= 0; i--) {
       this.shiftDown(i);
      }
      return this.maxHeap
    }
    shiftDown(currentIdx) {
      let endIdx = this.maxHeap.length - 1;
      let leftIdx = this.leftChild(currentIdx);
      while (leftIdx <= endIdx) {
          let idxToShift;
          let rightIdx = this.rightChild(currentIdx)
          if(rightIdx <= endIdx && this.maxHeap[rightIdx]>this.maxHeap[leftIdx] ){
              idxToShift = rightIdx
          }else{
              idxToShift = leftIdx
          }
          if(this.maxHeap[currentIdx] < this.maxHeap[idxToShift]){
                  this.swap(currentIdx,idxToShift)
                  currentIdx = idxToShift
                  leftIdx = this.leftChild(currentIdx)
          }else{
              return
          }
      }
    }
    swap(index1,index2){
      let temp = this.maxHeap[index1]
      this.maxHeap[index1] = this.maxHeap[index2]
      this.maxHeap[index2] = temp
    }
    sort(array){
      this.buildUp(array)
      for(let i=this.maxHeap.length-1;i>=0;i--){
          this.swap(0,i)
          this.shiftDown(0,i-1)
      }
      console.log(this.maxHeap);
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
  }
  const heap = new HeapSort()
  const arr =[35,2,1,5,63,73,23]
  
  heap.buildUp(arr)
  heap.display()