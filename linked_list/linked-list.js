/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _getitemByIndex(index) {
    let current = this.head
    let pointer = 0
    while (current !== null && pointer !== index) {
      current = current.next
      pointer++
    }
    return current
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val)

    if (this.head===null)  {
      this.head = newNode;
      
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    if(this.length === 0) {
      this.tail = this.head;
    }
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
   return this.removeAt(this.length-1)
  }



  /** shift(): return & remove first item. */

  shift() {
    return this. removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx > this.length || idx < 0){
      throw new Error("invailed index")
    }
    let targetNode = this._getitemByIndex(idx)
    return targetNode.val

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx > this.length || idx < 0){
      throw new Error("invailed index")
    }
   let targetNode = this._getitemByIndex(idx)
    targetNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length || idx < 0){
      throw new Error("invailed index")
    }
    
    if(idx === 0 ) return this.unshift(val)
    if(idx === this.length)  return this.push(val)
    
    let prev = this._getitemByIndex(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx > this.length || idx < 0){
      throw new Error ("Invailed Index")
    }
    // if idx === first index
    if(idx === 0){
      let removedNode = this.head
      this.head = this.head.next  
      this.length--
      if (this.length < 2) this.tail = this.head;
      return removedNode.val
    }
   
    let  prevNode = this._getitemByIndex(idx-1)
    // if idx === last index
    if(idx === this.length-1){
      let removedNode = this.tail
      prevNode.next = null
      this.tail = prevNode
      this.length --
      return removedNode.val

    }else{
      let removedNode = prevNode.next
      let newNextNode = prevNode.next.next
      prevNode.next = newNextNode
      removedNode.next = null
      this.length--
      return removedNode.val
    }

  }


  /** average(): return an average of all values in the list */

  average() {
    let sum = 0
    let current = this.head

    if(current === null) return 0
    while(current !== null ){
      sum += current.val
      current = current.next
    }
    return sum/this.length

  }
}



module.exports = LinkedList;
