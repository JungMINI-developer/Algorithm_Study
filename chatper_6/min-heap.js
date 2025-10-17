class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyup();
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyup() {
    //초기 index = 힙배열의 길이.
    let index = this.heap.length - 1;

    //index가 0보다 크면 반복
    while (index > 0) {
      //부모 인덱스 구하기.
      const parentIndex = Math.floor((index - 1) / 2);

      //부모의 배얄이 현재 배열보다 작으면 while문 종료
      if (this.heap[parentIndex] <= this.heap[index]) break;
      //배열 값 swap
      this.swap(parentIndex, index);
      //index 값 바꿔주기.
      index = parentIndex;
    }
  }
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let min = index;

      if (left < length && this.heap[left] < this.heap[min]) {
        min = left;
      }
      if (right < length && this.heap[right] < this.heap[min]) {
        min = right;
      }

      if (min === index) break;

      this.swap(index, min);
      index = min;
    }
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.heapifyDown();
    return min;
  }
}

const heap = new MinHeap();
heap.insert(9);
heap.insert(44);
heap.insert(22);
heap.insert(66);
heap.insert(1);
console.log(heap);

console.log(heap.extractMin());
