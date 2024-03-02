ele = document.getElementById("input");

try {
  hello();
} catch (error) {
  document.getElementById("error").innerHTML = error;
}

try {
  if (ele == "") throw "empty";

  if (isNaN(ele)) throw "Not a Number";
} catch (e) {
    document.getElementById("error2").innerHTML = e;
}
