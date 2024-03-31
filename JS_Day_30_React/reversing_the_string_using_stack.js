let stack_data = [];
let stackSize = stack_data.length;
let maxSize = 20;
let str1 = "pankaj";
str1 = str1.split("");
function push(str1) {
  console.log("push");
  //let stack_val = document.getElementById("inp_string").value;
  if (stackSize == maxSize) {
    console.log("Stack is full, can't push element to stack..");
  } else {
    //stack_data[stackSize] = stack_val;
    stack_data[stackSize] = str1;
    stackSize += 1;
    //document.getElementById("inp_string").value = "";
  }
}
function pop() {
  console.log("pop");
  if (stackSize <= 0) {
    console.log("stack is empty, can't pop element from stack..");
  } else {
    item = stack_data[stackSize - 1];
    stackSize -= 1;
    stack_data.length = stackSize;
    return item;
  }
}

function reverse_string(item) {
  let rev_str = [];
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    rev_str.push(pop());
  }
  return rev_str;
}
