class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    //헤드를 첫번쨰로 설정
    let first = this.head;
    //꼬리 노드를 헤드 노드로 변경
    this.tail = this.head;
    //두번째 노드를 첫번째의 다음으로 설정
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }

  printList() {
    const array = [];
    let currnetNode = this.head;
    while (currnetNode !== null) {
      array.push(currnetNode.value);
      currnetNode = currnetNode.next;
    }
    return array;
  }
}

function solution(arr) {
  if (arr.length === 0) {
    return [];
  }
  const linkedList = new LinkedList(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    linkedList.append(arr[i]);
  }

  linkedList.reverse();
  return linkedList.printList();
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([3, 2, 1]));
