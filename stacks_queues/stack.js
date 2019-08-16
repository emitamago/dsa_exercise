const LinkedList = require ".././linked-list"
/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack extends LinkedList{
  constructor() {
    super()
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    super.push(val)
    return undefined

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.length === 0){
      throw new Error(" No element to remove")
    }
    return this.shift()
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0
  }
}

module.exports = Stack;
