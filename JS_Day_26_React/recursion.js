// recursion
// recursion for fibonacci
//
//const num = 5;

function recursion_fun(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * recursion_fun(num - 1);
  }
}

let num = 5;

document.write("<br><br>" + recursion_fun(num));
