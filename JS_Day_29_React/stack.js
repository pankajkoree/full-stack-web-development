let stack_data = [];
let currentSize = stack_data.length;
let stack_MaxSize = 10;
//console.log(currentSize);

// pushing value to stack
function push(stackVal) {
  if (currentSize == stack_MaxSize) {
    console.log("Stack is full, can't push value to stack..");
  } else {
    stack_data[currentSize] = stackVal;
    currentSize += 1;
    console.log(stack_data);
  }
}

// push function call to add value
push(4);
push(14);
push(24);
push(34);
push(44);
push(54);
push(64);
push(74);
push(84);
push(94);
push(104);

function pop() {
  if (currentSize <= 0) {
    console.log("stack is empty, can't remove the element from stack..");
  } else {
    currentSize -= 1;
    stack_data.length = currentSize;
    console.log("stack element : ", stack_data);
  }
}

pop();
pop();
pop();
