class Stack {
  stack_;
  CSize;
  MaxSize;
  popItem;

  //constructor
  constructor(size) {
    this.stack_ = [];
    this.MaxSize = size;
    this.CSize = this.stack_.length;
  }

  //push element to stack
  push(newVal) {
    console.log("push");
    if (this.CSize == this.MaxSize) {
      console.log("stack is full, can't push element to stack..");
    } else {
      this.stack_[this.CSize] = newVal;
      this.CSize += 1;
    }
  }

  pop() {
    console.log("pop");
    if (this.CSize <= 0) {
      console.log("stack is empty, can't pop element from stack..");
    } else {
      this.popItem = this.stack_[this.CSize - 1];
      this.CSize -= 1;
      this.stack_.length = this.CSize;
    }
  }
}

// ob = new Stack(5);
// ob.push(10);
// ob.push(20);
// ob.push(30);
// ob.push(40);
// ob.push(50);
// console.log(ob.stack_);
// console.log(ob.CSize);
// console.log(ob.MaxSize);
