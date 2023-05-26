class TreeNode {
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
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  contains(value) {
    return this.containsNode(this.root, value);
  }

  containsNode(node, value) {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      return this.containsNode(node.left, value);
    } else {
      return this.containsNode(node.right, value);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      } else if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      } else {
        const minValue = this.findMinValue(node.right);
        node.value = minValue;
        node.right = this.deleteNode(node.right, minValue);
      }
    }
    return node;
  }

  findMinValue(node) {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }

  postOrderTraversal() {
    this.postOrder(this.root);
  }

  postOrder(node) {
    if (node === null) {
      return;
    }
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }

  preOrderTraversal() {
    this.preOrder(this.root);
  }

  preOrder(node) {
    if (node === null) {
      return;
    }
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrderTraversal() {
    this.inOrder(this.root);
  }

  inOrder(node) {
    if (node === null) {
      return;
    }
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  findClosestValue(target) {
    let closest = this.root.value;
    let currentNode = this.root;

    while (currentNode !== null) {
      if (target === currentNode.value) {
        return target;
      }

      closest = Math.abs(target - currentNode.value) < Math.abs(target - closest)
        ? currentNode.value
        : closest;

      currentNode = target < currentNode.value ? currentNode.left : currentNode.right;
    }
    return closest;
  }


  isBst() {
    return this.isBstHelper(this.root, 0, Infinity)
  }
  isBstHelper(root, min, max) {
    if (root == null)
      return true

    if (root.value < min || root.value > max) {
      return false
    }
    return (this.isBstHelper(root.left, min, root.value - 1) &&
      this.isBstHelper(root.right, root.value + 1, max))
  }

   findMinimumValue(root) {
    if (root === null) {
      return null;
    }
  
    let current = root;
    while (current.left !== null) {
      current = current.left;
    }
  
    return current.value;
  }

}

// Workout 1 - Create a Binary Search Tree
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

console.log(bst.isbst());
// Perform Traversals
console.log("Post-order Traversal:");
bst.postOrderTraversal(); // Output: 4, 7, 6, 1, 3, 13, 14, 10, 8

console.log("Pre-order Traversal:");
bst.preOrderTraversal(); // Output: 8, 3, 1, 6, 4, 7, 10, 14, 13

console.log("In-order Traversal:");
bst.inOrderTraversal(); // Output: 1, 3, 4, 6, 7, 8, 10, 13, 14

// Perform Deletion and check Contains
console.log("Contains 6:", bst.contains(6)); // Output: true
bst.delete(6);
console.log("Contains 6:", bst.contains(6)); // Output: false



