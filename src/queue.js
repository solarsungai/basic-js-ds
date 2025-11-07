const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.first = null;
    this.last = null;
  }
  
  getUnderlyingList() {
    if (!this.first) return null;
    
    let current = this.first;
    const result = { value: current.value, next: null };
    let elem = result;
    
    while (current.next) {
      current = current.next;
      elem.next = { value: current.value, next: null };
      elem = elem.next;
    }

  return result;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if (!this.first) return;

    const value = this.first.value;
    this.first = this.first.next;

    if (!this.first) this.last = null;
    return value;
  }
}

module.exports = {
  Queue
};
