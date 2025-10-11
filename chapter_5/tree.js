class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.preOrderArr = [];
    this.inOrderArr = [];
    this.postOrderArr = [];
  }

  insert(value) {
    //현재 노드보다 작은건 왼쪽, 큰건 오른쪽
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        //왼쪽으로 넣는 경우
        if (value < currentNode.value) {
          //왼쪽 자식이 비어있을 때
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          // 왼쪽 자식이 있을 때
          currentNode = currentNode.left;
        } else {
          //오른쪽으로 넣는 경우
          if (!currentNode.right) {
            //오른쪽 자식이 비어있을 때
            currentNode.right = newNode;
            return;
          }
          //오른쪽 자식이 있을 때
          currentNode = currentNode.right;
        }
      }
    }
  }

  //전위 순회: 루트 -> 왼쪽 -> 오른쪽
  preOrder(node) {
    if (node !== null) {
      this.preOrderArr.push(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  //중위 순회: 왼쪽 -> 루트 -> 오른쪽
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      this.inOrderArr.push(node.value);
      this.inOrder(node.right);
    }
  }

  //후위 순회: 왼쪽 -> 오른쪽 -> 루트
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.postOrderArr.push(node.value);
    }
  }
}

const array = [7, 4, 9, 2, 5, 8, 11];
const tree = new BinaryTree();

array.forEach((num) => tree.insert(num));
tree.preOrder(tree.root);
tree.inOrder(tree.root);
tree.postOrder(tree.root);
console.log(tree);
