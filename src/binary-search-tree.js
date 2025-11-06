const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addElement(this._root, data);

    function addElement(elem, data) {
      if (!elem) return new Node(data);
      if (elem.data === data) return elem;
      if (data < elem.data) elem.left = addElement(elem.left, data);
      if (data > elem.data) elem.right = addElement(elem.right, data);
      return elem;
    }
  }

  find(data) {
     return findElement(this._root, data);

    function findElement(elem, data) {
      if (!elem) return null;
      if (elem.data === data) return elem;
      if (data < elem.data) return findElement(elem.left, data);
      if (data > elem.data) return findElement(elem.right, data);
    }
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    this._root = removeElement(this._root, data);

    function removeElement(elem, data) {
      if (!elem) return null;
      if (data < elem.data) {
        elem.left = removeElement(elem.left, data);
        return elem;
      } else if (data > elem.data) {
        elem.right = removeElement(elem.right, data);
        return elem;
      } else {
        if (!elem.left && !elem.right) return null;
        if (!elem.left) return elem.right;
        if (!elem.right) return elem.left;

        let minRight = elem.right;
        while (minRight.left) minRight = minRight.left;
        elem.data = minRight.data;
        elem.right = removeElement(elem.right, minRight.data);

        return elem;
      }
    }
  }

  min() {
    if (!this._root) return null;
    let elem = this._root;
    while (elem.left) elem = elem.left;
    return elem.data;
  }

  max() {
    if (!this._root) return null;
    let elem = this._root;
    while (elem.right) elem = elem.right;
    return elem.data;
  }
}

module.exports = {
  BinarySearchTree
};