class Stack {
  constructor() {
    //생성자에서 초기화
    this.array = []; //빈배열 생성
  }
  push(value) {
    this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1]; //stack의 가장 위에 있는 요소를 가져옴
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

console.log("Stack:", stack);
stack.pop();
console.log("Stack:", stack);
const top = stack.peek();
console.log(top);
