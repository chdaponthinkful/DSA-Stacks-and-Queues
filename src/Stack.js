class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new Node(value, this.top);
  }

  pop() {
    if (!this.top) {
      // Handle the case when the stack is empty
      return null;  
    }

    const popped = this.top;
    this.top = popped.next;
    return popped.value;
  }
}

module.exports = Stack;