'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue;

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {

  constructor(root=null) {
    this.root = root;
  }

  breadthFirst(tree) {

    const arr = [];
    const queue = new Queue();

    function _breadthFirst(root) {

      queue.enqueue(root);

      while (!queue.isEmpty()) {
        let front = queue.dequeue();
        arr.push(front.value);

        if (front.left) {
          queue.enqueue(front.left);
        }

        if (front.right) {
          queue.enqueue(front.right);
        }
      }

    }

    _breadthFirst(tree.root);
    return arr;

  }

  preOrder() {

    const arr = [];

    function _preOrder(root) {
      if (!root) {
        return;
      }

      arr.push(root.value);

      if (root.left) {
        _preOrder(root.left);
      }

      if (root.right) {
        _preOrder(root.right);
      }
    }

    _preOrder(this.root);
    return arr;

  }

  inOrder() {

    const arr = [];

    function _inOrder(root) {
      if (!root) {
        return;
      }

      if (root.left) {
        _inOrder(root.left);
      }

      arr.push(root.value);

      if (root.right) {
        _inOrder(root.right);
      }
    }

    _inOrder(this.root);
    return arr;
  }

  postOrder() {

    const arr = [];

    function _postOrder(root) {
      if (!root) {
        return;
      }

      if (root.left) {
        _postOrder(root.left);
      }

      if (root.right) {
        _postOrder(root.right);
      }

      arr.push(root.value);
    }

    _postOrder(this.root);
    return arr;

  }

  findMaximumValue() {
    if (!this.root) {
      throw new Error('Cannot find value in an empty tree');
    }

    let maxValue = this.root.value;

    function _maxValue(root) {
      if (!root) {
        return;
      }

      if (root.value > maxValue) {
        maxValue = root.value;
      }

      if (root.left) { _maxValue(root.left); }
      if (root.right) { _maxValue(root.right); }
    }

    _maxValue(this.root);
    return maxValue;
  }


}

class BinarySearchTree extends BinaryTree {

  add(value) {

    let newNode  = new Node(value);
    let current = this.root;

    while(current) {

      if (newNode.value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          break;
        }
      } else if (newNode.value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          break;
        }
      }

    }

  }

  contains(value) {

    let current = this.root;

    while(current) {

      if (value === current.value) {
        return true;
      }

      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      } else if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      }

    }
  }

}


module.exports = { Node, BinaryTree, BinarySearchTree };
