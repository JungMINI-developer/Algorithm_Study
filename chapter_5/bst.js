class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  delete(value) {
    //현재 탐색중인 노드 루트부터 시작.
    let current = this.root;

    let parent = null;

    //현재 탐색중인 노드가 존재하고 탐색중인 노드의 값과 삭제할 값이 다르면 반복.
    while (current && current.value !== value) {
      parent = current;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    //탐색중인 노드가 없으면 삭제할 값이 트리에 없으므로 종료.
    if (!current) return;

    //
    const replaceChild = (parent, current, newNode) => {
      //만약 부모가 없으면 루트노드에 연결
      if (!parent) {
        this.root = newNode;
        //만약 부모의 왼쪽 노드와 같으면
      } else if (parent.left === current) {
        //왼쪽에 삽입
        parent.left = newNode;
      } else {
        //오른쪽 노드와 같으면 오른쪽에 삽입
        parent.right = newNode;
      }
    };

    // case1) 삭제할 노드가 리프노드
    if (!current.left && !current.right) {
      replaceChild(parent, current, null);
      // case2) 삭제할 노드가 자식 1개
    } else if (!current.left || !current.right) {
      //왼쪽 아니면 오른쪽만 존재할 때 child를 존재하는 노드로 설정
      const child = current.left || current.right;
      replaceChild(parent, current, child);
    } else {
      // case3) 삭제할 노드가 자식 2개
      // 1. 삭제할 노드의 값을 대체할 노드부터 찾는다.
      let replacementParentNode = current;
      //대체할 노드
      let replacementNode = current.right;

      //대체할 노드 왼쪽이 존재할 때 까지 반복
      while (replacementNode.left) {
        //이동하기 전에 부모를 기억하게함.
        replacementParentNode = replacementNode;
        //오른쪽 서브트리의 가장 작은 값을 가르킴
        replacementNode = replacementNode.left;
      }

      // 2.삭제대상 값을 대체노드 값으로 바꿔준다.
      current.value = replacementNode.value;

      // 3.실제로 replacementNode를 트리에서 제거
      //후계자 노드가 부모의 왼쪽 자식인지 확인
      if (replacementParentNode.left === replacementNode) {
        replacementParentNode.left = replacementNode.right;
      } else {
        replacementParentNode.right = replacementNode.right;
      }
    }
  }
}

const bst = new BinarySearchTree();

[10, 5, 15, 3, 7, 18].forEach((v) => bst.insert(v));
console.log(bst);
bst.delete(10);
console.log(bst);
