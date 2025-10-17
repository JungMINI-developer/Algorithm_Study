class MaxHeap {
  constructor() {
    this.heap = [];
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const current = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] >= current) break;

      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = current;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const current = this.heap[0];

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let max = index;

      if (left < length && this.heap[left] > this.heap[max]) {
        max = left;
      }
      if (right < length && this.heap[right] > this.heap[max]) {
        max = right;
      }
      if (max === index) {
        break;
      }

      this.heap[index] = this.heap[max];
      index = max;
    }
    this.heap[index] = current;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }
    const max = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return max;
  }
}

const heap = new MaxHeap();
heap.insert(9);
heap.insert(44);
heap.insert(22);
heap.insert(66);
heap.insert(1);

console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
