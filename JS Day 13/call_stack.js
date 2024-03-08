function fun1() {
  fun2();
  document.write("calling function 2 inside function1"+"<br>");
}

function fun2() {
  fun3();
  document.write("Calling function 3 inside function 2"+"<br>");
}

function fun3() {
  document.getElementById("Calling the third function")+"<br>";
}

document.getElementById("call_stack").innerHTML = fun1();
