class MaxHeap {
  constructor() {
    this.heap = [];
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    //초기: 현재 노드를 힙 배열에서 가장 나중에 들어온 요소로 설정.
    const current = this.heap[index];

    //루트 노드가 될때 까지 반복
    while (index > 0) {
      //현재 노드의 부모indx 설정.
      const parentIndex = Math.floor((index - 1) / 2);
      // 현재 값보다 부모 의 값이 크면 멈춤.
      if (this.heap[parentIndex] >= current) break;
      //현재 힙 배열의 값을 부모의 값과 교환
      this.heap[index] = this.heap[parentIndex];
      //index도 부모index로 바꿈.
      index = parentIndex;
    }
    //바꾼 index 배열의 값이 현재노드가 됨.
    this.heap[index] = current;
  }

  heapifyDown() {
    //초기 index값을 0으로 설정
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

function solution(T, R, times) {
  const heap = new MaxHeap();
  let totalTime = 0;
  let count = 0;

  for (const time of times) {
    heap.insert(time);

    totalTime += time;
    if (totalTime > T) {
      if (R > 0) {
        let max_save = heap.extractMax();
        totalTime -= max_save;
        R--;
      } else {
        return count;
      }
    }
    count++;
  }

  return count;
}

console.log(solution(12, 2, [6, 3, 5, 8, 2, 4]));
console.log(solution(5, 3, [10, 20, 30]));
