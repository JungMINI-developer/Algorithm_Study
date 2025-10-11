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

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  findNode(index) {
    let count = 0;
    let currnetNode = this.head;
    while (count !== index) {
      if (!currnetNode.next) {
        console.log("존재하지 않습니다.");
        return;
      } else {
        currnetNode = currnetNode.next;
        count++;
      }
    }
    return currnetNode;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    const prevNode = this.findNode(index - 1);
    const nextNode = prevNode.next;
    newNode.next = nextNode; //2번 과정
    preNode.next = newNode; //3번 과정
    this.length++;
  }

  remove(index) {
    const prevNode = this.findNode(index - 1);
    const removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;
  }

  printList() {
    const array = [];
    let currnetNode = this.head;
    while (currnetNode !== null) {
      array.push(currnetNode.value);
      currnetNode = currnetNode.next;
    }
    console.log(array);
  }
}

const linkedList = new LinkedList("Dora");
linkedList.append("sindy");
linkedList.append("Mary");
linkedList.prepend("Jung");
// linkedList.remove(2);
console.log("linkedList:", linkedList);
linkedList.printList();
console.log(linkedList.findNode(5));
