import { isModuleDeclaration } from "@babel/types";

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */
    push() {
        let newNode = new Node
        if(this.length===0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
    }

    /** pop(): return & remove last item. */

    pop() {
        return this.removeAt(this.length - 1)

    }
    /** shift(): return & remove first item. */

    shift() {
        return this.removeAt(0)
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {

    }
    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {

    }
    /** average(): return an average of all values in the list */

    average() {
    }
}

module.exports = DoublyLinkedList