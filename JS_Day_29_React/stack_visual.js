let stack_data = [];
let stack_CSize = stack_data.length;
let stack_MaxSize = 10;

// using let value accessed from html file outside function makes it undefined inside the function

function push() {
  console.log("push");
  let newVal = Number(document.getElementById("stack_val").value);
  if (stack_CSize == stack_MaxSize) {
    alert("stack is full, can't push element to stack..");
  } else {
    stack_data[stack_CSize] = newVal;
    stack_CSize += 1;
    document.getElementById("stack_val").value = " ";
  }
}
function pop() {
  console.log("pop");
  if (stack_CSize <= 0) {
    console.log("stack is empty, can't pop element from stack..");
  } else {
    stack_CSize -= 1;
    stack_data.length = stack_CSize;
  }
}

function display() {
  //alert(stack_CSize);
  console.log(stack_data);
}
