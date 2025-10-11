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
    this.length = 1;
  }
  //앞에 추가
  prepend(value) {
    const newNode = new Node(value);
    //새로운 노드의 다음 노드는 헤드 노드로 정의
    newNode.next = this.head;
    //헤드의 이전도느도 newNode에 추가. => doublyLinkedList에서는
    //헤드 노드의 이전 노드는 새로운 노드
    this.head.prev = newNode;
    //헤드 노드는 새로운 노드
    this.head = newNode;
    //길이 한개 추가
    this.length++;
  }
  //뒤에 추가
  append(value) {
    const newNode = new Node(value);
    //새로운 노드 이전 노드는 tail로 정의
    newNode.prev = this.tail;
    //tail의 다음 노드는 새로운 노드
    this.tail.next = newNode;
    //꼬리 노드는 새로운 노드
    this.tail = newNode;
    //길이 한개 추가
    this.length++;
  }

  findNode(index) {
    let count = 0;
    //현재 노드는 헤드 노드
    let currnetNode = this.head;
    //카운트가 인덱스랑 다르면 계속 반복
    while (count !== index) {
      //다음 노드로 이동
      currnetNode = currnetNode.next;
      //카운트 증가
      count++;
    }
    return currnetNode;
  }

  insert(index, value) {
    //인덱스가 없으면
    if (index === 0) {
      //맨 앞에 추가
      this.prepend(value);
      return;
    }
    //인덱스가 길이보다 길면
    if (index >= this.length) {
      //맨 뒤에 추가
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    //이전노드 찾기
    const prevNode = this.findNode(index - 1);
    //다음 노드 설정
    const nextNode = prevNode.next;
    ///새로운 노드의 다음 노드는
    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
  }

  remove(index) {
    //젤 처음 노드 지우기
    if (index === 0) {
      //리스트에 한개만 있을 때
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        //
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.length--;
      return;
    }

    //인덱스가 길이보다 크면 지울 것이 없으므로 return
    if (index >= this.length) return;

    //중간 노드 지우기
    //이전노드 찾기
    const prevNode = this.findNode(index - 1);
    //지울 노드 설정 (이전 노드의 다음 노드)
    const removeNode = prevNode.next;
    // 다음 노드 설정 (지울 노드의 다음 노드)
    const nextNode = removeNode.next;
    //이전 노드의 다음 노드는 넥스트 노드로 연결
    prevNode.next = nextNode;

    //만약 넥스트 노드가 있으면
    if (nextNode) {
      //nextNode의 이전 노드는 prevNode
      nextNode.prev = prevNode;
      //넥스트 노드가 없으면
    } else {
      //꼬리는 prevNode
      this.tail = prevNode;
    }
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

const linkedList = new DoublyLinkedList("Dora");

linkedList.append("Sindy");
linkedList.append("Mary");
linkedList.prepend("siyool");
linkedList.printList();
linkedList.remove(1);
linkedList.printList();
