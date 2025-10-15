// 탐험가의 보물지도
class Node {
  constructor(index, xpos) {
    this.xpos = xpos;
    this.index = index;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.preArr = [];
    this.postArr = [];
  }

  insert(index, xpos) {
    const newNode = new Node(index, xpos);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (xpos < currentNode.xpos) {
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
  }

  PreOrder(node) {
    if (node !== null) {
      this.preArr.push(node.index);
      this.PreOrder(node.left);
      this.PreOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.postArr.push(node.index);
    }
  }
}

function solution(treasureLocations) {
  const tree = new BinaryTree();
  //Y좌표를 기준으로 내림차순 정렬
  const sortedNodes = treasureLocations
    .map((node, i) => [...node, i + 1]) //보물 위치를 1부터 출력하기 위해 i+1
    .sort((a, b) => b[1] - a[1]); //Y좌표를 기준으로 내림차순

  sortedNodes.forEach((node) => {
    const [xpos, ypos, index] = node;
    //트리에 x좌표를 기준으로 집어넣는다.
    tree.insert(index, xpos);
  });
  // console.log("tree", tree);
  tree.PreOrder(tree.root);
  tree.postOrder(tree.root);

  return [tree.preArr, tree.postArr];
}

console.log(
  solution([
    [6, 4],
    [12, 6],
    [14, 4],
    [4, 6],
    [7, 2],
    [2, 4],
    [9, 7],
    [8, 1],
    [3, 1],
  ])
);
console.log(
  solution([
    [10, 5],
    [5, 7],
    [15, 7],
    [2, 3],
    [7, 3],
    [12, 3],
    [20, 3],
  ])
);
