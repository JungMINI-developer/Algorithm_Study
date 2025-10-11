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
    let current = this.root;
    let parent = null;

    while (current && current.value !== value) {
      parent = current;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (!current) return;

    const replaceChild = (parent, current, newNode) => {
      if (!parent) {
        this.root = newNode;
      } else if (parent.left === current) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
    };

    // case1) 삭제할 노드가 리프노드
    if (!current.left && !current.right) {
      replaceChild(parent, current, null);
      // case2) 삭제할 노드가 자식 1개
    } else if (!current.left || !current.right) {
      const child = current.left || current.right;
      replaceChild(parent, current, child);
    } else {
      // case3) 삭제할 노드가 자식 2개
      // 1. 삭제할 노드의 값을 대체할 노드부터 찾는다.
      let replacementParentNode = current;
      let replacementNode = current.right;

      while (replacementNode.left) {
        replacementParentNode = replacementNode;
        replacementNode = replacementNode.left;
      }

      // 2.삭제대상 값을 대체노드 값으로 바꿔준다.
      current.value = replacementNode.value;

      // 3.실제로 replacementNode를 트리에서 제거
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
