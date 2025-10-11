class Queue {
  constructor() {
    this.array = [];
  }

  enqueue(value) {
    this.array.push(value);
  }

  dequeue() {
    return this.array.shift();
  }

  peek() {
    return this.array[0];
  }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
console.log(queue);

queue.dequeue();
console.log(queue);
console.log(queue.peek());
