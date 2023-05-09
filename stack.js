class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.peek());
stack.pop();
stack.pop();
stack.print();
console.log(stack.isEmpty());
