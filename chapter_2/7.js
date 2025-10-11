class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.selected = null;
    this.stack = [];
    this.length = 1;
  }
  //앞에 추가
  prepend(value) {}

  //뒤에 추가
  append(value, cursor) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    if (cursor == value) {
      this.selected = newNode;
    }
  }
  move(direction, count) {
    let currnetNode = this.selected;
    for (let i = 0; i < count; i++) {
      currnetNode = currnetNode[direction];
    }
    this.selected = currnetNode;
  }

  //삭제
  delete() {
    this.stack.push(this.selected);
    const prevNode = this.selected.prev;
    const nextNode = this.selected.next;

    if (prevNode) {
      prevNode.next = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
      this.selected = nextNode;
    } else {
      this.selected = prevNode;
    }
  }
  //복구
  undo() {
    const undoNode = this.stack.pop();
    const prevNode = undoNode.prev;
    const nextNode = undoNode.next;
    if (prevNode) {
      prevNode.next = undoNode;
    }
    if (nextNode) {
      nextNode.prev = undoNode;
    }
  }
}

function solution(n, k, cmd) {
  //result 값을 길이가 n이고 요소가 0인 배열로 만들기.
  const result = Array.from({ length: n }, () => "0");

  const linkedList = new DoublyLinkedList(0);
  for (let i = 1; i < n; i++) {
    linkedList.append(i, k);
  }
  for (const command of cmd) {
    const [action, count] = command.split(" ");
    if (action === "R") {
      linkedList.move("next", count);
    }
    if (action === "L") {
      linkedList.move("prev", count);
    }
    if (action === "D") {
      linkedList.delete();
    }
    if (action === "U") {
      linkedList.undo();
    }
  }
  linkedList.stack.forEach((node) => (result[node.value] = "X"));

  return result.join("");
}

console.log(solution(5, 2, ["D", "D", "D"]));
console.log(solution(6, 2, ["D", "R 2", "D", "U"]));
console.log(solution(8, 3, ["D", "D", "L 2", "D", "U"]));
